import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';
import { Button, ButtonGroup } from '@mui/material';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            logBtnContent: this.props.isLoggedIn === 'true' ? 'LOGOUT' : 'LOGIN'
        }
    }
    render() {
        console.log('isLoggedIN', this.state.isLoggedIn);
        const logButton = <button variant='contained'  >
            {this.state.logBtnContent}
        </button>
        console.log('Header Location :', window.location);
        if (window.location.pathname.indexOf("Details") > -1 ) {
            return (
                <div className='header'>
                    {/* <svg  className='header-svg' xlmns = './logo.svg'/> */}
                    <img src={logo} className='header-svg' />
                    <ButtonGroup color='success' sx={{float: 'right'}}>
                    <Button variant='contained' >Book Now</Button>
                    {logButton}
                    </ButtonGroup>
                </div>

            );
        }
        else {
            
            return (
                <div className='header'>
                    {/* <svg  className='header-svg' xlmns = './logo.svg'/> */}
                    <img src={logo} className='header-svg' />
                </div>

            );

        }

    }
}

export { Header };