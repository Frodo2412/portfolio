interface NavLinkProps {
    href: string;
    text: string;
}

function NavLink(props: NavLinkProps) {

    return (
        <li className={"flex items-center justify-center"}>
            <a className={"self-center justify-self-center text-xl m-0.5 transition-all duration-500 " +
                "hover:text-2xl hover:m-0 hover:font-semibold " +
                "after:content-[''] after:block after:m-auto after:w-0 after:h-1 after:transition-all duration-500 " +
                "hover:after:w-full hover:after:bg-white hover:after:rounded-full hover:after:mt-1.5 hover:after:mb-0.5"
            }
               href={props.href}>{props.text}
            </a>
        </li>
    )

}

function Icon() {

    return (
        <div className={"flex flex-row items-center"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="h-20 stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/>
            </svg>
            <div>
                <h1 className={"text-3xl"}>Bruno Lemus</h1>
                <h2>Functional Programming Evangelist</h2>
            </div>
        </div>
    )

}

export default function Navbar(props: { className: string }) {

    return (
        <div className={"flex justify-between items-center " + props.className}>
            <Icon/>
            <ul className={"flex flex-1 justify-around items-center h-auto"}>
                <NavLink href={"#"} text={"Home"}/>
                <NavLink href={"#"} text={"Experience"}/>
                <NavLink href={"#"} text={"Technologies"}/>
                <NavLink href={"#"} text={"Contact"}/>
            </ul>
        </div>
    )

}