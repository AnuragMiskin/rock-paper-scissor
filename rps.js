
function getcomputerchoice(){
    const choices=['rock','paper','scissor'];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function playround(mychoice){
    const computerchoice=getcomputerchoice();
    if(mychoice===computerchoice){
        console.log("draw");
    }
    else if(
        (mychoice==='rock' && computerchoice==='scissor')|| 
        (mychoice==='paper' && computerchoice==='rock')||
        (mychoice==='scissor' && computerchoice==='paper')
    ){
            console.log("win");
        }
    else{
        console.log("loss");
    }
}
let mychoice=(prompt("enter your choice").toLowerCase());
playround(mychoice);