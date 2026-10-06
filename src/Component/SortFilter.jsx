import React, { useState } from "react";

function SortFilter() {
    const [names, setNames] = useState([
        "Rahul",
        "Magizh",
        "Nandini",
        "Pavani",
        "Tharuni",
        "Jahnavi",
        "Srija"

    ]);

    const sortNames = () => {
        const sorted = [...names].sort();
        setNames(sorted);
    }
    return (
        <div>
            <button onClick={sortNames}>Sort Names</button>
            <ul>
                {names.map((name, index) => (
                 <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}
export default SortFilter;