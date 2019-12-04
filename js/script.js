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
			wordHidden += '-';
		}
	}

	textArea.textContent = wordHidden;
}

const checkLetter = e => {
	// here we will check if the letter you clicked is in the given sentence.
	let indexedWord = wordHidden.split(''),
		eTarget = String(e.target.innerText.toLowerCase());

	for(let i = 0; i < wordHidden.length; i++) {

		if(word[i] === eTarget) {
			indexedWord[i] = eTarget;
			console.log(wordHidden[i], eTarget, i, wordHidden);
		} else {
			// error code goes here

		}

		textArea.textContent = indexedWord.join('');;

	}
}

for(let i = 0; i < letters.length; i++) {
	let letter = document.createElement('div');
	letter.textContent = letters[i].toUpperCase();
	letter.classList.add('letters__key');
	lettersBoard.appendChild(letter);

	letter.addEventListener('click', checkLetter, false);
}

window.addEventListener('DOMContentLoaded', hiddenWord(word));