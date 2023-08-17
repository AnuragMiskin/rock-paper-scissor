
function getcomputerchoice(){
    const choices=['rock','paper','scissor'];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function playround(mychoice){
    const computerchoice=getcomputerchoice();
    if(mychoice===computerchoice){
        console.log("player chooses:"+mychoice+" and computer chooses:"+computerchoice);
        console.log("draw");
    }
    else if(
        (mychoice==='rock' && computerchoice==='scissor')|| 
        (mychoice==='paper' && computerchoice==='rock')||
        (mychoice==='scissor' && computerchoice==='paper')
    ){
            console.log("player chooses:"+mychoice+" and computer chooses:"+computerchoice);
            console.log("win");
            win++;
        }
    else{
        console.log("player chooses:"+mychoice+" and computer chooses:"+computerchoice);
        console.log("loss");
        loss++
    }
}
var mychoice='';
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
