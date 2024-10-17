import { useState } from "react"

function Button() {
    const [nameStudent,setNameStudent]=useState("Rafael")
    const showNameStudent=()=>{
        // nameStudent="pedro"
        setNameStudent('Pedro')
    }
    return (
        <>
            <h1>Ejemplo de boton</h1>
            {nameStudent}
            <button className="btn btn-primary" onClick={showNameStudent}>Dar clic</button>
        </>
    )
}

export default Button