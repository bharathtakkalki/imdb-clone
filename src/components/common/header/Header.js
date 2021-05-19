import React, { useEffect,useState } from 'react'
import { useHistory, useLocation } from 'react-router';

function Header() {
    const [pathName,setPathName] = useState("")
    const location = useLocation();
    const history = useHistory();

    useEffect(() =>{
       setPathName(location.pathname) 
    },[])

    const redirectTo = (pathName) =>{
        setPathName(pathName)
        history.push(pathName)
    }
    return (
        <header className="header">
            <nav className="nav-bar"> 
                <p className={`nav-item ${pathName === "/" ? "selected" :""}`} onClick={() => redirectTo("/")}>Movies</p>
                <p className={`nav-item ${pathName === "/series" ? "selected" :""}`} onClick={() => redirectTo("/series")}>Series</p>
                <p className={`nav-item ${pathName === "/anime" ? "selected" :""}`} onClick={() => redirectTo("/anime")}>Anime</p>
            </nav>
        </header>
    )
}

export default Header;
