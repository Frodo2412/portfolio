import './App.css'
import Navbar from "./components/nav/Navbar.tsx";
import Hero from "./components/hero/Hero.tsx";
import Experience from "./components/experience/Experience.tsx";

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
