
/*var computerMove;


//printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ' to wygrywasz!');

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);

var playerMove , playerInput;

playerInput = prompt('wpisz');
console.log('gracz: ' + playerInput);

if (playerInput == '1'){
    playerMove = 'Kamień'
}

else if (playerInput == '2') {
    playerMove = 'Papier'
}
else if (playerInput == '3') {
    playerMove = "Nożyce"
}
else {
    playerMove = 'Kamień'
    printMessage('mialo byc 1-3 dostajesz kamień ciulu')
}

//printMessage('Wylosowana liczba to: komp:' + randomNumber);

if(randomNumber === 1){
    computerMove = 'Kamień' 
  
}
else if (randomNumber === 2){
    computerMove = 'Papier'
  
}

else if (randomNumber === 3){
    computerMove = 'Nożyce'
   
}

else {
    computerMove = 'wrong'
}

printMessage('komp: ' + computerMove + 'Ty: ' + playerMove);

function displayResult(playerMove, computerMove){
    if(playerMove == 'Kamień' && computerMove == 'Papier')
    printMessage('przegrywasz')
else if(playerMove == 'Papier' && computerMove == 'Nożyce')
printMessage('przegrywasz')
else if(playerMove == 'Nożyce' && computerMove == 'Kamień')
printMessage('przegrywasz')

else if(playerMove === computerMove)
printMessage('remis')

else {
    printMessage('wygrywasz')
}
}

displayResult();*/



/*var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  }
    else if(argMoveId == 2){
        return 'nożyce'
    }
else if(argMoveId == 3){
    return 'papier'
}
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }

}
/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  }
    else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz!');
    }

    else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
        printMessage('Wygrywasz!');
    }
    else if (argComputerMove == argPlayerMove){
        printMessage('remis')
    }
   else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerMove = argButtonName;
//playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//console.log('wybór ruchu gracza to: ' + playerInput);

//playerMove = getMoveName(playerInput);
//console.log('ruch gracza to: ' + playerMove);

randomNumber = Math.floor(Math.random() * 3 + 1);
//console.log('wylosowana liczba to: ' + randomNumber);

computerMove = getMoveName(randomNumber);
///console.log('ruch komputera to: ' + computerMove);


var argButtonName, buttonTest, buttonScisor, buttonRock, buttonPaper;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');


  var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    }
      else if(argMoveId == 2){
          return 'nożyce'
      }
  else if(argMoveId == 3){
      return 'papier'
  }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  
  }
  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    }
      else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
          printMessage('Wygrywasz!');
      }
  
      else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
          printMessage('Wygrywasz!');
      }
      else if (argComputerMove == argPlayerMove){
          printMessage('remis')
      }
     else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  
  playerMove = argButtonName;
  //playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  //console.log('wybór ruchu gracza to: ' + playerInput);
  
  //playerMove = getMoveName(playerInput);
  //console.log('ruch gracza to: ' + playerMove);
  
  randomNumber = Math.floor(Math.random() * 3 + 1);
  //console.log('wylosowana liczba to: ' + randomNumber);
  
  computerMove = getMoveName(randomNumber);
  ///console.log('ruch komputera to: ' + computerMove);


}
//buttonTest = document.getElementById('button-test');
buttonScisor = document.getElementById('button-nozyce');
buttonRock = document.getElementById('button-kamien')
buttonPaper = document.getElementById('button-papier')

buttonScisor.addEventListener('click', function(){ buttonClicked('nożyce')})

buttonRock.addEventListener('click', function(){buttonClicked('kamień')})
buttonPaper.addEventListener('click', function(){buttonClicked('papier')})

displayResult(playerMove, computerMove);

