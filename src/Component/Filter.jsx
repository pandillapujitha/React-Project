import React, { useState } from "react";

function Filter(){
    const[users] = useState([
        {id:1, name:"Nandini", age:42},
        {id:2, name:"Pavani", age:39},
        {id:3, name:"Tharuni", age:19}
    ]);

    const filteredUsers = users.filter((user) => user.age > 20);

    return(
        <div>
            <h2>Age Greater Than 20</h2>
            <ul>
             {filteredUsers.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}               
                     </li>
             ))}
            </ul>
        </div>
    );
}
export default Filter;