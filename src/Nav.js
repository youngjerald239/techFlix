import React, {useState, useEffect} from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)
    
    useEffect(() => {
        //event listener for nav scroll
       window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
            //handleShow(true)
        } else handleShow(false)
       })
       return () => {
           window.removeEventListener("scroll")
       }
    }, [])

    return (
        <div className="nav">
            <img className="nav__logo" src="https://i.imgur.com/hpmrt4U.png?2" alt="Techflix Logo"/>
            <img className="nav__avatar" src="https://i.imgur.com/Myw3Gmu.png?1" alt="Techflix Logo"/>
        </div>
    )
}

export default Nav
