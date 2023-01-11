import { useState } from 'react';
import './App.css';
import Header from './Header';
import Data from "./Data.json"
import ToDoList from "./ToDoList"
import ToDoForm from './ToDoForm';

function App() {

  const [ toDoList, setToDoList ] = useState(Data);

  const handleCompleted = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filteredList = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filteredList);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
}

  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList} handleCompleted={handleCompleted} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );

  




}


export default App;
