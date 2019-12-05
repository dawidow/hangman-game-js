const words = [
	'front end developer',
	'programming is more than passion',
	'english is must have language for all developers',
	'vue is a javascript framework',
];

const lettersBoard = document.querySelector('.letters'),
	textArea = document.querySelector('.textArea'),
	choosenLetters = document.querySelector('.choosenLetters');

let word = words[Math.floor(Math.random() * words.length)];
let wordLength = word.length;
let wordHidden = [];
let choosenLettersArray = [];

let image = document.querySelector('.hangman-img').src;
let lives = 4;

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const hiddenWord = (word) => {
	for(let i = 0; i < word.length; i++) {
		if(word.charAt(i) == ' ') {
			wordHidden.push('\xa0');
		} else {
			wordHidden.push('-');
		}
	}

	textArea.textContent = wordHidden.join(' ');
}

const checkLetter = e => {
	let eTarget = String(e.target.innerText.toLowerCase());

	for(let i = 0; i < wordHidden.length; i++) {

		if(word[i] === eTarget) {
			wordHidden[i] = eTarget;
			e.target.classList.add('letters__key--correct', 'letters__key--disabled');
		}

		textArea.textContent = wordHidden.join(' ');
	}

	choosenLettersArray.push(eTarget);
	choosenLetters.textContent = [...new Set(choosenLettersArray)];
}

for(let i = 0; i < letters.length; i++) {
	let letter = document.createElement('div');
	letter.textContent = letters[i].toUpperCase();
	letter.classList.add('letters__key');
	lettersBoard.appendChild(letter);

	letter.addEventListener('click', checkLetter, false);
}

window.addEventListener('DOMContentLoaded', hiddenWord(word));