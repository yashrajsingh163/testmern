import React, { useEffect } from 'react'
import {get_data, post_data} from "../../services/Api";
import Header from '../common/Header';

function Todo() {

  const [value, setValue] = React.useState("");
  const [expaire, setExpaire] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const user  = localStorage.getItem("user");
  const creationdate = new Date()

  useEffect(() => {
    getTodos()
}, [setTodos])

  async function getTodos(){
    const o = await get_data(process.env.REACT_APP_SERVER + "find_todo?id=" + user)
    setTodos(o)
   
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (!value) return;
    setValue("");
    // addTodo(value);
    const date = new Date(expaire);
    
    const data = {
      "name": value,
      "creation":creationdate.getTime(),
      "edit": 0,
      "expire": date.getTime(),
      "status": "pending",
      "user": user
    }
    const res = await post_data(process.env.REACT_APP_SERVER + "add_todo", data);
    if (res) {
        alert(res)
        getTodos()
    }
  };


const  timestraptodate = function(timesdata){
  const ts =  parseInt(timesdata)
  const  date = new Date(ts) 
  const d = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
  return d
}


async function deleteTodo(id){
  const data = {
    "id" :  id,
    "type" : "trash",
    "edit": creationdate.getTime()
  }
  const res = await post_data(process.env.REACT_APP_SERVER + "todo_update", data);
  getTodos()
}


  return (
    <div className="app">
      <Header user={user}/>
      <div className="container-fluid mt-5">
        <div className='row'>
          <div className='col-sm-4'>
            <label>Todo Name</label>
            <input type="text" onChange={e => setValue(e.target.value)} defaultValue={value}/>
          </div>
          <div className='col-sm-4'>
          <label>Todo Expairy</label>

            <input type="datetime-local" onChange={e => setExpaire(e.target.value)}  />
          </div>
          <div className='col-sm-4'>
          <label>.</label>
            <button className='btn btn-primary btn-block' onClick={handleSubmit}>Submit </button>
          </div>
        </div>  
        <div className='mt-5'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task name</th>
                <th scope="col">creation timestamp</th>
                <th scope="col">edit timestamp</th>
                <th scope="col">Expairy timestamp</th>
                <th scope="col">status</th>
                <th scope="col">Edit </th>
              </tr>
            </thead>
            <tbody>

              {todos.length ? <>
                {todos.map((todo, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{todo.name}</td>
                    
                    <td>{ timestraptodate(todo.creation)}</td>
                    <td>{ todo.edit.length >1 ? timestraptodate(todo.edit):0 }</td>
                    <td>{ timestraptodate(todo.expire)}</td>
                    <td>{todo.status}</td>
                    <td><button className='btn btn-danger' onClick={()=>deleteTodo(todo._id)}> <i className='fa fa-trash'></i></button></td>
                  </tr>
                ))}
              </>
                 
              : <div className='mt-3 bg-danger text-white '> <h2>LOADING ..............</h2> </div>}
           

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


function Todo2({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}




export default Todo