import { useState } from "react"

function Car () {
    const [car, setCar ] = useState(
        {
            brand :"Tata",
            model :  "Nexon",
            color : "Red",
            year : 2024
        }
    );
    function updateColor(){
        setCar({color : "white"})
    }

    return<>
    <h1>My Car</h1>
    <p>Brand : {car.brand}</p>
    <p>Model : {car.model}</p>
    <p>Color : {car.color}</p>
    <p>year : {car.year}</p>
    <button onClick={updateColor}>Change Color</button>
    
    
    </>
}

export default Car;