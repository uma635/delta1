function printHello(){
    console.log("hello");
}
function printBye(){
    console.log("bye");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}>this para is for event</p>
        </div>
    );
}