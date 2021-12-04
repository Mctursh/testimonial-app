import React from "react";

const TopFooter = () => {
    return (
        <div className="top-footer-parent pad" >
            <img src="subscribe-banner 1.png" alt="subscribe-banner" />
            <div className="top-footer-details">
                <h1>Be a  member of our community 🎉</h1>
                <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                <div className="nws-ltr">
                    <input type="text" placeholder="enter your email address" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default TopFooter