import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Experience from "./components/Experience.tsx";

function App() {

    return (
        <main>

            <div className={"constellations"}>
                <Navbar/>
                <Hero/>
            </div>

            <Experience/>

            <div>Technologies/Stacks</div>
            <div>Contact Me</div>
        </main>
    )
}

export default App
