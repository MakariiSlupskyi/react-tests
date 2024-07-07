import React, { useState } from 'react';

function MyComp() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("SpongeBob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleIsEmployed = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleIsEmployed}>Toggle status</button>
        </div>
    );
}

export default MyComp;