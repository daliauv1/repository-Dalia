import React from "react";
import Testimony from "../components/Testimony";

function Testimonials(){
    return(
        <div className="App">
            
            <h1>TESTIMONIALS</h1>
            <div className="container_prinpipal">
            <Testimony 
            name="Primero"
            position="Administrador"
            testimony="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ex neque sed quos, quod nihil molestiae, sequi nam necessitatibus ducimus 
            asperiores consequatur placeat amet maxime facere quisquam fuga eius, quaerat minus."
            />
            <Testimony 
            name="Segundo"
            position="Administrador"
            testimony="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ex neque sed quos, quod nihil molestiae, sequi nam necessitatibus ducimus 
            asperiores consequatur placeat amet maxime facere quisquam fuga eius, quaerat minus."
            />
            <Testimony 
            name="Tercero"
            position="Administrador"
            testimony="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ex neque sed quos, quod nihil molestiae, sequi nam necessitatibus ducimus 
            asperiores consequatur placeat amet maxime facere quisquam fuga eius, quaerat minus."
            />
            </div>
            
        </div>
    )
}
export default Testimonials