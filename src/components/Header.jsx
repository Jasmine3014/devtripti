import React from 'react'

function Header() {
    return (
        <div>
            <header>
                <div className="user">
                    <img src="images/pic.jpg" alt=""/>
                    <h3 className="name">Jasmine Akter</h3>
                    <p className="post">front end developer</p>
                </div>

                <nav className="navbar">
                    <ul>
                        <li><a href="#home">home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#education">education</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </nav>
            </header> 
            <div id="menu" className="fas fa-bars"></div>  
        </div>
    )
}

export default Header
