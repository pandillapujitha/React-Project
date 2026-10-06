import Revenue from "./Revenue.jsx";

function Actor1(){

    const salaryInfo = {nickName : "Super Star", Name : "Rajinikanth", Salary : "Rs.150 crores"}

    const actorInfo = [
         {nickName : "Thalapathy", Name : "Vijay", Salary : "Rs.160 crores"},
         {nickName : "Thaja", Name : "Ajith", Salary : "Rs.130 crores"},
         {nickName : "Nandu", Name : "Nandini", Salary : "Rs.170 crores"}
    ];

    const numberList =[1,2,3,4,5,5,6,6,7]
    return(
        <div>
            <Revenue salaryInfo = {salaryInfo}/>
            <ul>
                {actorInfo.map( (salaryInfo)=> (<li key = {salaryInfo.nickName}>
                    <Revenue salaryInfo = {salaryInfo}/></li>))}
            </ul>
            {numberList.map( (r,index)=><p key = {index}>{r}</p>)}
        </div>
    )
}
export default Actor1;
 