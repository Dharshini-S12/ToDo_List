import React, { useState } from 'react'
function ToDoItem(){
    const[task,setTask] = useState(["Eat Breakfast"])
    const[newTask,setNewTask]  = useState("")
    function addTask(){
        if(newTask.trim()!== ""){
            setTask(t=>[...t, newTask])
            setNewTask("")
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
                <input type='text' placeholder='Enter a task...' value={newTask} onChange={(event) => setNewTask(event.target.value)}/>
                <button onClick={addTask}>Add</button>
            </div>
            <ol>
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