
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
    const resultMessage = document.querySelector('#choice');
    const winCount = document.querySelector('#win');
    const lossCount = document.querySelector('#loss');
    let message='player chooses : ${mychoice} and computer chooses ${computer choice} <br>'
    if(mychoice===computerchoice){
       message+='Its a draw';
    }
    else if(
        (mychoice==='rock' && computerchoice==='scissor')|| 
        (mychoice==='paper' && computerchoice==='rock')||
        (mychoice==='scissor' && computerchoice==='paper')
    ){
        message+='You Win';
        win++;
        winCount.innerHTML="YOU:"+win;
        }
    else{
        message+='You lose'
        loss++;
        lossCount.innerHTML="COMPUTER:"+loss;
    }
    resultMessage.innerHTML=message;
    if(win===5 || loss===5){
        const gameovermessage=document.querySelector('#game');
        gameovermessage.innerHTML=win===5?"GAME OVER YOU WIN":"GAME OVER YOU LOSE";
    }
}
let win=0,loss=0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const mychoice = button.id;
        playround(mychoice);
    });
});