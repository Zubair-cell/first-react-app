import React, { useState } from "react";




const FuntionalComponents = (props) => {
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");

    const { name, age, company, setName } = props;

    return (
        <div>
            <p>This is functional Component</p>
            <button onClick={() => setCount(count + 1)}>click me to add 1</button>
            <button onClick={() => setCount(count - 1)}>click me to substract by 1</button>
            <h1>{count}</h1>
            <h1>My name is {name} I am {age} year old and I work in {company} from last 2 years.</h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)}> Change name</button>
        </div>
    );
};

export default FuntionalComponents;