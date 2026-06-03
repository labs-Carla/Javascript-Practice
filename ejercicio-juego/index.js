/*Planning for Rock Scissors Paper */

// 1. Write function that generates random  number between 0-3

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);

    if(randomNumber === 0){
        return "rock";
    }else if(randomNumber === 1){
        return "paper";
    }else {
        return "scissors";
    }
}

//console.log(getComputerChoice());

// 2. Write function that takes the input of the player

function getHumanChoice(){

    const choice = prompt("Write your choice");
    return choice;
}

//console.log(getHumanChoice());

/*4. Write a function for 5 rounds */

function playGame(){
    
/*3. Function that compares human choice against computerChoice

    rock beats scissors
    paper beats rock
    scissors beats paper 
    */
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

    const option = humanChoice.toLowerCase(); //requirement needs treatment for input variations, so the input is transformed to lowerCase making it case-sensitive

    if (option === "rock") {

        if (computerChoice === "scissors"){
            humanScore++;
            return "You win!, rock beats scissors";
        }
    
        else if (computerChoice === "paper"){
            computerScore++;
            return "You lose!, paper beats rock";
        }
        else 
        {
            return "It's a tie";
        }
    }

    else if (option ==="paper"){

        if (computerChoice === "rock"){
            humanScore++;
            return "You win, paper beats rock";
        }
        else if (computerChoice === "scissors"){
            computerScore++;
            return "You lose!, scissors beats paper";
        }
        else {
            return ("It's a tie");
        }

    }

    else  
    {
        if(computerChoice==="paper"){
            humanScore++;
            return "You win, scissors beats paper";
        }else if (computerChoice ==="rock"){
            computerScore++;
            return "You lose, rock beats scissors";

        }else {
            return "It's a tie";
        }
    }

}

console.log(playRound(getHumanChoice(),getComputerChoice()));
console.log(playRound(getHumanChoice(),getComputerChoice()));
console.log(playRound(getHumanChoice(),getComputerChoice()));
console.log(playRound(getHumanChoice(),getComputerChoice()));
console.log(playRound(getHumanChoice(),getComputerChoice()));


console.log("Human score: "+humanScore);
console.log("Human score: "+computerScore);



if (humanScore > computerScore){
    return "Human wins";
}
else if (computerScore > humanScore){
    return "Computer wins";
}else {
    return "It's a tie";
}

}


console.log(playGame());