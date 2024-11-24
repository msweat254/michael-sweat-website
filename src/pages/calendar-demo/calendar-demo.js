import React, { useEffect, useState, useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import eventsPromise from "./api/getEvents";
import CalendarPopup from "./components/CalendarPopup";
import RoutesPopup from "./components/RoutesPopup";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles/styles.css";
import "./styles/conditional-formatting.css";
import updateAppointment from "./api/updateAppointment";
import LoadingOverlay from "react-loading-overlay";
import optimizeAppointments from "./api/optimizeAppointments";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const CustomToolbar = ({
  date,
  onNavigate,
  setSelectedDate,
  handleOptimizePress,
}) => {
  useEffect(() => {
    setSelectedDate(date);
  }, [date, setSelectedDate]);

  return (
    <div className="rbc-toolbar">
      <div className="rbc-btn-group day-nav-btn">
        <button onClick={() => onNavigate("PREV")}>Back</button>
        <button onClick={() => onNavigate("TODAY")}>Today</button>
        <button onClick={() => onNavigate("NEXT")}>Next</button>
      </div>
      <span className="rbc-toolbar-label">
        {moment(date).format("dddd MMM DD")}
      </span>
      <div className="rbc-btn-group call-function-btn rbc-toolbar-buttons">
        <button onClick={handleOptimizePress}>Optimize</button>
        <button onClick={() => console.log("Publish button clicked")}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default function CalendarPage() {
  const [eventsData, setEventsData] = useState([]);
  const [resources, setResources] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCloserAppointments, setSelectedCloserAppointments] =
    useState(null);
  const [selectedCloser, setSelectedCloser] = useState(null);
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTeamId, setCurrentTeamId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAndSetEvents = async () => {
    console.log("Fetching data");
    setIsLoading(true);
    const events = await eventsPromise();

    setEventsData(events);

    const uniqueClosersMap = new Map();
    events.forEach((event) => {
      if (!uniqueClosersMap.has(event.resourceId)) {
        uniqueClosersMap.set(event.resourceId, {
          resourceId: event.resourceId,
          resourceTitle: event.resourceId,
          homeLng: event.homeLng,
          homeLat: event.homeLat,
          team_id: event.team_id,
        });
      }
    });

    const uniqueClosers = Array.from(uniqueClosersMap.values()).sort((a, b) =>
      a.resourceTitle.localeCompare(b.resourceTitle)
    );

    setResources(uniqueClosers);

    if (events.length > 0) {
      setCurrentTeamId(events[0].team_id);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAndSetEvents();
  }, [selectedDate]);

  const openCalendarPopup = (event) => {
    if (event.category == "PersonalAppointment") {
      return;
    }
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedEvent(null);
  };

  const handleCloserClick = (resource) => {
    const closer = resource.resourceTitle;
    const currentDate = selectedDate;
    const appointments = eventsData
      .filter(
        (event) =>
          event.resourceId === closer &&
          moment(event.start).isSame(currentDate, "day")
      )
      .sort((a, b) => new Date(a.start) - new Date(b.start))
      .map((event) => ({
        ...event,
        address: event.address,
      }));

    setSelectedCloserAppointments(appointments);
    setSelectedCloser(resource);
    setShowMapPopup(true);
  };

  const handleCloseMapPopup = () => {
    setShowMapPopup(false);
    setSelectedCloserAppointments(null);
    setSelectedCloser(null);
  };

  const hasOverlap = (currentEvent, allEvents) => {
    const relevantEvents = allEvents.filter(
      (event) =>
        event.resourceId === currentEvent.resourceId &&
        event.id !== currentEvent.id &&
        currentEvent.category !== "PersonalAppointment"
    );

    return relevantEvents.some(
      (event) =>
        (currentEvent.start >= event.start && currentEvent.start < event.end) ||
        (currentEvent.end > event.start && currentEvent.end <= event.end) ||
        (currentEvent.start <= event.start && currentEvent.end >= event.end)
    );
  };

  const eventPropGetter = useMemo(
    () => (event) => {
      const className = (() => {
        if (moment(event.start).isBefore(new Date())) return "event-past";
        if (event.category === "PersonalAppointment") return "personal-appt";
        if (hasOverlap(event, eventsData)) return "event-overlap";
        if (moment(event.start).day() === 0) return "event-sunday";
        if (moment(event.end).diff(moment(event.start), "minutes") > 60)
          return "event-long";
        return "";
      })();

      return { className };
    },
    [eventsData]
  );

  const CustomHeader = ({ label, resource }) => (
    <span className="rbc-header" onClick={() => handleCloserClick(resource)}>
      {label}
    </span>
  );

  const handleOptimizePress = async () => {
    await optimizeAppointments({
      date: selectedDate,
      teamId: currentTeamId,
    });
  };

  const onCloserChange = async (newCloser) => {
    await updateAppointment({
      apptId: selectedEvent.id,
      closerId: newCloser,
    });
    fetchAndSetEvents();
  };

  const onLockStateChange = async (newLockStatus) => {
    await updateAppointment({
      apptId: selectedEvent.id,
      isLocked: newLockStatus,
    });
    fetchAndSetEvents();
  };

  return (
    <div className="App">
      <LoadingOverlay active={isLoading} spinner fadeSpeed={200}>
        <Calendar
          views={["day"]}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="day"
          events={eventsData}
          timeslots={1}
          min={new Date(new Date().setHours(8, 0, 0, 0))}
          max={new Date(new Date().setHours(23, 59, 59, 59))}
          resources={resources}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
          onSelectEvent={openCalendarPopup}
          components={{
            toolbar: (props) => (
              <CustomToolbar
                date={props.date}
                onNavigate={props.onNavigate}
                setSelectedDate={setSelectedDate}
                handleOptimizePress={handleOptimizePress}
              />
            ),
            resourceHeader: CustomHeader,
          }}
          eventPropGetter={eventPropGetter}
        />

        {showPopup && selectedEvent && (
          <CalendarPopup
            customerName={selectedEvent.customerName}
            setterName={selectedEvent.setter}
            apptDate={moment(selectedEvent.start).format("MMMM Do YYYY")}
            apptTime={moment(selectedEvent.start).format("h:mm a")}
            address={selectedEvent.address}
            notes={selectedEvent.notes || "No notes provided"}
            closer={selectedEvent.resourceId}
            locked={selectedEvent.locked}
            closers={resources.map((r) => r.resourceTitle)}
            onClose={handleClosePopup}
            onCloserChange={onCloserChange}
            onLockStateChange={onLockStateChange}
            category={selectedEvent.category}
          />
        )}

        {showMapPopup && selectedCloserAppointments && (
          <RoutesPopup
            appointments={selectedCloserAppointments}
            selectedDate={moment(selectedDate).format("MM/DD/YYYY")}
            closer={selectedCloser.resourceTitle}
            onClose={handleCloseMapPopup}
            openCalendarPopup={openCalendarPopup}
          />
        )}
      </LoadingOverlay>
    </div>
  );
}
