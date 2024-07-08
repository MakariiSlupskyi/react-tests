import React, { useState } from 'react';

function Arrays() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleFoodsChange() {

    }

    function addFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function removeFood(index) {
        setFoods(foods.filter((elem, i) => i != index));
    }

    return (<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => removeFood(index)}>{food}</li>)}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter food name..."></input> 
        <button onClick={addFood}>Add food</button> 
    </div>);
}

export default Arrays;