/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');
function declareWinner() {
  document.body.classList.add('game-over');
}

ballEl.addEventListener("click", function(){
  scoreEl.innerHTML = score;
  if (score == 100)
  {
    declareWinner();
 
  }
  else{
    score+=10;
  }
});

