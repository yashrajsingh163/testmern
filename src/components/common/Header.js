import React from 'react'
import "./header.css"
import {Link ,useLocation,useNavigate }  from "react-router-dom"

function Header({user}) {
    const location = useLocation();
    const navigate  = useNavigate()

    const  logout = () =>{
            localStorage.removeItem("user")
            navigate("/")
    }
  return (
    <div>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="fas fa-hotel"></span> TODO APP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-bar"
                    aria-controls="navbar-bar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {user ?
                 <div className="collapse navbar-collapse ml-auto" id="navbar-bar">
                <div className="navbar-nav ml-auto">
                <Link to="/expaireTask" className={ location.pathname=="/expaireTask" ? "nav-link active":"nav-link"} >Exapire Task </Link>
                <Link to="/trash" className={ location.pathname=="/trash" ? "nav-link active":"nav-link"}>Trash </Link>
                <Link to="/todo" className={ location.pathname=="/todo" ? "nav-link active":"nav-link"} >Todo List </Link>


                <button className={ "btn btn-danger"}to="/signup" onClick={logout}>Logout</button>
                </div>
                </div>
                :
                <div className="collapse navbar-collapse ml-auto" id="navbar-bar">
                    <div className="navbar-nav ml-auto">
                        <Link className={ location.pathname=="/" ? "nav-link active":"nav-link"}  to="/">Login</Link>
                        <a className={"nav-link"} href="#">About</a>
                        <Link className={ location.pathname=="/signup" ? "nav-link active":"nav-link"} to="/signup">Register Free</Link>
                    </div>
                </div> }
            </div>
        </nav>
  
    </div>
    </div>
  )
}

export default Header