import React, { Component } from "react";
import '../css/Header.css'
import ImgPerfil from '../images/fotoCV.png'
import ImgPerfil2 from '../images/TEXT.png'

class Header extends Component {

    render() {

        return (


            < header >
                <div className="headerSitio  d-flex">
                    <div className="row">
                        <img className="perfil  col-lg-3" src={ImgPerfil} alt="" />
                        <img className="perfil1  col-lg-9" src={ImgPerfil2} alt="" />
                    </div>
                 </div>

                    <nav className="nav1 navbar-dark bg-dark fixed-top navbar-expand-sm" >
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#contraer">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="contraer">
                            <ul className="navbar-nav navHeader ">
                                <li className="nav-item active ">
                                    <a className="navbar-brand " href="#AcercaMio">Acerca de Mí</a>
                                </li>
                                <li className="nav-item">
                                    <a className="navbar-brand" href="#Experiencia">Experiencia</a>
                                </li>
                                <li className="nav-item">
                                    <a className="navbar-brand" href="#Estudios">Estudios</a>
                                </li >
                                <li className="nav-item">
                                    <a className="navbar-brand" href="www.github.com">GitHub</a>
                                </li>
                            </ul>
                        </div>
                    </nav >
                

            </header >



        );
    }

}

export default Header;