// // export default function Counter(){
// //     let count = 0;
// //     function incCount(){
// //         count += 1;
// //         console.log(count);
// //     }
// //     return(
// //         <div>
// //          <h3>count = {count}   </h3>
// //          <button onClick={incCount}>increase count</button>
// //          </div>
// //     )
// }


//useState


import { useState } from "react";
export default function Counter(){
    let [count, setCount] = useState(0);

    let incCount =() => {
        setCount(count+1);
        console.log(count);
    };
   
    
    return(
        <div>
         <h3>count = {count}   </h3>
         <button onClick={incCount}>increase count</button>
         </div>
    )
}