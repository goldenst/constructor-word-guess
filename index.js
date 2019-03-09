
var Word = require('./Word');
var inquirer = require('inquirer');

var letterArray = 'abcdefghijklmnopqrstuvwxyz';

// game variables

var correctLetters = [];
var incorectLetters = [];
var guesses = 10;

var wordBank = [
  '"ABARTH"',
  '"ALFA ROMEO"',
  'ASTON MARTIN',
  'AUSTIN',
  'BEDFORD',
  'BENTLEY',
  'BOLWELL',
  'BUFORI',
  'CADILLAC',
  'CATERHAM',
  'CHERY',
  'CHEVROLET',
  'CHRYSLER',
  'CITROEN',
  'DAEWOO',
  'DAIHATSU',
  'DODGE',
  'FIAT',
  'GEELY',
  'GREAT WALL',
  'HINO',
  'HUMMER',
  'INFINITI',
  'ISUZU',
  'JAGUAR',
  'JEEP',
  'LAND ROVER',
  'LEXUS',
  'LOTUS',
  'MINI',
  'MITSUBISHI',
  'OPEL',
  'PORSCHE',
  'PROTON',
  'RANGE ROVER',
  'RENAULT',
  'SAAB',
  'SKODA',
  'SSANGYONG',
  'SUBARU',
  'SUZUKI',
  'TATA',
  'VOLVO',
]

needWord = false;
// Pick Random index from array
var randomWordIndex = Math.floor(Math.random() * wordBank.length) ;
//console.log(randomWordIndex, 'array number');
var randomWord = wordBank[randomWordIndex];
//console.log(wordBank[randomWord]);

// Pass random word through Word constructor
wordToGuess = new Word (randomWord);




function runGame () {
  if(needWord) {
    var randomWordIndex = Math.floor(Math.random() * wordBank.length) ;
    var randomWord = wordBank[randomWordIndex];

    wordToGuess = new Word (randomWord);

    needWord = false;
  }
  // Test if a letter guessed is correct
  var wordComplete = [];
  wordToGuess.objArray.forEach(completeCheck);
  
  // remaning letters to be guessed
  if (wordComplete.includes(false)) {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Guess a letter between A-Z',
        name: 'userinput'
      }
    ]).then(function (input) {
      if(!letterArray.includes(input.userinput) || input.userinput.length > 1){
        console.log(' Please try Agian')
        runGame('')
      } else {
        if(incorectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "" ) {
          console.log('Already Gussed that Letter or You did not enter a letter')
          runGame();
        } else {

          var wordcheck = [];
          wordToGuess.userGuess(input.userinput);
          wordToGuess.objArray.forEach(wordcheck);
          if(wordcheck.join ('') === wordComplete.join('')) {
            console.log("Incorect");
            incorectLetters.push(input.userinput);
            guesses --;
          } else {
            console.log('Correct');
            correctLetters.push(input.userinput);
          }
          wordToGuess.log()

          // print guseese left
          console.log('Guesses Left: ', guesses);
          // print letters gussed
          console.log("Guessed Letters: ", incorectLetters.join(' ') );
          // guesses for left
          if(guesses > 0) {
            runGame();
          } else{
            console.log('Sorry you lose');
            restartGame();
          }  
          function wordCheck(key){
            wordCheck.push(key.guessed);
          } 
        }   
      }
    });
  } else {
    console.log('You win !!');
    restartGame()
  }
}

function restartGame (){
  inguieqer.prompt([ 
    {
      type: 'list',
      message: 'What woyld you like to do?',
      choices: ['Play Agian', 'EXIT'],
      name: 'restart'
    }
  
  ]).then(function (input) {
    if(imput.restart === 'Play Agian') {
      needWord = true;
      guesses = 0;
      correctLetters = 0;
      incorectLetters = 0;
      runGame();
    } else {
      return
    }
  })
}
runGame();

