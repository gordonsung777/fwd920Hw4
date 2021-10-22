/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

let topBall = document.querySelector("[data-increment='20']");
let midBall = document.querySelector("[data-increment='5']");
let bottomBall = document.querySelector("[data-increment='10']");

//console.log(midBall);

function declareWinner()
{
    document.body.classList.add('game-over');
}


topBall.addEventListener("click",function(){
    scoreEl.innerHTML= score;
    if(score >= 100)
    {
        declareWinner();
    }
    else{
        score+=10;
    }
    

});

midBall.addEventListener("click", function(){
    scoreEl.innerHTML= score;
    if(score>= 100)
    {
        declareWinner();
    }
    else{
        score+=5;
    }
    

});

bottomBall.addEventListener("click", function(){
    scoreEl.innerHTML= score;
    if(score >= 100)
    {
        declareWinner();
    }
    else{
        score+=20;
    }
    

});


