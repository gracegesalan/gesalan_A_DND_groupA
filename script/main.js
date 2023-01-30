// variable always go at the top
//these are the connections that you're making to elements on the page 
// using CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable
// let theButton = document.querySelector('#buttonHolder')

// create a 1 to many connection with a variable -> queryselectorAll ('queryString')
// let the button = document.querySelector 
let theButtons = document.querySelectorAll('#buttonHolder img'), 
	theHeading = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board') ;


//step 3
// functionality always go in the middle-> how do we want
// the app to behave

function changeBGImage() {
	debugger;
	// theHeading.textContent = "Super Awesome Drag and Drop Game";
	let theNewSource = "images/backGround" + this.id + "jpg";

	console.log(theNewSource)

	// start with the object and then change a property 
	// or run a method

	theHeading.classList.add('orange-headline');
}

//step 2
// event handling always goes at the bottom
//how do we want users to interact with our app

// 1 to 1 event hadnling
// theButton.addEventListener('click', changeBGImage);

// 1 to many event handling

// add event handling to each button in the colelction of buttons one at a time
theButtons.forEach(button=> button.addEventListener("click", changeBGImage));