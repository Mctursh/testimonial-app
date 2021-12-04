import React from "react";
import "./footer.css"
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
    return (
        <footer>
            <div>
                <TopFooter />
                <BottomFooter />
            </div>
        </footer>
    )
}

export default Footer