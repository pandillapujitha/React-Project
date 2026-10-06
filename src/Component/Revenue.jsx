function Revenue(props){

    const {salaryInfo}= props
    const {nickName,Name,Salary} = salaryInfo

    const text =`Hi I'm a ${nickName} ${Name}. I got a salary of ${Salary} per movie` ;

    return(
        <h2>{text}</h2>
    )

}
export default Revenue;