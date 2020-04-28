import React, { Component } from 'react';
import { StyledSideCart, StyledCheckoutButton, CartProdList, CartProdItem, ProductThumb, BottomSideCart } from './style'
import { Link } from 'react-router-dom';
import AddRemoveItem from "../../components/AddRemoveItem/index";
export default class SideCart extends Component {
   constructor(props) {
      super(props);

      this.state = { totalAmout: this.props.totalAmout }
   }

   showProductList() {
      console.log("length", this.props.products)
      if (this.props.products.length > 0) {
         return this.props.products.map(function (product) {
            console.log(product.id)
            return (
               <CartProdItem key={product.id}>
                  <ProductThumb src={`images/${product.image}`} />
                  <p>{product.name}</p>
                  <AddRemoveItem currentQty={product.qty} productId={product.id} />
               </CartProdItem>
            )
         })
      } else {
         return (<p>Nenhum produto ainda</p>)
      }
   }

   render() {
      let CheckoutButton = StyledCheckoutButton(Link)

      return (
         <StyledSideCart key="container-side-cart">
            <div>
               <h3>Cart</h3>
               <CartProdList key="cart-prod-list">
                  {this.showProductList()}
               </CartProdList>
            </div>

            <BottomSideCart>
               <p>Total: {this.props.totalAmount.toFixed(2)}</p>
               <CheckoutButton to="/checkout">Checkout</CheckoutButton>
            </BottomSideCart>
         </StyledSideCart>
      )
   }
}