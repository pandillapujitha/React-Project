import {useState} from "react";

function FavouriteActor(){

    //let favourite = "Pujithaa";
    const [favourite,changeActor] = useState('PUJITHA')
    return(
        <>
        <h2> My Favourite Actor is {favourite}</h2>
        <button onClick={()=> {changeActor('Pujii')}}>change actor</button>
        </>
    );
}

export default FavouriteActor;

