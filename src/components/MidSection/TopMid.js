import React from "react";
import { Button } from ".";

const TopMid = () => {
    return (
        <section>
            <div className="top-mid-parent pad">
                <div className="top-mid-pic">
                    <div className="back-circle-fade"></div>
                    <img src="black-beautiful-ladies-smiling 1.png" alt="black-beautiful-ladies-smiling" />
                </div>
                <div className="top-mid-text">
                    <div>
                        <h1>Tolu &#38; Joy’s Experience</h1>
                        <Button value="CUSTOMER" />
                    </div>
                    <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                    <div>
                        <h3>Share your own story!</h3>
                        <svg id="story-svg" width="297" height="12" viewBox="0 0 297 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125" stroke="#FF5C00"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopMid