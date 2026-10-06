import Rajini from "./Rajini";

function Thar(){
    const rajiniInfo = {nickName : "Super Star", Salary : "Rs.150 crores"}
  
    const isduty = true ;
    //const rajiniInfo = {}
    
    return(

      <div>

      <Rajini rajiniInfo = {rajiniInfo}/> 

      { rajiniInfo.nickName !== undefined && rajiniInfo.Salary !== undefined ?
            <Rajini rajiniInfo = {rajiniInfo}/> : null
      }

      { isduty ? <h2>Actor duty is acting</h2> :
      <h2>Actor duty is first acting and then enter into politics</h2>}
      </div>

    )
}

export default Thar;