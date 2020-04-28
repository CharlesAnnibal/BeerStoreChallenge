import React, { Component } from 'react';
import { StyledHomePage, Banner, Container, ImgBanner, TextTitle, TextSubtitle, ProductTitle, TextArea, ProductList, ShopContainer } from './style'
import Button from '../../components/GoldenButton/index'
import Navbar from '../../components/Navbar';
import BeerImg from '../../assets/beer.png'
import Product from '../../components/Product/index';


export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllProducts()
    }

    showNationalProducts() {
        if (this.props.products.length > 0) {
            let nationalProds = this.props.products.filter(function (product, index) {
                return product.origin === "Portugal"
            })
            return nationalProds.slice(0, 4).map(function (product) {
                return <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    origin={product.origin}
                    liters={product.liters}
                    type={product.type}
                    redirect={true}
                />
            })
        }
    }

    showImportedProducts() {
        if (this.props.products.length > 0) {
            let importeds = this.props.products.filter(function (product, index) {
                return product.origin !== "Portugal"
            })


            return importeds.slice(0, 4).map(function (product) {
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
            <StyledHomePage>
                <Navbar />
                <Banner>
                    <Container>
                        <ImgBanner src={BeerImg} />
                        <TextArea>
                            <TextTitle>Real Beer</TextTitle>
                            <TextSubtitle>The best breweries in one place</TextSubtitle>
                            <TextSubtitle>Get exclusive craft beers</TextSubtitle>
                            <Button link="/shop" text="Buy now" />
                        </TextArea>
                    </Container>
                </Banner>
                <ShopContainer>
                    <ProductTitle>National products</ProductTitle>
                    <ProductList>
                        {this.showNationalProducts()}
                    </ProductList>

                    <ProductTitle>Imported products</ProductTitle>
                    <ProductList>
                        {this.showImportedProducts()}
                    </ProductList>

                </ShopContainer>
            </StyledHomePage>
        )
    }
}