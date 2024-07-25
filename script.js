function showComputerChoice(option){
    let computerChoice = document.querySelector(".image-placeholder-alt");
    computerChoice.textContent = option;
    computerChoice.style.fontSize = "35px";
}

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let randomSelection = Math.floor(Math.random()* 3);
    let selectedOption = options[randomSelection];

    showComputerChoice(selectedOption);
    return selectedOption;
    }

function playRound(player){
    let computer = getComputerChoice();


    switch (true) {
        case ((computer ==="paper" && player==="rock") ||(computer ==="scissors" && player==="paper") || (computer ==="rock" && player ==="scissors" )):
            
            return 0;
        break;
        
        case ((computer==="rock" && player==="paper") ||(computer ==="paper" && player==="scissors") || (computer === "scissors" && player ==="rock" )):

            return 1;

        break;

        case(computer == player):
            return 2;
        break;

            default:
            return ("Invalid user input, try again");
        }
}


let numOfMatches = 1; // maximum: 5
let resultPanel = document.querySelector(".results");
let user = document.querySelector(".user");
let playerChoice;

let computerPoints = 0;
let userPoints = 0;

let computerText = document.querySelector(".image-placeholder-alt");

user.addEventListener('click', (event) => {
    
    let target = event.target;
    let point = document.createElement("div");
    point.classList.add("result-box");

    switch (target.id) {
        case "rock":
            playerChoice = "rock";
            break;
        
        case "paper":
            playerChoice = "paper";
            break;

        case "scissors":
            playerChoice = "scissors";
            break;
        default:
            break;
    }
    if (numOfMatches<=5) {
        let result = playRound(playerChoice);

        switch (result) {
            case 0:
                
                point.style.backgroundColor = "red";
                point.textContent = "C";
                resultPanel.appendChild(point);
                computerPoints++;
                break;
            
            case 1:

                point.style.backgroundColor = "green";
                point.textContent = "U";
                resultPanel.appendChild(point);
                userPoints++;
                break;

            case 2:

                let draw = document.querySelector(".image-placeholder-alt");
                draw.textContent += " (draw)";
                numOfMatches--;
                break;

            default:
                break;
        }

        numOfMatches++;
    }
    else {
        while (resultPanel.firstChild) {
            resultPanel.removeChild(resultPanel.lastChild);
        }

        computerText.textContent = "Clique aqui para reiniciar o jogo.";
        computerText.classList.add("play-again-text");

        point.classList.add("final-result-box");
        resultPanel.appendChild(point);

        if (userPoints > computerPoints) {
            point.textContent = "Usuário Ganhou!";
        }
        else{
            point.textContent = "Computador Ganhou!";
        }
    }


});

// Para reiniciar o jogo
computerText.addEventListener('click', ()=> {
    numOfMatches = 1;
    while (resultPanel.firstChild) {
        resultPanel.removeChild(resultPanel.lastChild);
    }

    //Restart computer text
    computerText.classList.remove("play-again-text");
    computerText.textContent = "Computer choice will be displayed here";
    computerText.style.fontSize = "16px";
});
