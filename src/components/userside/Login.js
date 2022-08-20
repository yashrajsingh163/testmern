import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../common/Header'
import "./login.css";
import { get_data, post_data } from "../../services/Api";
import { useNavigate , Navigate  } from 'react-router-dom';

function Login() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const locate = useNavigate()
    const user  = localStorage.getItem("user");
  




    async function  login_user() {
        const data = {
            "username":username,
            "password":password
        }
       const res = await post_data(process.env.REACT_APP_SERVER+"user_login",data);
       if(res){
        localStorage.setItem("user",res)
        locate("/todo")
       }
   
    }

    useEffect(() => {
        if(!user ){
            locate("/")
        }else{
            locate("/todo")
        }
    }, [])
    return (
        <div>
            <Header />
            <div className="container px-4 py-5 mx-auto">
                <div className="card card0">
                    <div className="d-flex flex-lg-row flex-column-reverse">
                        <div className="card card1">
                            <div className="row justify-content-center my-auto">
                                <div className="col-md-8 col-10 my-5">
                                    <div className="row justify-content-center px-3 mb-3">
                                        <img id="logo" src="https://i.imgur.com/PSXxjNY.png" />
                                    </div>
                                    <h3 className="mb-5 text-center heading">We are Tidi {process.env.REACT_APP_SERVER}</h3>

                                    <h6 className="msg-info">Please login to your account</h6>

                                    <div className="form-group">
                                        <label className="form-control-label text-muted">Username</label>
                                        <input type="text" id="email" name="username" placeholder="Phone no or email id" className="form-control" onChange={(e) => setusername(e.target.value.trim())} defaultValue={username} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-control-label text-muted">Password</label>
                                        <input type="password" id="psw" name="psw" placeholder="Password" className="form-control" onChange={(e) => setpassword(e.target.value.trim())}  defaultValue={password}/>
                                    </div>

                                    <div className="row justify-content-center my-3 px-3">
                                        <button className="btn-block btn-color" onClick={login_user}>Login to Tidi</button>
                                    </div>

                                    <div className="row justify-content-center my-2">
                                        <a href="#"><small className="text-muted">Forgot Password?</small></a>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom text-center mb-5">
                                <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<button className="btn btn-white ml-2">Create new</button></p>
                            </div>
                        </div>
                        <div className="card card2">
                            <div className="my-auto mx-md-5 px-md-5 right">
                                <h3 className="text-white">We are more than just a company</h3>
                                <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login