import React,{useState} from 'react'
import { Redirect } from 'react-router';

export default function Home() {
    const [isSignedOut,setSignedOut] =useState(false)
    const signOut=()=>{
        setSignedOut(true);
    }
    return (
        <>
            <button className="btn" onClick={signOut}>signOut</button>
            <div className="home">
            <div className="banner">  Welcome, this is home page</div>
            {isSignedOut?<Redirect to ='/' />:null}
            </div>
        </>
    )
}
