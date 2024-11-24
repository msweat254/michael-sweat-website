// import moment from "moment-timezone"; // Uncomment if needing time zone support
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper function to update the date to today while keeping the time intact
const updateDateToToday = (datetimeString) => {
  const now = new Date();
  const [timePart] = datetimeString.split(" ").slice(-2); // Extract time part from the datetime string
  const [hours, minutes, seconds] = timePart.split(":").map(Number);

  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    seconds || 0 // Handle case where seconds may not be present
  );

  return today;
};

const fetchEvents = async () => {
  try {
    const response = await fetch("static/data/calendar-data.json");
    const data = await response.json();

    const formattedEvents = Object.values(data).flatMap(
      (closerData, closerIndex) => {
        const closerName = closerData.name;

        return closerData.appointments.map((appointment, index) => ({
          id: `${closerIndex}-${index}`,
          title:
            appointment.category === "ProposalAppointment"
              ? `${appointment.customer_name || "Unknown Customer"} - ${
                  appointment.city || "No Location"
                }`
              : "Personal Appointment",
          start: updateDateToToday(appointment.start_time),
          end: updateDateToToday(appointment.end_time),
          notes: appointment.notes || "No notes provided",
          setter: appointment.setter_name || closerName,
          customerName: appointment.customer_name || "Unknown Customer",
          address: `${appointment.street || "Unknown street"}, ${
            appointment.city || "Unknown city"
          }, ${appointment.state || "Unknown state"}, ${
            appointment.zip_code || ""
          }`,
          resourceId: closerName,
          category: appointment.category,
          homeLng: closerData.longitude,
          homeLat: closerData.latitude,
          team_id: closerData.team_id,
          locked: appointment.is_locked,
        }));
      }
    );

    await sleep(2000); // Simulating delay, consider removing or optimizing

    return formattedEvents;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export default fetchEvents;
