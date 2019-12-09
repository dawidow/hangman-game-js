const lettersBoard = document.querySelector('.letters'),
	textArea = document.querySelector('.textArea'),
	choosenLetters = document.querySelector('.choosenLetters'),
	livesCount = document.querySelector('.livesCount'),
	gameLoss = document.querySelector('.game-loss'),
	gameWin = document.querySelector('.game-win'),
	correctPass = document.querySelector('.game__correctPassword'),
	currentLives = document.querySelector('.game__currentLives'),
	playAgainButton = [...document.querySelectorAll('.game__button')];


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let image = document.querySelector('.hangman-img'),
	lettersAggregate = false;

const startGame = () => {
	const words = [
		'front end developer',
		'programming is more than passion',
		'english is must have language for all developers',
		'vue is a javascript framework',
	];

	let word = words[Math.floor(Math.random() * words.length)],
		wordHidden = [],
		lives = 5,
		choosenLettersArray = [];

	image.src = `./assets/hangman_5.svg`;
	gameLoss.classList.add('hidden');
	gameWin.classList.add('hidden');
	choosenLetters.textContent = '-';
	livesCount.textContent = 5;

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
		let eTarget = String(e.target.innerText.toLowerCase()),
			correctLetter = false;

		for(let i = 0; i < wordHidden.length; i++) {
			if(word[i] === eTarget) {
				correctLetter = true;
				wordHidden[i] = eTarget;
			}

			textArea.textContent = wordHidden.join(' ');
		}

		if(correctLetter) {
			for(let j = 0; j < wordHidden.length; j++) {
				if(word[j] === eTarget) {
					e.target.classList.add('letters__key--correct', 'letters__key--disabled');
				}
			}
		} else {
			image.src = `./assets/hangman_${lives--}.svg`;
			e.target.classList.add('letters__key--incorrect', 'letters__key--disabled');
		}

		livesCount.textContent = lives;
		choosenLettersArray.push(eTarget.toUpperCase());
		choosenLetters.textContent = [...new Set(choosenLettersArray)];

		gameResult(lives, word, wordHidden, choosenLettersArray, words);
	}

	lettersBoard.innerHTML = '';
	for(let i = 0; i < letters.length; i++) {
		let letter = document.createElement('div');
		letter.textContent = letters[i].toUpperCase();
		letter.classList.add('letters__key');
		lettersBoard.appendChild(letter);

		letter.addEventListener('click', checkLetter, false);
	}

	hiddenWord(word);
}

const gameResult = (gameChances, word, wordHidden, choosenLetters, words) => {
	if(word === wordHidden.join('')) {
		gameWin.classList.remove('hidden');
		currentLives.textContent = gameChances;
	} else if(gameChances === 0) {
		gameLoss.classList.remove('hidden');
		correctPass.textContent = word;
	}
}

startGame();
playAgainButton.forEach(btn => btn.addEventListener('click', startGame, false));