let dice = document.getElementById('dice');

let comeOut = document.getElementById('roll');

comeOut.onclick = function (){
  rollDice();
}

function rollDice(){
 let diceRandom = Math.floor((Math.random() * 6) +1);



  for(let i = 1; i <= 6; i++){
    dice.classList.remove('show-' + i);
    if(diceRandom == i){
      dice.classList.add("show-" + i);
    }
  }

  //ausnahme für 2. seite
  if(diceRandom == 6){
    document.getElementById('dice-side-two').classList.add("special-2");
  }else{
    document.getElementById('dice-side-two').classList.remove("special-2");
  }


  console.log(diceRandom + "");

}