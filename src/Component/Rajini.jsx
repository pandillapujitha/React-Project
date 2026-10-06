function Rajini(props){

    const{rajiniInfo} = props
    const{nickName,Salary} = rajiniInfo

    const text =`Hi I'm a ${nickName} Rajinikanth.  I got a salary of ${Salary} per movie` ;

    return(
        <h2>{text}</h2>
    )
}

export default Rajini; 