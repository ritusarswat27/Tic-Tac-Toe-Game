let btnChoice = document.querySelectorAll(".button");
let msg = document.querySelector("#msg"); 
let userScore = document.querySelector("#userscore");
let compScore = document.querySelector("#compscore");

let user1Score = 0;
let user2Score = 0;

const drawGame = () => {
    msg.innerText="oops!! Game was Tie, Play Again";
};

const genCompChoice = () => {
    const options = ["rock","paper", "scissor"];
    const compChoice = Math.floor(Math.random() *3);
    return options[compChoice];
};

const showWinner = (compChoice,userWin,userChoice) => {
    if(userWin){
        user1Score++;
        userScore.innerText = user1Score;
        msg.innerText = `You win!! ${userChoice} beats ${compChoice}`;
    }
    else{
        user2Score++;
        compScore.innerText = user2Score;
        msg.innerText = `oops!! You lose... ${compChoice} beats ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    console.log("user choice",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false :true;
        }
        else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ?false : true;
        }
        else{
            userWin = compChoice === "scissor" ? false : true;
        }
    showWinner(compChoice, userWin, userChoice);
    }
    
};

btnChoice.forEach((button) => {
    button.addEventListener("click",() => {
    let userChoice = button.getAttribute("id");
    playGame(userChoice);    
});
});