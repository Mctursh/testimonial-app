import React from "react";

const Button = ({value}) => {
    return (
        <button className={`btn ${value === "CUSTOMER" ? "cust" : "vend"}`}>{value}</button>
    )
}

export default Button