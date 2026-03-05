import { useState } from "react";

const Thirdcomponent = () =>{
    // declare state variables 
const [number , setNumber] = useState(1)  
const [marks , setMarks]  = useState(40)

// create function to update number 

const updatenumber =() =>{
    setNumber(number *5)
}

const updatemarks =() =>{
    setMarks(marks + 5)
}
    return(
        <div>
            <h1>Understanding react hooks</h1>
            <h2>The current value is : {number}</h2>
            <button onClick={updatenumber}>Update the number</button>

            <h2>The current marks are: {marks}</h2>
            <button onClick={updatemarks}>Update marks</button>
        </div>
    )
}
export default Thirdcomponent