import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import
StyledCheckoutPage,
{
    CheckoutContainer,
    CheckoutList,
    CheckoutProdItem,
    ProductThumb,
    ProductText,
    StyledLink,
    SpanTotalAmount,
    StyledBtn,
    CheckoutActions
} from './style'
import AddRemoveItem from "../../components/AddRemoveItem/index";
import GoldenButton from '../../components/GoldenButton/index'

export default class Checkout extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.listCartProducts()
    }

    finish(){
        alert("Go to Finish order. Payment and sending")
    }

    showProductList() {
        console.log("length", this.props.products)
        if (this.props.products.length > 0) {
            return this.props.products.map(function (product) {
                console.log(product.id)
                return (
                    <CheckoutProdItem key={product.id}>
                        <ProductThumb src={`images/${product.image}`} />
                        <ProductText>{product.name}</ProductText>
                        <ProductText>Origin: {product.origin}</ProductText>
                        <ProductText>Type: {product.type}</ProductText>
                        <AddRemoveItem currentQty={product.qty} productId={product.id} />
                    </CheckoutProdItem>
                )
            })
        } else {
            return (<p>Nenhum produto ainda</p>)
        }
    }

    render() {
        let ContinueBuying = StyledLink(Link)

        return (
            <StyledCheckoutPage>
                <Navbar key="navbar" />
                <CheckoutContainer>
                    <h2>Checkout</h2>
                    <CheckoutList>
                        {this.showProductList()}
                    </CheckoutList>
                    <CheckoutActions>
                        <ContinueBuying to="/shop">Continue buying</ContinueBuying>
                        <StyledBtn onClick={this.finish}>
                            Finish order  
                            <SpanTotalAmount>{this.props.totalAmount.toFixed(2)} €</SpanTotalAmount>
                        </StyledBtn>
                    </CheckoutActions>
                </CheckoutContainer>
            </StyledCheckoutPage>
        )
    }
}