let countries = ['Spain', 'Germany', 'Chile', 'Greece', 'Mexico', 'Japan', 'Italy', 'England', 'Portugal', 'Sweden',
    'Poland', 'China', 'Brazil', 'France',
];

let chosenWord = countries[Math.floor(Math.random() * countries.length)];

let mistakes = 0;
let guessedWord = []
let gamePlays = false;
let points = 360;

let article = document.getElementById('hidden-word')
let wrongLetter = document.getElementById('wrong-letter')

let point = document.getElementById('point')
point.innerHTML = `${points}`

let startBtn = document.getElementById('start-btn')


startBtn.addEventListener('click', function () {

    gamePlays = true

    startBtn.remove();
    picture.remove();

    wrongLetter.style.display = 'block'
    score.style.display = 'block'

    for (let i = 0; i < chosenWord.length; i++) {
        let letters = document.createElement('p')
        letters.setAttribute("id", `${i}`);

        article.appendChild(letters)
        letters.className = 'letters'
    }
})


document.addEventListener('keyup', function (x) {
    if (x.key >= 'a' && x.key <= 'z') {
        if (gamePlays) {
            let found = false

            for (let i = 0; i < chosenWord.length; i++) {
                checkInput(chosenWord[i], x.key, i);
            }

            function checkInput(word, input, i) {
                if (word.toLowerCase() === input) {
                    document.getElementById(`${i}`).textContent = input
                    guessedWord[i] = input
                    found = true

                    if (guessedWord.join('').toLowerCase() === chosenWord.toLowerCase()) {
                        gamePlays = false;
                        youWon()
                    }
                }
            }

            if (found == false) {

                let text = document.createElement('p')
                text.innerHTML = x.key
                text.className = 'text'
                wrongLetter.appendChild(text)

                mistakes++;
                points -= 60;
                point.innerHTML = `${points}`
            }


            switch (mistakes) {

                case 1:
                    ground.style.display = 'block'
                    break;
                case 2:
                    head.style.display = 'block'
                    break;
                case 3:
                    scaffold.style.display = 'block'
                    break;
                case 4:
                    bodyy.style.display = 'block'

                    break;
                case 5:
                    arms.style.display = 'block'
                    break;
                case 6:
                    legs.style.display = 'block'
                    gamePlays = false
                    gameOver()
                    break;

            }
        }
    }
})

function gameOver() {
    game.style.display = 'block'
    title.innerHTML = 'Game Over'
    span.innerHTML = `${chosenWord}`;
}

function youWon() {
    game.style.display = 'block'
    title.innerHTML = `You won! and scored ${points} points`
    span.innerHTML = `${chosenWord} `;
}