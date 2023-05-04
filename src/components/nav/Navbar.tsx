import './Navbar.scss'
import logo from '../../assets/logo.png'

export default function Navbar() {

    return (
        <div id={"navbar"}>
            <img src={logo} alt={"logo"} className={"logo"}/>
            <ul>
                <li><a href={'#'}>Home</a></li>
                <li><a href={'#'}>Technologies</a></li>
                <li><a href={'#'}>Experience</a></li>
                <li><a href={'#'}>Contact</a></li>
            </ul>
        </div>
    )

}