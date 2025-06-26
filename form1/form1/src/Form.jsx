import { useState } from "react"


export default  function Form( ){
    let[formData , setFormData] = useState({
        fullName:'',
        username:'',
        Password:''
    });

    // let handleNameChange = (event) => {
   
    //   setFullName(event.target.value)}

    let handleInputChange = (event )=>{
     setFormData((currData) => {
        return { ...currData,[event.target.name]:event.target.value};
     });
    };
   let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName: '',
        username: '',
        Password:''
    })
   }
    
    return(
        <form onSubmit={handleSubmit}>
         <label htmlFor="fullName">FullName</label>
            <input 
            placeholder="enter full name"
             type="text"
             value={formData.fullName}
             // onChange={handleNameChange}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
              />
              <br></br>
              <br></br>
              <label htmlFor="username">username</label>
            <input 
            placeholder="enter username"
             type="text"
             value={formData.username}
              //onChange={handleUsername}
                id="username"
                name="username"
                onChange={handleInputChange}
                />
                <br></br>
                <br></br>
                <label htmlFor="Password">Password</label>
            <input 
            placeholder="enter Password"
             type="text"
             value={formData.Password}
              //onChange={handleUsername}
                id="Password"
                name="Password"
                onChange={handleInputChange}
              />
            <br></br>
            <button>Submit</button>
        </form>
    )
    
}
