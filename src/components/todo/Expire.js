import React,{useEffect} from 'react';
import Header from '../common/Header';
import {get_data, post_data} from "../../services/Api";
    



function Expire() {
  
  

    const [todos, setTodos] = React.useState([]);
    const user  = localStorage.getItem("user");
    const creationdate = new Date()


    const  timestraptodate = function(timesdata){
        const ts =  parseInt(timesdata)
        const  date = new Date(ts) 
        const d = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
        return d
      
      }

      useEffect(() => {
        getTodos()
    }, [setTodos])
    
      async function getTodos(){
        const o = await get_data(process.env.REACT_APP_SERVER + "expire_trash?id=" + user)
        setTodos(o)
       
      }
     

      const handleSubmit = async e => {
        e.preventDefault();
        if (!12) return;
        const date = new Date();
        const creationdate = new Date()
        const data = {
        
        }
        const res = await post_data(process.env.REACT_APP_SERVER + "add_todo", data);
        if (res) {
            alert(res)
            getTodos()
        }
      };

      async function deleteTodo(id){
        const data = {
          "id" :  id,
          "type" : "pending",
          "edit": creationdate.getTime()
        }
        const res = await post_data(process.env.REACT_APP_SERVER + "todo_update", data);
        getTodos()
      }
      

  return (
    <div className="app">
    <Header user={user}/>
    <div className="container-fluid mt-5">
      

      
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
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>

          {todos.length ? <>  {todos.map((todo, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{todo.name}</td>
                <td>{ timestraptodate(todo.creation)}</td>
                <td>{ todo.edit.length >1? timestraptodate(todo.edit):0 }</td>
                <td>{ timestraptodate(todo.expire)}</td>
                <td>{todo.status}</td>
                <td><button className='btn btn-success' onClick={()=>deleteTodo(todo._id)}> <i className='fa fa-external-link'></i></button></td>

              </tr>
            ))}</>: <div className='mt-3 bg-danger text-white '> <h2>LOADING ..............</h2> </div>}
          

          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Expire