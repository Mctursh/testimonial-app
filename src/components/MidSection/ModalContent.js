import React, { useState } from "react"
import Form from "./Form"
import Submitted from "./Submitted"

const ModalContent = ({ addTestimony, handleFileChange, fileName, reset, toggleModal }) => {
    const [submit, setSubmit] = useState(false)

    const handleSubmit = () => {
        addTestimony()
        setSubmit(true)
    }

    
    return (        
        submit ? <Submitted  toggleModal={toggleModal} /> : <Form handleSubmit={handleSubmit} handleFileChange={handleFileChange} submit={submit} fileName={fileName} reset={reset}  />     
    )
}

export default ModalContent