import React from "react";
import "../assets/stylesheets/testimony.css"

function Testimony(props){
    return(
        <div className="container_testimony">
            <img className="img_testimony"
            src={require(`../assets/images/Testimonio-${props.name}.jpeg`)}
            alt="Fotografía de testimonio"
            />
            <div className="container_text_testimony">
                <p className="name_company"><strong>{props.name}</strong> </p>
                <p className="position_testimony"><b>{props.position}</b></p>
                <p className="text_testimony">{props.testimony}
                </p>
            </div>
        </div>
    )
}

export default Testimony