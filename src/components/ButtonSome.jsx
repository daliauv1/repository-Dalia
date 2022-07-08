import React from "react";
import "../assets/stylesheets/buttonsome.css"

function ButtonSome(props){

    return(
            <button className="Buttonsome">{props.name}</button>
    )
}
export default ButtonSome