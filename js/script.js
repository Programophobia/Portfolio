


var argButtonName, buttonTest, buttonScisor, buttonRock, buttonPaper;
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
//buttonTest = document.getElementById('button-test');
buttonScisor = document.getElementById('button-nozyce');
buttonRock = document.getElementById('button-kamien')
buttonPaper = document.getElementById('button-papier')

buttonScisor.addEventListener('click', function(){ buttonClicked('nożyce')})

buttonRock.addEventListener('click', function(){buttonClicked('kamień')})
buttonPaper.addEventListener('click', function(){buttonClicked('papier')})
/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');



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
  displayResult(playerMove, computerMove);

}




