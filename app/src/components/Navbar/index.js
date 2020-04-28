import React, { Component } from 'react';
import { StyledNavbar, StylizeLink, NavImg } from './style';
import { Link } from 'react-router-dom';
import BeerImg from '../../assets/logo.png'


export default class Navbar extends Component {
    constructor() {
        super();

    }

    render() {
        let StyleLink = StylizeLink(Link)
        return (
            <StyledNavbar>
                <NavImg src={BeerImg} />
                <div>
                    <StyleLink to="/">Home</StyleLink>
                    <StyleLink to="/checkout">Checkout</StyleLink>
                </div>
                
            </StyledNavbar>
        )
    }
}