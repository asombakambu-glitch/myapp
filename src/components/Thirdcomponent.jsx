import { useState } from "react";

const Thirdcomponent = () =>{
    // declare state variables 
const [number , setNumber] = useState(1)  
const [marks , setMarks]  = useState(40)
const [school, setSchool]= useState("Modcom")
const [name, setName] = useState("Mike")
const [city, setCity] = useState("Kigali")
const [dorm, setDorm]= useState("Ngong")
// create function to update number 

const updatenumber =() =>{
    setNumber(number *5)
}
// function to update marks 
const updatemarks =() =>{
    setMarks(marks + 5)
}
// function to update school 
const updateschool =() =>{
    setSchool("Nairobi University")
}

// function to update name 
const updatename =() =>{
    setName("Mary")
}

// functiom to update the city 
const updatecity =() =>{
        setCity("Madrid")
}

// function to update dorm 
const updatedorm = () =>{
    setDorm("Suswa")
}
   

    return(
        <div>
            <h1>Understanding react hooks</h1>
            <h2>The current value is : {number}</h2>
            <button onClick={updatenumber}>Update the number</button>

            <h2>The current marks are: {marks}</h2>
            <button onClick={updatemarks}>Update marks</button>

            <h2>The current school is {school}</h2>
            <button onClick={updateschool}>Update school</button>

            <h2>The current name is {name}</h2>
            <button onClick={updatename}>Update name</button>

            <h2>Current city is {city}</h2>
            <button onClick={updatecity}>Update city</button>

            <h2>The current dorm is {dorm}</h2>
            <button onClick={updatedorm}>Update dorm</button>
        </div>
    )
}
export default Thirdcomponent