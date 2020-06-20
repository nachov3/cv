import React, { Component } from "react";
import '../css/Experiencia.css'
import Ejemplo from '../images/binary-2.jpg';


class Experiencia extends Component {
    render() {
        return (

          

                <div  className="experiencia contenidoExperiencia d-flex row">
                    <div  id="Experiencia"></div>
                    <div  className="card cardExperiencia col-xs">
                        <img   className="card-img-top" src={Ejemplo} alt="Biblioteca" />
                        <div className="card-body">
                            <h2 className="card-text tituloExperiencia">
                                Desarrollo e implemetnación Sistema Bibliotecario
                            </h2>
                            <h3 className="subtituloExperiencia">
                                Tecnologías Empleadas:
                           </h3>
                            <p className="parrafoExperiencia">
                                PHP,
                                MYSQL,
                                JavaSript,CSS3, HTML5,
                                Boostrap.
                            </p>
                        </div>
                    </div>

                    <div  className="card cardExperiencia col-xs">
                        <img className="card-img-top" src={Ejemplo} alt="wallet BTC" />
                        <div className="card-body">
                            <h2 className="card-text tituloExperiencia ">
                                Desarrollo e implemetnación de wallet BTC
                            </h2>
                            <h3 className="subtituloExperiencia">
                                Tecnologías Empleadas:
                           </h3>
                            <p className="parrafoExperiencia">
                                PHP,
                                MYSQL,
                                JavaSript,CSS3, HTML5,
                                Boostrap.
                            </p>
                        </div>
                    </div>


                    <div className="card cardExperiencia col-xs">
                        <img className="card-img-top" src={Ejemplo} alt="CV Online" />
                        <div className="card-body">
                            <h2 className="card-text tituloExperiencia ">
                               Desarrollo de CV Online
                            </h2>
                            <h3 className="subtituloExperiencia">
                                Tecnologías Empleadas:
                           </h3>
                            <p className="parrafoExperiencia">
                                React,CSS3, HTML5,
                                Boostrap.
                            </p>
                        </div>
                    </div>
                </div>
         

        );
    }
}
export default Experiencia;