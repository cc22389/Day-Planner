var currentHour = moment().format("HH");
console.log(currentHour);


// local storage for time table

//button and text  for 9am
$("#button-9").click(function() {
    console.log ("#button-9")
    var userText = document.getElementById("text-9").value;
    localStorage.setItem("notes-9", userText);
});

var textNine = localStorage.getItem("notes-9");
document.getElementById("text-9").value = textNine;

//button and text for 10am
$("#button-10").click(function() {
    console.log ("#button-10")
    var userText = document.getElementById("text-10").value;
    localStorage.setItem("notes-10", userText);
});

var textTen = localStorage.getItem("notes-10");
document.getElementById("text-10").value = textTen;

//button and text for 11am
$("#button-11").click(function() {
    console.log ("#button-11")
    var userText = document.getElementById("text-11").value;
    localStorage.setItem("notes-11", userText);
});

var textEleven = localStorage.getItem("notes-11");
document.getElementById("text-11").value = textEleven;

//button and text for 12pm
$("#button-12").click(function() {
    console.log ("#button-12")
    var userText = document.getElementById("text-12").value;
    localStorage.setItem("notes-12", userText);
});

var textTwelve = localStorage.getItem("notes-12");
document.getElementById("text-12").value = textTwelve;

//button and text for 1pm
$("#button-13").click(function() {
    console.log ("#button-13")
    var userText = document.getElementById("text-13").value;
    localStorage.setItem("notes-13", userText);
});

var textThirteen = localStorage.getItem("notes-13");
document.getElementById("text-13").value = textThirteen;

//button and text for 2pm
$("#button-14").click(function() {
    console.log ("#button-14")
    var userText = document.getElementById("text-14").value;
    localStorage.setItem("notes-14", userText);
});

var textFourteen = localStorage.getItem("notes-14");
document.getElementById("text-14").value = textFourteen;

//button and text for 3pm
$("#button-15").click(function() {
    console.log ("#button-15")
    var userText = document.getElementById("text-15").value;
    localStorage.setItem("notes-15", userText);
});

var textFifteen = localStorage.getItem("notes-15");
document.getElementById("text-15").value = textFifteen;

//button and text for 4pm
$("#button-16").click(function() {
    console.log ("#button-16")
    var userText = document.getElementById("text-16").value;
    localStorage.setItem("notes-16", userText);
});

var textSixteen = localStorage.getItem("notes-16");
document.getElementById("text-16").value = textSixteen;

//button and text for 5pm
$("#button-17").click(function() {
    console.log ("#button-17")
    var userText = document.getElementById("text-17").value;
    localStorage.setItem("notes-17", userText);
});

var textSeventeen = localStorage.getItem("notes-17");
document.getElementById("text-17").value = textSeventeen;



// var hours=['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
//     var userText = document.getElementById("text-10").value;
//     localStorage.setItem("notes-9", userText);
// });

// var textTen = localStorage.getItem("notes-10");
// document.getElementById("text-10").value = textTen;

// for (var i=0; i < 9; i++) {
//     $(buttonArray).click(function () {
//         console.log('click')
//         var userText = textArray;
//         // save text in local storage
//     localStorage.setItem("notes", userText);
//     });

//     var savedText = localStorage.getItem("notes");
//     textArray = savedText;
// }


// $("#button-10").click(function () {
//     console.log('click')
//     var userText = document.getElementById('text-10').value;
//     // save text in local storage
//    localStorage.setItem("notes-10", userText);
// });

// var textTen = localStorage.getItem("notes-10");
// document.getElementById('text-10').value = textTen;







// for (var i = 0; i < timeBlock.length; i++) {
//     var currentBlock = timeBlock[i];
//     var id = currentBlock.id;
//     // how to find out what hour currentBlock is
// }

// // figure out what hour it is

// var hours = 0;


// if (currentHour === '8') {
//     $("one,two,three").addClass("past");
//     $("eight").addClass("present");
//     $("ten,eleven").addClass("future");
// }
// if (currentHour === '9') {
//     $("one,two,three").addClass("past");
//     $("nine").addClass("present");
//     $("ten, eleven").addClass("future");
// }

// if (hours < currentHour) {
//     $("form-control").addClass("past")
// }

// if (hours == currentHour) {
//     $("form-control").addClass("present");
// }
// // if (document.body) {
// //     if (9 <=)
// // }


// // if (plannerHour < calendarHour) {
// //      calendarHour = pastTimeblock();
// // }
// // if (calendarHour > currentHour) {
// //         calendarHour = futureTimeblock();

// //     } else {
// //         calendarHour = presentTimeblock();
// //     }


// // var currentTime = new Date().getHours();
// // if (document.body) {
// //     if (7 <= currentTime && currentTime < 11) {
// //         document.body.background = "past";
// //     }
// //     else if (7 >= currentTime && currentTime  )  {
// //         document.body.background = "past";
// //     }
// //     else { document.body.background = "present";
// //     }
// // }


// function pastTimeblock() {
//     $(d).animate("past");
// }

// function futureTimeblock() {
//     $(d).animate("future");
// }

// function presentTimeblock() {
//     $(d).animate("present");
// }

