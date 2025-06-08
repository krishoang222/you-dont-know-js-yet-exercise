// AI reviews to improve:
// (1) keep repeating parse timeArray into separate function
// (2) validate input
// (3) convert timeArray to object {hour, min} for easier reading
// (4) prefer Number(x) over +x 

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
       startMeetingTimeArray[0] + Math.floor(totalSumMinutes / 60)
  endMeetingTimeArray[1] = totalSumMinutes % 60;

  // TODO: lack case check over 24
  console.log("End meeting time", endMeetingTimeArray);

  if (
    startMeetingTimeArray[0] < dayStartTimeArray[0] ||
    endMeetingTimeArray[0] > dayEndTimeArray[0]
  ) {
    // compare hour only if it's out of range [hourDayStart, hourDayEnd]
    console.log("False: hour is out of range");
    return false;
  } else if (
    // compare minute only when hour similar 
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
].forEach(([startTime, duration, expected]) => {
  console.log(scheduleMeeting(startTime, duration), expected, "\n");
});
