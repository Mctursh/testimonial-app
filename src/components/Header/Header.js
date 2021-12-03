import React from "react";
import Navbar from "./Navbar";
import "./header.css"
import SubNavbar from "./SubNavbar";

const Header = () => {
    return (
        <header className="App-header">
            <div >
                <Navbar />
                <SubNavbar />
            </div>
        </header>
    )
}


export default Header