import React,{ useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

export default function Login() {
    let history = useHistory()
    const [message ,setMessage] = useState("")
    const submitHandler =async e =>{
        e.preventDefault();
        let uValue = document.querySelector('#username').value
        let pValue = document.querySelector('#password').value
        console.log(uValue,pValue)
        let answer = await submit(uValue,pValue)
        setMessage(answer?null:"wrong password")
        history.push(answer?"/home":"/")
    }
    const submit = async (u,p) =>{
        let replyFromServer
        try{ 
                replyFromServer = await axios({
                method: 'post',
                url: ' https://doot-server.herokuapp.com/login',
                data:{
                    username:u,
                    password:p
                }
            })
            }
            catch(e){ console.log(e) }
        return replyFromServer.data
    }
    const register = e=>{
        history.push("/register")
    }
    return (
        <div className="home login">
        <h1>LOGIN</h1>
            <div className="form">
                <form onSubmit={submitHandler} >
                    <input id="username" type="text" className="i-f"placeholder="enter userName" defaultValue="raju" />
                    <input id="password" type="password"  className="i-f" placeholder="enter password" defaultValue="abcde"/>
                    <div className="message">{message}</div>
                    <div className="buttons">
                    <button type="submit" className="btn">Login</button>
                    <button className="btn" onClick={register}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
