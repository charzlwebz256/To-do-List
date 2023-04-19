import { useState } from 'react'
import './App.css'

function App() {
  const [myTodoList, setMyTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = ()=>{
    setMyTodoList((prev)=>[...prev, newTodo]);
  alert(newTodo);
    setMyTodo("");
  };

  return (
    <div className="App">
      
         <h1>To do</h1>
         <p>You have {myTodoList.length} things to do</p>

          {myTodoList.map((todo) =>(

            <p>{todo}</p>
          ))}
          <input 
          type='text'
          value={newTodo}
          onChange={(e)=>{
            setNewTodo(e.target.value);
          }
        }
        placeholder='Enter a thing to do'
          />
          <br />
          <br />
         <button onClick={addNewTodo}> + Add-To-do</button>
    </div>
  )
  }

export default App
