import Vijay from "./Vijay.jsx";
import Surya from "./Surya.jsx";

function Actor(){
       const fans = "Thalapathy"; 
       const salary = "Rs.60 crores"  
       //const moviescount = 30;
       const aboutSurya = {salary : "Rs.60 crores", moviescount : 30}
    return(
        <div>
        <h1>Hi I Am Thalapathy Vijay</h1>
        <Vijay fans ={fans}/>
        {/*<Surya salary={salary} moviescount="35"/>*/}
        <Surya aboutSurya = {aboutSurya}/>
        </div>
    );
}

export default Actor;