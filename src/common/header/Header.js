import React, {Component} from 'react';
import './Header.css';
import logo from './logo.svg';


class Header extends Component {
    render() {
        return(
            <div className='header'>
                    {/* <svg  className='header-svg' xlmns = './logo.svg'/> */}
                    <img src={logo} className='header-svg'/>
            </div>
        );
    }
}

export {Header};