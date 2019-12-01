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

const hiddenWord = word => {
	const textArea = document.querySelector('.textArea');
	let textLength = word.length,
		textArray = [];

	for(let i = 0; i < textLength; i++) {
		textArray.push(' _ ');
		textArea.textContent = textArray.join(' ');
	}
	console.log(word);

}

window.addEventListener('DOMContentLoaded', hiddenWord(word));