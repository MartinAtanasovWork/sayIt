import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
    let [message,setMessage] = useState("");
    let [isUser,setIsUser] = useState(false);  
    let [token,setToken] = useState("");

    useEffect(() => {
        let token = localStorage.getItem("token");
        
        if(token){
            setIsUser(true);
        }else{
            setIsUser(false);
        }        
    },[token]);

    async function handler() {
        console.log("start");
        let req = await fetch("http://localhost:3000/login", {
            method: "post",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email: 'martinatanasof@gmail.com', password: 'password' })
        });
        let data = await req.json();

        let token = req.headers.get("Auth-Token")  || "";

        localStorage.setItem("token",token);
        localStorage.setItem("user",data.email);
        setToken(token);    

        if(data.error){
            setMessage(data.error);
        }else{
            setMessage("Successful!")
        }
   
        console.log("finish");
    }

    async function logoutHandler(){
        let email = localStorage.getItem("user");

        let req = await fetch("http://localhost:3000/logout", {
            method: "post",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({user:email})
        });       

        let token = req.headers.get("Auth-Token");
        console.log(token);
        setToken(token);
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>

            {isUser  || <button onClick={handler}>Sent</button>}
            {!isUser || <button onClick={logoutHandler}>Log out</button>}
            <h3>{message}</h3>
        </>
    )
}

export default App
