const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');
const btn = document.querySelector('.startGame');
const mainMenu = document.querySelector('.mainMenu');
const container = document.querySelector('.container');
const gameField = document.querySelector('.field');
const cardTrue = document.querySelector('.field__card_true');
const cardFalse = document.querySelector('.field__card_false');
let difficulty;

function chooseDifficulty() {

}

function startGame() {
  mainMenu.style.display = 'none';
  container.style.display = 'none';
  gameField.style.display = 'flex';
}

easy.addEventListener('click', setDifficulty);
medium.addEventListener('click', setDifficulty);
hard.addEventListener('click', setDifficulty);

function setDifficulty(event) {
  if(event.target == easy) {
    difficulty = 1;
    this.classList.add('difficulty__item_active');
  }else if (event.target == medium) {
    difficulty = 2;
    this.classList.add('difficulty__item_active');
  }else if (event.target == hard) {
    difficulty = 3;
    this.classList.add('difficulty__item_active');
  }
  return difficulty;
}


btn.addEventListener('click', startGame);











