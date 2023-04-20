import React, { useEffect } from 'react'

function Message() {
    useEffect(() => {
        const onMouseMove = ({x,y}) => {
            console.log(x,y)
        }
        console.log("Se monta")
        //Revienta la memoria si no lo borras, cuidado con los listeners! Evitar los siteners si se puede.
        window.addEventListener("mousemove", onMouseMove)
        return () => {
            console.log("Se desmonta")
            //Eliminar listener
            window.removeEventListener("mousemove", onMouseMove)
        }
    },[])
  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}

export default Message