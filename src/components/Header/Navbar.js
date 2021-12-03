import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="main-nav-parent pad">
                <div className="logo-parent">
                    <img src="logo.png" alt="vasiti logo" />
                </div>
                <div className="main-nav-details">
                    <ul>
                        <li><p>ABOUT US</p></li>
                        <li><p>STOTRIES</p></li>
                        <li><p>CONTACT</p></li>
                        <li><p>LOG IN</p></li>
                        <li><button>SIGN UP</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
