import { useState } from "react";

export default function Joker(){
    let [joke, setJoke] = useState({});
    
    const URL = "https://official-api.appspot.com/rondom_joke";

    const getNewJoke  = async () =>{
      let respose = await fetch (URL);
      let jsonResponse = await respose.json(); 
      console.log(jsonResponse);
      setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline}) 
      };
    return(
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
           <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke </button>
        </div>
    )
}