import React from "react";

const UtilButton = ({value}) => {
    return (
        <button className={`util ${value === "CUSTOMER" ? "cus" : "ven"}`} >{value}</button>
    )
}

export default UtilButton