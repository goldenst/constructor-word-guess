
var Word = require('./Word');
var inquirer = require('inquirer');

var letterArray = 'abcdefghijklmnopqrstuvwxyz';

// game variables
needWord = false;
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
  }
  // Test if a letter guessed is correct
}
