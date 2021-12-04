import React, { useState } from "react";
import Testimonials from "../TestimonialContext";
import TopMid from "./TopMid";
import "./mid-section.css"
import MidMid from "./MidMid";
import SubMid from "./SubMid";

const demo = [
    {
        imgUrl: "chef-guy.png",
        fname: "Joseph",
        lname: "Ike",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, incidunt.",
        interaction: "VENDOR"

    },
    {
        imgUrl: "chef-guy.png",
        fname: "Joseph",
        lname: "Ike",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, incidunt.",
        interaction: "VENDOR"

    },
    {
        imgUrl: "chef-guy.png",
        fname: "Joseph",
        lname: "Ike",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, incidunt.",
        interaction: "CUSTOMER"

    },
]

const MidSection = () => {
       
    const [testimonials, setTestimonials] = useState(demo)

    const addTestimony = (testObj) => {
        setTestimonials(prev => {
            let newArr = prev
            newArr.push(testObj)
            return newArr
        })
    }
    return (
        <div>
            <Testimonials.Provider value={testimonials} >
                <TopMid addTestimony={addTestimony}/>
                <MidMid />
                <SubMid />
                <MidMid />
            </Testimonials.Provider>
        </div>
    )
}

export default MidSection

