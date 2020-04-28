import React, { Component, componentDidMount } from 'react';
import { StyledShop, ShopContainer, StyledTitle, ProductList } from './style';
import SideCart from '../../components/SideCart/index';
import Navbar from '../../components/Navbar';
import { Container } from '../../containers/App/style';
import Product from '../../components/Product/index';

export default class Shop extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllProducts()
        this.props.listCartProducts()
    }

    showProductList() {
        if (this.props.products.length > 0) {
            return this.props.products.map(function (product) {
                return <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    origin={product.origin}
                    liters={product.liters}
                    type={product.type}
                />
            })
        }
    }

    render() {
        return (
            <StyledShop>
                <Navbar key="navbar" />
                <ShopContainer>
                    <StyledTitle>All products</StyledTitle>
                    <ProductList>
                        {this.showProductList()}
                    </ProductList>
                </ShopContainer>
                <SideCart/>
            </StyledShop>
        )
    }
}