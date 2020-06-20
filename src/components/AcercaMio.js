import React, { Component } from 'react';
import '../css/AcercaMio.css';
import ImgAcercaMio from '../images/imgAcercaMio.png';

class AcercaDeMi extends Component {
    render() {
        return (

            <section >
                <div  className="row">
                    <div  className="acercaMio d-flex col ">
                        <div  id="AcercaMio"></div>

                        <img  className="limitacion img-fluid " src={ImgAcercaMio} alt="" />
                        <div className=" contenidoAcercaMio ">
                            <p className="parrafoAcercaMio">
                             Hola, me llamo Ignacio Rolando Caro
                             y soy desarrolladoer Web.
                             Me considero una persona responsable con mucha motivación
                             y pasión por aprender nuevas tecnologías en general. 
                             Soy programador JR con conocimientos básicos-intermedios
                             en PHP, HTMl, CSS3, JavaScritp, REACT y Boostrap, tengo
                             muchas ganas de seguir creciendo , aprendiendo y  profundizar mis
                            conocimientos en el ámbito laboral.
                            </p>

                        </div>
                    </div>
                </div>

            </section>

        );
    }
}

export default AcercaDeMi;