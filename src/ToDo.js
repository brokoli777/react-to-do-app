import React from "react";

const ToDo = ({todo, handleCompleted}) => 
{

    const handleClick = (e) => {
        e.preventDefault()
        handleCompleted(e.currentTarget.id)
    }

    return (
        <div div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    )
}



// const toggleComplete = (id) =>
// {
    
//     for(let i=0;i<ToDoList.length;i++)
//     {
//         if(ToDoList[i].id === id)
//         {
//             console.log("yooo found it " + ToDoList[i].task)
//             return(
//                 <h2>Hello!</h2>
//             )
//         }
//     }

// }

// toggleComplete(3)

export default ToDo;