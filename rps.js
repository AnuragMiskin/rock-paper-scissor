
function getcomputerchoice(){
    const choices=['rock','paper','scissor'];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function playround(mychoice){
    if(win===5 || loss===5){
        return;
    }
    const computerchoice=getcomputerchoice();
    if(mychoice===computerchoice){
        document.querySelector('#choice').innerHTML="Player chooses:"+mychoice+"and computer chooses"+computerchoice+"<br> Its a draw";
    }
    else if(
        (mychoice==='rock' && computerchoice==='scissor')|| 
        (mychoice==='paper' && computerchoice==='rock')||
        (mychoice==='scissor' && computerchoice==='paper')
    ){
        document.querySelector('#choice').innerHTML="Player chooses:"+mychoice+"and computer chooses"+computerchoice+"<br> you win";
        win++;
        document.querySelector('#win').innerHTML="YOU:"+win;
        }
    else{
        document.querySelector('#choice').innerHTML="Player chooses:"+mychoice+"and computer chooses"+computerchoice+"<br> you lose";
        loss++;
        document.querySelector('#loss').innerHTML="COMPUTER:"+loss;
    }
}
let win=0,loss=0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const mychoice = button.id;
        playround(mychoice);
        if(win===5){
            document.querySelector('#game').innerHTML="GAME OVER YOU WIN";
            return;
        }
        else if(loss===5){
            document.querySelector('#game').innerHTML="GAME OVER YOU LOSE";
            return;
        }
    });
});