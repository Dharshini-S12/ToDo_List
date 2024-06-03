import React, { useState } from 'react'
function ToDoItem(){
    {/*For already having some task*/}

    const[task,setTask] = useState(["Eat Breakfast"]) 
    {/*for adding new task*/}
    const[newTask,setNewTask]  = useState("")

    function addTask(){
        {/*when input field is empty ,it will not go the condition and trim for cheking the empty spaces leaving the whiteSpaces*/}
        if(newTask.trim()!== ""){
            {/*for adding*/}
            setTask(t=>[...t, newTask])

            {/*once after ading the task making the input field to be empty*/}
            setNewTask(" ")
        } 
    }
    function DeleteTask(index){
        const upadtedTasks = task.filter((element, i) => i !== index)
        setTask(upadtedTasks)
    }
    return(
        <div >
            <h1>ToDo List</h1>
            <div>
                <input type='text' placeholder='Enter a task...' value={newTask} onChange={(event) => setNewTask(event.target.value)}/>{/*Getting input*/}
                <button onClick={addTask}>Add</button>
            </div>
            <ol>
                {/*task => for getting the current element , index => for getting the current index value and add it to list*/}
                {task.map((task, index) =>
                   <li key={index}>
                        <span>{task}</span>
                        <button onClick={()=>DeleteTask(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default ToDoItem