import React, { Component } from 'react';
import '../css/Estudios.css'
import CyPSoft from '../images/cypsoft.png';
import Uspt from '../images/uspt.jpg';
import Rolling from '../images/rolling.png';



class Estudios extends Component {
    render() {
        return (
            <section>
                <div  className="estudios d-flex row ">
                    <div  id="Estudios"></div>
                    <div  className="contenidoCyP d-flex row">
                        <div className="contenidoEstudios col-xs">
                            <img className="img-fluid" src={Rolling} alt="" />
                        </div>

                        <div className="contenidoEstudios1 d-flex col-xs">
                            <p>Full Stack Web Development</p>
                            <p>2020-2020</p>
                        </div>
                    </div>
                    <div className="contenidoUSPT d-flex row">
                        <div className="contenidoEstudios col-xs ">
                            <img className="img-fluid" src={Uspt} alt="" />

                        </div>
                        <div className="contenidoEstudios1 d-flex col-xs">
                            <p>Diplomatura en desarrollo de Software </p>
                            <p>2018-2019 </p>

                        </div>
                    </div>
                    <div className="contenidoUSPT d-flex row">
                        <div className="contenidoEstudios col-xs">
                            <img className="img-fluid" src={CyPSoft} alt="" />

                        </div>
                        <div className="contenidoEstudios1 d-flex col-xs">
                            <p>Técnico Superior en Sistemas de Información </p>
                            <p>2012-2016</p>

                        </div>
                    </div>

                </div>
            </section>


        );
    }
}
export default Estudios;