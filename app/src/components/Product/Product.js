import React, { Component } from 'react';
import { StyledProduct, ProductDataText, ProductImage } from './style'
import GoldenButton from '../../components/GoldenButton/index'
import {  Redirect } from "react-router-dom";

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state ={ redirect:false }
        this.addToCart = this.addToCart.bind(this);

    }

    addToCart() {
        this.props.addToCart(
            {
                image: this.props.image,
                name: this.props.name,
                price: parseFloat(this.props.price),
                id: parseInt(this.props.id),
                origin: this.props.origin,
                liters:this.props.liters,
                type:this.props.type
            }
        )

        this.setState({redirect:true})
        
        
    }

    render() {
        if(this.state.redirect){
            return (<Redirect to='/shop' />)
        }
        return (
            <StyledProduct>
                <ProductImage src={`images/${this.props.image}`} />
                <ProductDataText>{this.props.name}</ProductDataText>
                <ProductDataText>{parseFloat(this.props.price).toFixed(2)} €</ProductDataText>
                <GoldenButton text="Add to cart" action={this.addToCart} />
            </StyledProduct>
        )
    }
}