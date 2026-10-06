import { useEffect, useState } from "react"

function Timer(){

    const [ count, setCount] = useState(1);

    useEffect( ()=> {
        console.log('Screen Refreshed')
        checkCount()
    },[count])

    function checkCount(){
        if(count>10) {
            setCount(1);
        }
    }

    function updateCount() {
        setCount((previousState) => {return previousState+1})
    }

    return(
        <>
        
        <h2>Naa OOru Thadava Sonna {count} thadava Sonna Mathiri</h2>
        <button onClick={updateCount}>Increase Count</button></>
    )
}

export default Timer;