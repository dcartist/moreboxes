//console.log("oompa works!! woohoo");

// main goal: click link turn different colors
// main goal 2nd: when one color is clicked
// the rest of the colors are turned off
// main goal 3rd: Keep points of how many
// times I clicked on the links
// main goal 4: If I click more than 5 times,
// the message will change to something crazy

// grab the uno link
// grab the uno box
// grab the dos link
// grab the dos box
// grab the tres link
// grab the tres box
// grab the four link
// grab the four box
// grab the five link
// grab the five box
// add a score variable
// grab the score display ####
// grab the "nothing to see here" message

// when uno link is clicked the uno box
// will change colors
// the rest of the boxes will be turned off
// uno box will change to the color red

//when dos link is clicked on the dos box will change to blackbox
//the rest of the boxes will be turned-off

//when thres link is clicked on the thres box will change to yellowbox
//the rest of the boxes will be turned-off

//when four link is clicked on the four box will change to purplebox
//the rest of the boxes will be turned-off

//when five link is clicked on the five box will change to orangebox
//the rest of the boxes will be turned-off

// when links are clicked more than 5 times message will change
// for link that is click add one to the score
// display new score
// take message link and display new message after clicked 5 times

let unoLink = document.querySelector("#unoLink");
// console.log(unoLink);
let unoBox = document.querySelector("#uno");
// console.log(unoBox);
let dosLink = document.querySelector("#dosLink");
let dosBox = document.querySelector("#dos");
// console.log(dosBox);
let thresLink = document.querySelector("#thresLink");
let thresBox = document.querySelector("#thres");
// console.log(tresLink);
// console.log(tresBox);
let fourLink = document.querySelector("#fourLink");
let fourBox = document.querySelector("#four");
let fiveLink = document.querySelector("#fiveLink");
let fiveBox = document.querySelector("#five");
let score = 0;
let scoreDisplay = document.querySelector(".main-score");
let message = document.querySelector("#scoring-message");

function scoring() {
  score += 1;
  scoreDisplay.innerText = "00000" + score;
  if (score >= 5) {
    message.innerText = "Ummmm.. you're clicking A LOT";
  }
}

unoLink.addEventListener("click", function (e) {
  e.preventDefault();
  scoring();
  dosBox.classList.remove("blackbox");
  unoBox.classList.add("redbox");
  thresBox.classList.remove("yellowbox");
  fourBox.classList.remove("purplebox");
  fiveBox.classList.remove("orangebox");
});

dosLink.addEventListener("click", function (e) {
  e.preventDefault();
  scoring();
  dosBox.classList.add("blackbox");
  unoBox.classList.remove("redbox");
  thresBox.classList.remove("yellowbox");
  fourBox.classList.remove("purplebox");
  fiveBox.classList.remove("orangebox");
  // thresBox.classList.toggle("blackbox")
});

thresLink.addEventListener("click", function (e) {
  e.preventDefault();
  scoring();
  dosBox.classList.remove("blackbox");
  unoBox.classList.remove("redbox");
  thresBox.classList.add("yellowbox");
  fourBox.classList.remove("purplebox");
  fiveBox.classList.remove("orangebox");
});
fourLink.addEventListener("click", function (e) {
  e.preventDefault();
  scoring();
  dosBox.classList.remove("blackbox");
  unoBox.classList.remove("redbox");
  thresBox.classList.remove("yellowbox");
  fourBox.classList.add("purplebox");
  fiveBox.classList.remove("orangebox");
});

fiveLink.addEventListener("click", function (e) {
  e.preventDefault();
  scoring();
  dosBox.classList.remove("blackbox");
  unoBox.classList.remove("redbox");
  thresBox.classList.remove("yellowbox");
  fourBox.classList.remove("purplebox");
  fiveBox.classList.add("orangebox");
});
