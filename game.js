let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;



const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            count++;
        }
        else {
            box.innerText = "X";
            turnO = true;
            count++;
        }
        box.disabled = true;
      
        // checkWinner();
        const isWin = checkWinner();
        if (!isWin && count === 9) {
            showDrawMessage();
        }

    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showDrawMessage = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}!!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    gsap.from(".msgContainer #msg", {
        x: 50,
        y: -40,
        scale: 3,
        opacity: 0,
        ease: "Power1.in",
        duration: 1.5
    }
    );
    gsap.from(".msgContainer #new-btn", {
        y: 40,
        scale: 2,
        opacity: 0,
        ease: "Power1.in",
        duration: 2,
        dealy: 2
    }
    );
};


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

//Gsap Animation

gsap.from("h1", {
    y: -40,
    opacity: 0,
    scale: 3,
    duration: 2,
    ease: Bounce.easeOut
})

const tl = gsap.timeline();

tl.from(".box", {
    x: 50,
    y: 50,
    duration: 2,
    opacity: 0,
    scale: 2,
    stagger: 0.2,
    ease: Bounce.easIn,
    rotate: 360
})

tl.from(".reset", {
    x: -50,
    y: 60,
    opacity: 0,
    duration: 0.5,
    scale: 2,
})
