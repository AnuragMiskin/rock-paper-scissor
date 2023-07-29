
function getcomputerchoice(){
    const choices=['rock','paper','scissor'];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function playround(){
    const mychoice=playerchoice();
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
function playerchoice(){
let choice=(prompt("enter your choice").toLowerCase());
return choice;
}
let win=0,loss=0;

for(i=1;i<=5;i++){
  playround();
  console.log("player=",win);
  console.log("com=",loss);

  if(win==3 || loss==3){
    break;
  }

 }
 if(win>loss)
 {
  console.log("you win")
 }
 else{
  console.log("you lose")
 }