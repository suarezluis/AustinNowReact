export function getDate() {
  let date = new Date();
  date = date.getDate();
  console.log(typeof date, date);
  let sufix = "";
  if (date === 1 || date === 21 || date === 31) {
    sufix = "st.";
  } else {
    if (date === 2 || date === 22) {
      sufix = "nd.";
    } else {
      if (date === 3 || date === 23) {
        sufix = "rd.";
      } else {
        sufix = "th.";
      }
    }
  }
  return date + sufix;
}

export function getDay() {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[date.getDay()];
}

export function getMonth() {
  let date = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return months[date.getMonth()];
}

export function getYear() {
  let date = new Date();

  return date.getFullYear();
}

export function getFullDate() {
  return `${getDay()} ${getMonth()} ${getDate()} ${getYear()}`;
}

export function getTime(format) {
  let date = new Date();
  let hours = parseInt(date.getHours(), 10);
  let minutes = parseInt(date.getMinutes(), 10);
  let seconds = parseInt(date.getSeconds(), 10);
  let amPM = "am";
  if (format === 12 && date.getHours() > 12) {
    hours = hours - 11;
    amPM = "pm";
  }
  if (format === 24) {
    amPM = "";
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds} ${amPM}`;
}
