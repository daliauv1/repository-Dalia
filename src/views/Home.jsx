import React from "react";
import ButtonSome from "../components/ButtonSome";
import "../assets/stylesheets/testimony.css";
import "../assets/stylesheets/home.css";

function Home() {
    return (
        <>
            <div className="container_home">
                <div className="left_home">
                    <div className="fondo_perfil"></div>
                    <img className="img_perfil"
                        src={require("../assets/images/foto_perfil.jpg")}
                        alt="Fotografía de testimonio"
                    />
                    <a href="#">Download resume</a>
                </div>
                <div className="container_text_home">
                    <p className="text_prim"><strong>Hola, soy</strong> </p>
                    <p className="name_principal"><b>Dalia Utani</b></p>
                    <p className="text_testimony">Developer Front-end</p>
                    <ButtonSome name="Contact me" />
                </div>
            </div>
        </>
    )
}

export default Home