import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Experience from "./components/Experience.tsx";
import {useState} from "react";

function App() {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <main className={darkMode ? "bg-gray-900 dark" : "bg-white"}>

            <div className={"constellations"}>
                <div className={"flex flex-row bg-gradient-to-b from-black to-transparent text-lg"}>
                    <Navbar className={"flex-1"}/>
                    <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
                </div>
                <Hero/>
            </div>

            <Experience/>

            <div>Technologies/Stacks</div>
            <div>Contact Me</div>
        </main>
    )
}

export default App
