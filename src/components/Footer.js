import React, { Component } from 'react';
import '../css/Footer.css';


class Footer extends Component {
    render() {
        return (

            <footer>

                <div>
                    <nav className="navbar-dark bg-dark ">
                        <ul className="nav navFooter">
                            <li className="nav-item">
                                <a className="navbar-brand " href="https://www.linkedin.com/in/ignacio-rolando-caro-9a9318b7/">Linkedin</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand " href="www.github.com">GitHub</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>

        );
    }
}

export default Footer;