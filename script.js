function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let randomSelection = Math.floor(Math.random()* 3);
    let selectedOption = options[randomSelection];
    return selectedOption;
    }

function playRound(playerSelection, computerSelection){
    let computer = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();
    switch (true) {
        case ((computer == "paper" && player=="rock") ||(computer == "scissors" && player==="paper") || (computer == "rock" && player ==="scissors" )):
            
        return ("You lose! " + computer + " beats " + player);
            break;
        
        case ((computer =="rock" && player=="paper") ||(computer == "paper" && player=="scissors") || (computer === "scissors" && player ==="rock" )):

            return ("You win! "+ player + " beats " + computer);
            break;

        case (computer == player): 
            return ("draw");
            break;
        default:
            return ("Invalid user input");
        }
}
    let thePlayer = "Rock";
    console.log(playRound(thePlayer, getComputerChoice()));
    console.log(thePlayer.toLowerCase());