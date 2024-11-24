const updateAppointment = async ({ apptId, closerId, isLocked }) => {
  console.log(`Updating appt with id: ${apptId}`);

  if (closerId !== null && closerId !== undefined) {
    console.log(`Updated appt to have closer ${closerId}`);
  }

  if (isLocked !== null && isLocked !== undefined) {
    console.log(`Updated appt to have a locked status of ${isLocked}`);
  }
};

export default updateAppointment;
