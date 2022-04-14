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
  var textInput = $("<textarea>").addClass("form-control col-10").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
  console.log("clicked");

  // return to text not textarea

  //     var text = $(this).val().trim();
  //     var time = $(this).closest(".hour").attr("id");

  //     var taskP = $("<p>").text(text);
  //     $(this).replaceWith(taskP);
};

// make save function tied to buttons

// add color codes time-blocks for time of da
var toText = function () {
  console.log("blur");
};
$(".task-area").on("click", editBlock);
$(".task-area").on("blur", toText);
