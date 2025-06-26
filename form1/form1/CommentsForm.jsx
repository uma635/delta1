import { useState } from "react"

export default function CommentsForm(){
    let [formData , setFormData] = useState({
        username: '',
        remarks: '',
        rating: 5
    })
    let handleInputChange = (event) => {
        setFormData((currData) =>{
            return{...currData,[event.target.name]:event.target.value};
        })
    
    }
    let handleSubmit = (event) =>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: '',
        remarks: '',
        rating: 5
        })

    }
    return(
        <div>
         <h4>Give a Comment!</h4>
         <form onSubmit={handleSubmit}>
         <label htmlFor="username">username</label>
            <input placeholder="username" type="text"
             value={formData.username}
                onChange={handleInputChange}
                id="username" name="username"
             />
            <br></br> <br></br>
           
           <label htmlFor="remarks">remarks</label>
           <textarea value={formData.remarks}
            placeholder="add few remarks"
            onChange={handleInputChange}
            id="remarks"
            name="remarks" >
            Remarks</textarea>
            <br></br> <br></br>

           <label htmlFor="rating">rating</label>
            <input placeholder="rating" type="number"
             min={1} max={12} value={formData.rating}
             onChange={handleInputChange}
            id="rating"
            name="rating" />
            <br></br> <br></br>

            <button>Add comments</button>
         </form>
        </div>
    )
}