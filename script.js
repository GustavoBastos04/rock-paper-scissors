function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let randomSelection = Math.floor(Math.random()* 3);
    let selectedOption = options[randomSelection];
    return selectedOption;
    }

function playRound(){
    let computer = getComputerChoice().toLowerCase();
    let player = window.prompt("Choose Rock, Paper or Scissors").toLowerCase();

    switch (true) {
        case ((computer ==="paper" && player==="rock") ||(computer ==="scissors" && player==="paper") || (computer ==="rock" && player ==="scissors" )):
            
            return 0;
        break;
        
        case ((computer==="rock" && player==="paper") ||(computer ==="paper" && player==="scissors") || (computer === "scissors" && player ==="rock" )):

            return 1;

        break;

        case(computer === player):
            return 2;
        break;

            default:
            return ("Invalid user input, try again");
        }
}

function playGame(){
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if(result == 0) computer++;
        else if(result == 1) player++;
        else if(result ==2 ) console.log("Draw");
        else { 
            console.log(result)
            i--;
        }
    }
    switch (true) {
        case (player>computer):
            return "Player won the match!";
            break;
        
        case(computer>player):
            return "Computer won the match!";
        default:
            return "Draw!"
            break;
    }
}
console.log(playGame());