let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won!!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost!!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "crimson";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        msg.innerText = "Game was Draw, Play Again!";
        msg.style.backgroundColor = "#8AC4FF";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });
});

//Gsap Animation
let tl = gsap.timeline();

gsap.from("#heading", {
    scale:2,
    duration: 2,
    opacity: 0,
    ease: "power1.out",
})

tl.from(".choice", {
    y: -40,
    duration: 1.5,
    stagger: 0.2,
    scale: 1.5,
    ease: Bounce.easeOut
})

tl.from(".score", {
    x: 40,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    scale: 1.3,
})

tl.from("#msg", {
    y: -100,
    duration: 1,
    opacity: 0,
    scale: 2,
    stagger: 1,
})

choices.forEach(choice => {
    choice.addEventListener('mouseenter', () => {
        gsap.to(choice, {
            scale: 1.5,
            duration: 0.3,
            ease: "Power2.out",
            opacity: 2
        })
    })

    choice.addEventListener('mouseleave', () => {
        gsap.to(choice, {
            scale: 1,
            duration: 0.3,
            ease: "Power2.inOut"
        })
    })
})