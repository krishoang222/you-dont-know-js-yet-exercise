const dayStart = "07:30";
const dayEnd = "17:45";



function scheduleMeeting(startTime, durationMinutes) {
    durationMinutes = +durationMinutes

  // convert time to array [hour,min]
  const startMeetingTimeArray = startTime.split(":").map((e) => +e);
  const endMeetingTimeArray = [];

  const dayStartTimeArray = dayStart.split(":").map((e) => +e);
  const dayEndTimeArray = dayEnd.split(":").map((e) => +e);

  const totalSumMinutes = startMeetingTimeArray[1] + durationMinutes;

  // calculate end meeting time
  endMeetingTimeArray[0] =
    totalSumMinutes / 60 >= 1
      ? startMeetingTimeArray[0] + Math.floor(totalSumMinutes / 60)
      : startMeetingTimeArray[0];
  endMeetingTimeArray[1] = totalSumMinutes % 60;

  // TODO: lack case check over 24
  console.log("End meeting time", endMeetingTimeArray);

  if (
    startMeetingTimeArray[0] < dayStartTimeArray[0] ||
    endMeetingTimeArray[0] > dayEndTimeArray[0]
  ) {
    console.log("False: hour is out of range");
    return false;
  } else if (
    (startMeetingTimeArray[0] === dayStartTimeArray[0] &&
      startMeetingTimeArray[1] < dayStartTimeArray[1]) ||
    (endMeetingTimeArray[0] === dayEndTimeArray[0] &&
      endMeetingTimeArray[1] > dayEndTimeArray[1])
  ) {
    console.log("False: minute is out of range");
    return false;
  }

  return true;
}

// TEST CASES
[
  ["7:00", 15, false],
  ["7:15", 30, false],
  ["7:30", 30, true],
  ["11:30", 60, true],
  ["17:00", 45, true],
  ["17:30", 30, false],
  ["18:00", 15, false],
].forEach((e) => {
  console.log(scheduleMeeting(e[0], e[1]), e[2], "\n");
});
