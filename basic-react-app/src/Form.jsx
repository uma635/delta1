function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submited");
}

export default function Form(){
    return(
        <form>
            <input placeholder="write something"/>
            <button onClick={handleFormSubmit}>sumbit</button>
        </form>
    );
}