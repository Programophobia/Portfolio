
var computerMove;
computerMove = 'kamień';

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ' to wygrywasz!');

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);

var playerMove , playerInput;

playerInput = prompt('wpisz');
console.log('gracz: ' + playerInput);

if (playerInput == '1'){
    playerMove = 'Kamień'
}

else if (playerInput == '2') {
    playerMove = ' Papier'
}
else if (playerInput == '3') {
    playerMove = "nozyce"
}
else {
    playerMove = 'Kamień'
    printMessage('mialo byc 1-3 dostajesz kamień ciulu')
}

printMessage('Wylosowana liczba to: komp:' + randomNumber);

if(randomNumber === 1){
    computerMove = 'Kamien' 
  
}
else if (randomNumber === 2){
    computerMove = 'Papier'
  
}

else if (randomNumber === 3){
    computerMove = 'Nozyce'
   
}

else {
    computerMove = 'wrong'
}

printMessage(computerMove + playerMove);