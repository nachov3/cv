import React, { Component } from 'react';
import '../css/Main.css';
import AcercaMio from '../components/AcercaMio';
import Experiencia from '../components/Experiencia'
import Estudios from './Estudios';


class Main extends Component {
    render() {
        return (
            <main>
                <React.Fragment>
                    <AcercaMio />
                    <Experiencia />
                     <Estudios />
                </React.Fragment>

            </main>
        );
    }

}

export default Main;