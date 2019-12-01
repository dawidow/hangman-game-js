const words = [
	'front end developer',
	'programming is more than passion',
	'english is must have language for all developers',
	'vue is a javascript framework',
];

const lettersBoard = document.querySelector('.letters'),
	textArea = document.querySelector('.textArea');

let word = words[Math.floor(Math.random() * words.length)];
let wordLength = word.length;
let wordHidden = '';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const hiddenWord = (word) => {
	for(let i = 0; i < word.length; i++) {
		if(word.charAt(i) == ' ') {
			wordHidden += '\xa0';
		} else {
			wordHidden += ' _ ';
		}
	}

	textArea.textContent = wordHidden;
}

const checkLetter = e => {
	if(word.indexOf(e.target.textContent) === -1) {
		e.target.classList.add('.letters__key--correct');
		console.log('tak');
	} else {
		e.target.classList.add('.letters__key--incorrect');
		console.log('nie');
	}
}

for(let i = 0; i < letters.length; i++) {
	let letter = document.createElement('div');
	letter.textContent = letters[i].toUpperCase();
	letter.classList.add('letters__key');
	lettersBoard.appendChild(letter);

	letter.addEventListener('click', checkLetter);
}

window.addEventListener('DOMContentLoaded', hiddenWord(word));