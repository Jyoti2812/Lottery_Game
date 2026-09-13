import { useState } from "react";
function LotteryGame(){
   
   const[ticket,setTicket]=useState(0);
   const[output,setOutput]=useState("");
   let getTicket=()=>{
    let num=Math.floor(Math.random()*900) + 100;
    let sum=0;
    setTicket(num);
    while(num>0){
        let d=num%10;
        sum+=d;
        num=num/10;
    }

   if (sum === 15) {
      setOutput("🎉 You won the lottery!");
    } else {
      setOutput("😔 You lost the lottery!");
    }
   }

    return(
        <>
           <h1>Lottery{output}</h1>
           <p>Lottery={ticket}</p>
           <button onClick={getTicket}>Get New Ticket</button>
           
        </>
    )
}

export default LotteryGame