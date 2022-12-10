let inenerNavWidth = $("#navInner").outerWidth();
let navleft = $("#navOuter").css("left");

$("#navIcon").click(function () {
  navleft = $("#navOuter").css("left");
  if (navleft == "0px") {
    $("#navIcon").animate({ left: `${inenerNavWidth}px` }, 500);
    navleft = $("#navOuter").animate({ left: `${inenerNavWidth}px` }, 500);
  } else {
    $("#navIcon").animate({ left: `0px` }, 500);
    navleft = $("#navOuter").animate({ left: `0px` }, 500);
  }
});

$("#closeNav").click(function () {
  navleft = $("#navOuter").animate({ left: `0px` }, 500);
  $("#navIcon").animate({ left: `0px` }, 500);
});

$(".header").click(function () {
  $(this).siblings().toggle();
});

var countDownDate = new Date("jan 1, 2023 15:00:00").getTime();

var counter = setInterval(function () {
  var currentDate = new Date().getTime();
  var timeLeft = countDownDate - currentDate;
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  document.getElementById("durationContent").innerHTML = `
  <div id="daysCounter" class="durationList ">
  ${days}  D
  </div>
  <div id="hoursCounter" class="durationList ">
  ${hours} h
  </div>
  <div id="minutesCounter" class="durationList ">
  ${minutes} m
  </div>
  <div id="secondCounter" class="durationList ">
  ${seconds} s
  </div>`;
  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("durationContent").innerHTML = "EXPIRED";
  }
}, 1000);

$("#message").keyup(function () {
  let len = $(this).val().length;
  if (len > 100) {
    this.value = this.value.substing(0, 100);
  } else {
    $("#charCountNumber").text(100 - len);
  }
});
