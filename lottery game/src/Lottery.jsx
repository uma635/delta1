// import { useState } from "react";
// import './Lottery.css';
// import { genTicket , sum} from "./helper";
// export default function Lottery (){
//     let [ticket , setTicket] = useState(genTicket(3));
//     let isWinning = sum(ticket) === 15;

//     let buyTicket =() =>{
//       setTicket(genTicket(3));
//     }
//     return (
//          <div>
//         <h1>Lottery Game!</h1>
//         <div className="ticket">
//         <span>{ticket[0]}</span>
//         <span>{ticket[1]}</span>
//         <span>{ticket[2]}</span>

//         </div>
//         <br></br>
//         <button onClick={buyTicket}>Buy New Ticket</button>
//         <h3>{isWinning && "Conguratulations , you are won! sandeep maurya "}</h3>
//     </div>
//     );
// }



import { useState } from "react";

import { genTicket , sum} from "./helper";
import Ticket from "./Ticket";
export default function Lottery ({n=3,winningSum=15}){
    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket =() =>{
      setTicket(genTicket(n));
    }
    return (
         <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <br></br>
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Conguratulations , you are won the game!"}</h3>
    </div>
    );
}