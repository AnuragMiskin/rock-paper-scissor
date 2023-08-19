
function getcomputerchoice(){
    const choices=['rock','paper','scissor'];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function playround(mychoice){
    const computerchoice=getcomputerchoice();
    const div=document.querySelector('#result');
    const text=document.createElement('p');
    if(mychoice===computerchoice){
        text.innerHTML="player chooses:"+mychoice+" and computer chooses:"+computerchoice+"<br> its a draw";
        div.appendChild(text);
    }
    else if(
        (mychoice==='rock' && computerchoice==='scissor')|| 
        (mychoice==='paper' && computerchoice==='rock')||
        (mychoice==='scissor' && computerchoice==='paper')
    ){
            text.innerHTML="player chooses:"+mychoice+" and computer chooses:"+computerchoice+"<br> its a win";
            div.appendChild(text);
            win++;
        }
    else{
        text.innerHTML="player chooses:"+mychoice+" and computer chooses:"+computerchoice+"<br> its a loss";
        div.appendChild(text);
        loss++;
    }
}
let win=0,loss=0;
while(win<=5 || loss<=5){
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const mychoice = button.id;
        playround(mychoice);
    });
});
}
if(win==5){
    //add div that displays win
}
else{
    //add div that displays loss
}

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
*/
/*
function playround(mychoice){
    const computerchoice=getcomputerchoice();
    if(mychoice===computerchoice){
        document.queryselector('p').innerhtml ="player chooses:'+mychoice' and computer chooses '+computer choice+'<br> its a draw
    }
    else if(
        (mychoice==='rock' && computerchoice==='scissor')|| 
        (mychoice==='paper' && computerchoice==='rock')||
        (mychoice==='scissor' && computerchoice==='paper')
    ){
           document.queryselector('p').innerhtml='
           win++ 
           document.queryselector(#you).innerhtml=+win- create a p tag in html to display playerchoice and computerchoice and a win and loss tags whose innerhtmls will be manipulated here
        }
    else{
        -- same 
        loss++;
    }