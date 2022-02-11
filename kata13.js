const talkingCalendar = function (date) {
  // break each part of the date string with format YYYY/MM/DD into parts and assign them to variables
  let yyyy = date.slice(0, 4);
  let mm = date.slice(5, 7);
  let dd = date.slice(8, 10);
  let ddSuffix;

  // switch statement for the month variables
  switch (mm) {
    case "01":
      mm = "January";
      break;
    case "02":
      mm = "February";
      break;
    case "03":
      mm = "March";
      break;
    case "04":
      mm = "April";
      break;
    case "05":
      mm = "May";
      break;
    case "06":
      mm = "June";
      break;
    case "07":
      mm = "July";
      break;
    case "08":
      mm = "August";
      break;
    case "09":
      mm = "September";
      break;
    case "10":
      mm = "October";
      break;
    case "11":
      mm = "November";
      break;
    case "12":
      mm = "December";
      break;
  }

  // switch statement for the day suffixes (depending on day to call st, nd, rd, th)
  switch (dd) {
    case "01":
      ddSuffix = "st";
      break;
    case "02":
      ddSuffix = "nd";
      break;
    case "03":
      ddSuffix = "rd";
      break;
    case "21":
      ddSuffix = "st";
      break;
    case "22":
      ddSuffix = "nd";
      break;
    case "23":
      ddSuffix = "rd";
      break;
    case "31":
      ddSuffix = "st";
      break;
    default:
      ddSuffix = "th";
      break;
  }
  // calling the variables once it completes running loops, don't forget to change days to numbers otherwise first case will give you number 02nd as day (instead of expected 2nd)
  return `${mm} ${Number(dd)}${ddSuffix}, ${yyyy}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
