import React from 'react'
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Login from  './components/Login'
import Register from  './components/Register'
function App() {
	return (
		<>
			<BrowserRouter >
				<Route exact path="/" component={Login}/>
				<Route path="/register" component={Register} />
				<Route path="/home" component={Home} />
			</BrowserRouter>
		</>
	);
}


export default App;
