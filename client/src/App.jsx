import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";

function App() {
    return (
        <div className="flex">
            <Navigation />

            <div className="flex-grow p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
