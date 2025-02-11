/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//Answers:
document.querySelectorAll("p");
document.getElementsByClassName("site-header");
document.getElementById("jumbotron-text");
document.querySelectorAll("p.lead");
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var button = document.getElementById("alertBtn");
button.onclick = function () {
  alert("Thanks for visiting Bikes for Refugees");
};
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let backgroundClr = document.querySelector("#bgrChangeBtn");
backgroundClr.addEventListener("click", () => {
  document.body.style.background = "red";
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addTxt = "Read more below";
function Text() {
  document.getElementById("addTextBtn").innerHTML = addTxt;
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
