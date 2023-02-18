// variable always go at the top
//these are the connections that you're making to elements on the page 
// using CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable
// let theButton = document.querySelector('#buttonHolder')

// create a 1 to many connection with a variable -> queryselectorAll ('queryString')
// let the button = document.querySelector 
let theButtons = document.querySelectorAll("#buttonHolder img"), 
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	draggedPiece; 
	// theNavEl = document.querySelector("a");
	// store the dragged piece in a global variable because we need  it in the handledrop function


//step 3
// functionality always go in the middle-> how do we want
// the app to behave

// function changeBGImage() {
// 	// debugger;
// 	// theHeading.textContent = "Super Awesome Drag and Drop Game";
// 	let theNewSource = "images/backGround" + this.id + "jpg";

// 	console.log(theNewSource)

// 	// start with the object and then change a property 
// 	// or run a method

// 	theHeading.classList.add('orange-headline');
// }

function changeBGImage() {
	// the `` is a javascript template string. it tells the 25 enging to evaliuuate the 
	// puzzleBoard.getElementsByClassName.backgroundImage= `url('images/backGround0${this.id}.jpg')`;
	// dropZones.forEach(zone => {zone.innerHTML = ''});
	puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
	// puzzlePieces.forEach(piece => {piece.classList.remove('dropped');
	// puzzleBoard.appendChild(piece);});

	

	dropZones.forEach(zone => {
		zone.innerHTML = '';
	  });

	  puzzlePieces.forEach(piece => {
		piece.classList.remove('dropped');
		puzzleBoard.appendChild(piece);
	  });

	  puzzlePieces.forEach(piece => {
    let index = piece.dataset.index;
    piece.style.left = `${pieces[index].x}px`;
    piece.style.top = `${pieces[index].y}px`;
  });

	// second bug is here
}

function handleStartDrag() {
	console.log('started dragging this piece:', this);
	draggedPiece = this;
	// store a reference to the puzzle pieces image that we're dragging so we can use it later and move it to a drop zone

}

function handleDragOver(e) { 
	e.preventDefault();
	console.log('dropped something on me');
	
}


function handleDrop(e) {
	e.preventDefault();
	console.log('dropped something on me');

	if (this.children.length > 0) {
		return;
	}





	// first bug is here
	// this line is going to move the dragged piece from the left side of the board
	// into whatever drop zone we choose. appendchild means 'add elements to the container"
	this.appendChild(draggedPiece);
	}

//step 2
// event handling always goes at the bottom
//how do we want users to interact with our app

// 1 to 1 event hadnling
// theButton.addEventListener('click', changeBGImage);

// 1 to many event handling

// add event handling to each button in the colelction of buttons one at a time


theButtons.forEach(button=> button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces 
puzzlePieces.forEach(piece=> piece.addEventListener('dragstart', handleStartDrag));

// add the drog over and the drop event handling 

dropZones.forEach(zone=>zone.addEventListener("dragover", handleDragOver));


dropZones.forEach(zone=> zone.addEventListener("drop", handleDrop));

// function blockDefault(event) {
// 	// clock the default behavior od certain elements 
// 	event.preventDefault();

// 	console.log('do whatever we want instead');
// }

// theNavEl.addEventListener('click', blockDefault);