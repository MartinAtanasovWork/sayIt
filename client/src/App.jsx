import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {
    let [message,setMessage] = useState("");
    async function handler() {
        console.log("aaaaa");
        let req = await fetch("http://localhost:3000/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: 'martinatanasof1@gmail.com', password: 'password' })
        });
        let data = await req.json();

        if(data.error){
            setMessage(data.error);
        }else{
            setMessage("Successful register!")
        }

        console.log("aa");
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

            <button onClick={handler}>Sent</button>
            <h3>{message}</h3>
        </>
    )
}

export default App
