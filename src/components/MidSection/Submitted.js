import React from "react";


const Submitted = ({ toggleModal }) => {
    return (
        <div className="submit-parent">
            <div className="modal-img">
                <div className="modal-back-drop"></div>
                <img src="celeb.png" alt="celeb" />
            </div>
            <div className="modal-sub-remark">
                <h1>Thank you for sharing your story!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button className="modal-btn" onClick={() => toggleModal()} >Close</button>
        </div>
    )
}

export default Submitted