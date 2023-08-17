
function getcomputerchoice(){
    const choices=['rock','paper','scissor'];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function playround(mychoice){
    const computerchoice=getcomputerchoice();
    const div=document.querySelector('div');
    const text=document.createElement('span');
    if(mychoice===computerchoice){
        text.textContent="player chooses:"+mychoice+" and computer chooses:"+computerchoice+"\n its a draw";
        div.appendChild(text);
    }
    else if(
        (mychoice==='rock' && computerchoice==='scissor')|| 
        (mychoice==='paper' && computerchoice==='rock')||
        (mychoice==='scissor' && computerchoice==='paper')
    ){
            text.textContent="player chooses:"+mychoice+" and computer chooses:"+computerchoice+"\n its a win";
            div.appendChild(text);
            win++;
        }
    else{
        text.textContent="player chooses:"+mychoice+" and computer chooses:"+computerchoice+"\n its a loss";
        div.appendChild(text);
        loss++
    }
}

var mychoice='';
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        mychoice = button.id;
        playround(mychoice);
    });
});

/*
const rock=document.querySelector('#rock');
rock.addEventListener('click',()=>{
    mychoice='rock';
    playround(mychoice);
});
const paper=document.querySelector('#paper');
paper.addEventListener('click',()=>{
    mychoice='paper';
    playround(mychoice);
});
const scissor=document.querySelector('#scissor');
scissor.addEventListener('click',()=>{
    mychoice='scissor';
    playround(mychoice);
});

*/



/*
function playerchoice(){
let choice=(prompt("enter your choice").toLowerCase());
if((choice==='rock') || (choice==='paper') || (choice==='scissor')){
return choice;
}
else{
    console.error("choice not allowed");
}
}
let win=0,loss=0;
