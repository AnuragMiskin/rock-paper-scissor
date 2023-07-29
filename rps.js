
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
            win++;
        }
    else{
        console.log("loss");
        loss++
    }
}
let mychoice=(prompt("enter your choice").toLowerCase());

let win=0,loss=0;

for(i=1;i<=5;i++){
  playround(mychoice,getcomputerchoice());
  console.log("player=",win);
  console.log("com=",loss);
 }
 if(win>=loss)
 {
  console.log("you win")
 }
 else{
  console.log("you lose")
 }
