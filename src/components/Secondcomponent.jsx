const Secondcomponent = () => {
    // here is where we declare our variables 
    let message = "I love programming"
    let age = 20
    let name = "Tuva"
    let hobby = "programming"
    let shift = "kifaru"
    let lab = 2


    return (
        <div>
            <h1>Understanding variables in Reactjs</h1>
            {/* bind message variable  */}
            <h2>{message}</h2>
            {/* bind age variable  */}
            <p>Boniface wil be {age} years old next year</p>
            {/* bind hobby, shift, name and lab variable  */}

            <p>Manayara and her brother{name} love {hobby}. They are students at Modcom. Their class is {shift} and they are in lab {lab}</p>
        </div>
    )
}
export default Secondcomponent