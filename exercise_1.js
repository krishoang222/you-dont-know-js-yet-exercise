// AI reviews to improve:
// (1) keep repeating parse timeArray into separate function
// (2) validate input
// (3) (done) convert timeArray to object {hour, min} for easier reading
// (4) prefer Number(x) over +x
// (5) (done) comment for condition need more descriptive what that condition expected to check

const dayStart = "07:30";
const dayEnd = "17:45";

// parse constant time to array [hour,min], once
const [dayStartHour, dayStartMinute] = dayStart.split(":").map((e) => +e);
const [dayEndHour, dayEndMinute] = dayEnd.split(":").map((e) => +e);

function scheduleMeeting(startTime, durationMinutes) {
  durationMinutes = +durationMinutes;

  const [startMeetingHour, startMeetingMinute] = startTime
    .split(":")
    .map((e) => +e);
  const totalSumMinutes = startMeetingMinute + durationMinutes;

  // calculate end meeting time
  endMeetingHour = startMeetingHour + Math.floor(totalSumMinutes / 60);
  endMeetingMinute = totalSumMinutes % 60;

  // TODO: lack case check over 24
  console.log("End meeting time", [endMeetingHour, endMeetingMinute]);

  // Check hour only of meeting, whether it start before day start or after day end
  if (startMeetingHour < dayStartHour || endMeetingHour > dayEndHour) {
    console.log("False: hour is out of range");
    return false;
  }

  // When meeting hour is equals the day start hour, check that the meeting minute is not earlier than day start minute
  if (
    startMeetingHour === dayStartHour &&
    startMeetingMinute < dayStartMinute
  ) {
    console.log("False: minute is out of range");
    return false;
  }

  // When meeting hour is equals the day end hour, check that the meeting minute is not later than day end minute
  if (endMeetingHour === dayEndHour && endMeetingMinute > dayEndMinute) {
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
