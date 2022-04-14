// add moment.js or day.js to title
var today = dayjs();
console.log(today.format("dddd, MMMM D, YYYY h:mm A"));
var getDay = function () {
  $("#currentDay").text(today.format("dddd, MMMM, YYYY"));
};
getDay();
// make timeblock divs editable when clicked on

// make save function tied to buttons

// add color codes time-blocks for time of da
