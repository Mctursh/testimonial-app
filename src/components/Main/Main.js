import React from "react";
import "./main.css"

const Main = () => {
    return (
        <main>
            <div className="main-parent pad">
                <div className="main-intro-text">
                    <h1>Amazing Experiences from Our Wonderful Customers</h1>
                    <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
                </div>
                <div className="main-intro-picture">
                    <div id="circle-back-fade"></div>
                    <img src="testimonial-pic-1.png" alt="testimonial-pic" />
                </div>
            </div>
        </main>
    )
}
export default Main