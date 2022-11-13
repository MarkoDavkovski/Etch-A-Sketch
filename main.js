let color = 'black';
let click = true;
function createBoard(size) {
	let board = document.querySelector('.board');
	let cell = board.querySelectorAll('div');
	cell.forEach((div) => div.remove());

	board.style.gridTemplateRows = `repeat(${size},1fr)`;
	board.style.gridTemplateColumns = `repeat(${size},1fr)`;

	let amount = size * size;
	for (let i = 0; i < amount; i++) {
		let cell = document.createElement('div');
		cell.style.border = '1px solid #c5c5c5';
		cell.addEventListener('mouseover', colorCell);
		board.insertAdjacentElement('beforeend', cell);
	}
}
createBoard(16);
function changeSize(size) {
	if (size >= 1 && size <= 100) createBoard(size);
	else alert('Enter a number between 1 and 100!');
}

function colorCell() {
	if (click) {
		if (color === 'random')
			this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
		else this.style.backgroundColor = color;
	}
}

function changeColor(choice) {
	color = choice;
}

function sizePrompt() {
	let x = prompt('Enter the size of the grid!', '');
	let value = parseInt(x);
	changeSize(value);
}

function resetBoard() {
	let board = document.querySelector('.board');
	let cell = board.querySelectorAll('div');
	cell.forEach((div) => (div.style.backgroundColor = 'white'));
}

document.querySelector('body').addEventListener('click', (e) => {
	if (e.target.tagName != 'BUTTON') {
		click = !click;
		if (click) document.querySelector('.mode').textContent = 'Mode : Coloring';
		else document.querySelector('.mode').textContent = 'Mode : Not Coloring';
	}
});
