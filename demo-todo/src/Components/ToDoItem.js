import React from 'react'

const ToDoItem = () => {
    function Index({text, completed}){
        return(
            <div>
                <div className={completed ? "yes" : ""}>
                    {noted ? "*" : ""} {text}</div>
            </div>
        )
    }
  return (
      <Index text="wash clothes" completed={false} noted={true} />
  )
}

export default ToDoItem
