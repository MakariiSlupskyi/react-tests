import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask !== '') {
            setTasks(t => [newTask, ...t]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        setTasks(t => t.filter((elem, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const t = [...tasks];
            [t[index], t[index - 1]] = [t[index - 1], t[index]];
            setTasks(t);
        }
    }

    function moveTaskDown(index) { 
        if (index < tasks.length - 1) {
            const t = [...tasks];
            [t[index], t[index + 1]] = [t[index + 1], t[index]];
            setTasks(t);
        }
    }

    let tasksList;
    
    if (tasks.length === 0) {
        tasksList = <p className='no-tasks'>No tasks yet...</p>
    } else {
        tasksList = (<ul>
            {tasks.map((task, index) => <li key={index}>
                <p className='text'>{task}</p>
                <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                <div className='arrow-btn-container'>
                    <button onClick={() => moveTaskUp(index)}>🔼</button>
                    <button onClick={() => moveTaskDown(index)}>🔽</button>
                </div>
            </li>)}
        </ul>);
    }

    return (<div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div className='input-area'>
            <input
                type='text'
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}
                onKeyDown={(e) => {if (e.key === 'Enter') addTask(); }}/>

            <button className='button' onClick={addTask}>
                Add
            </button>
        </div>

        {tasksList}
    </div>);
}

export default ToDoList;