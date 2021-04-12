import React, { useState } from 'react'
import axios from 'axios';
import {  useHistory } from 'react-router';
export default function Register() {
    const [message ,setMessage] = useState("")
    let history = useHistory()
    const submitHandler =async e =>{
        e.preventDefault();
        let uValue = document.querySelector('.username').value
        let p1Value = document.querySelector('.password').value
        let p2Value = document.querySelector('.re-password').value
        let answer
        if(p1Value=== p2Value){
            answer= await submit(uValue,p1Value)
        }
        else{
            setMessage("password do not match");
        }
        history.push(answer?"/":"/register")
    }
    const submit = async (u,p) =>{
        let replyFromServer
        try{ 
                replyFromServer = await axios({
                method: 'post',
                url: ' https://doot-server.herokuapp.com/register',
                data:{
                    username:u,
                    password:p
                }
            })
            }
            catch(e){ console.log(e) }
        return replyFromServer.data
    }
    return (
        <div className="home">
            <div className="register" >
                <h1 className="regText">Lets get you registered!!</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" className="username"placeholder="enter userName" />
                    <input type="password"  className="password" placeholder="enter password" />
                    <input type="password"  className="re-password" placeholder="re-enter password" />
                    <div className="message">{message}</div>
                    <button type="submit" className="btn">register</button>
                </form>
            </div>
        </div>
    )
}
