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
    .addClass("form-control col-10 time-block text-left")
    .val(text);
  textInput.attr("id", $(this).attr("id"));
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
  console.log("clicked");
};

$(".saveBtn").on("click", function () {
  var text = $(this).siblings("textarea").val().trim();

  var hour = $(this).siblings(".time-block").attr("id");

  console.log(hour);
  var taskP = $("<p>")
    .addClass("col-10 time-block text-left m-0 pt-2")
    .text(text);

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
  // $(tasks).each(function (items) {
  //   var text = tasks.text;
  //   var hour = tasks.hour;
  //   var taskP = $("<p>").addClass("col-10 task-area text-left mt-2").text(text);
  //   $(".time-block").find().siblings(".hour").is(hour).replaceWith(taskP);
  // });
};

// add color codes time-blocks for time of day
var auditTask = function (taskEl) {
  // get time from task element
  var hour = $(taskEl).attr("id");
  console.log(hour);
  // convert to a dayjs object
  var time = dayjs().hour(hour, "H");
  console.log(time);

  // apply new class if task is near/over due date
  if (dayjs().isAfter(time)) {
    $(taskEl).addClass("bg-secondary");
  } else if (dayjs() === time) {
    $(taskEl).addClass("bg-danger");
  } else $(taskEl).addClass("bg-success");
};

var saveTask = function (hour, text) {
  localStorage.setItem(hour, text);
};

// timer
setInterval(function () {
  $(".time-block").each(function (index, el) {
    auditTask(el);
    console.log("timer");
  });
}, 1000 * 60);

$(".row").on("click", ".time-block", editBlock);

// loadTask();

$(".time-block").each(function (index, el) {
  auditTask(el);
  loadTask(el);
});
