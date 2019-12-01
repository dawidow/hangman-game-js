const words = [
	'apple',
	'orange',
	'pineapple',
	'banana',
	'watermelon'
];

const lettersBoard = document.querySelector('.letters');

let word = words[Math.floor(Math.random() * words.length)];

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for(let i = 0; i < letters.length; i++) {
	let letter = document.createElement('div');
	letter.textContent = letters[i].toUpperCase();
	letter.classList.add('letters__key');
	lettersBoard.appendChild(letter);
}