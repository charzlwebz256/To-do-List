import { useState } from 'react'
import './App.css'

function App() {
  const [myTodoList, setMyTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = ()=>{
    setMyTodoList((prev)=>[...prev, newTodo]);
  // alert(newTodo);
    setMyTodo("");
  };
  const deleteTodo=(todo)=>{
    setMyTodoList((prev)=>prev.filter((theTodo)=>theTodo !== todo));
  };

  return (
    <div className="App">
      
         <h1>To do</h1>
         <p>You have {myTodoList.length} things to do</p>
    <ol>
          {myTodoList.map((todo) =>(

            <li
            style={{
              display:"flex",
              justifyContent: "space-between",
              alignItems:"center",
              fontFamily:'Times New Roman',
              fontSize:'20'
            }}
            >
              <button
              onClick={()=>deleteTodo(todo)}
              style={{
                fontSize: 20,
                margin: 15,
                padding:4,
                borderRadius: 10,
                color:'black',
                backgroundColor: 'white',
                borderColor: 'Green',
                fontFamily:'Times New Roman',
              }}
              >
                Delete
              </button>
              {todo}</li>
          ))}
          </ol>
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
