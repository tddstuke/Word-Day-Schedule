var tasks = [];

// add moment.js or day.js to title

var today = dayjs();
console.log(today.format("dddd, MMMM D, YYYY h:mm A"));
var getDay = function () {
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
};
getDay();

// make timeblock divs editable when clicked on
var editBlock = function () {
  var text = $(this).text().trim();
  var textInput = $("<textarea>")
    .addClass("form-control col-10 time text-left")
    .val(text);
  textInput.attr("id", $(this).attr("id"));
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
  console.log("clicked");
};

$(".saveBtn").on("click", function () {
  var text = $(this).siblings("textarea").val().trim();

  var hour = $(this).siblings(".time").attr("id");

  console.log(hour);
  var taskP = $("<p>").addClass("col-10 time text-left m-0 pt-2").text(text);

  $(this).siblings("textarea").replaceWith(taskP);
  $(taskP).attr("id", hour);
  saveTask(hour, text);
  auditTask(taskP);
});

var createTask = function () {};

// make save function tied to buttons
var loadTask = function (taskEl) {
  var hour = $(taskEl).attr("id");
  var text = localStorage.getItem(hour);
  console.log(text);

  $(taskEl).text(text);
};

// add color codes times for time of day
var auditTask = function (taskEl) {
  // get time from task element
  var hour = parseInt($(taskEl).attr("id"));
  console.log(hour);
  // convert to a dayjs object
  var time = dayjs().hour();
  console.log(time);

  // apply new class if task is near/over due date
  if (hour < time) {
    $(taskEl).addClass("past");
  } else if (hour === time) {
    $(taskEl).addClass("present");
  } else $(taskEl).addClass("future");
};

var saveTask = function (hour, text) {
  localStorage.setItem(hour, text);
};

// timer
setInterval(function () {
  $(".time").each(function (index, el) {
    auditTask(el);
    console.log("timer");
  });
}, 1000 * 60);

$(".row").on("click", ".time", editBlock);

// loadTask();

$(".time").each(function (index, el) {
  auditTask(el);
  loadTask(el);
});
