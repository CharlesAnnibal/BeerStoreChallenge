import React, { Component } from 'react';
import {Container, BtnAdd, Qty, BtnRemove} from './style';
export default class AddRemoveItem extends Component {
   constructor(props) {
        super(props);

        this.quantityUp = this.quantityUp.bind(this);
        this.quantityDown = this.quantityDown.bind(this);
   }

   quantityUp(){
        this.props.addToCart(
            {
                id:this.props.productId,
                qty:this.props.currentQty
            }
        )
   }

   quantityDown(){
        this.props.removeFromCart(
            {
                id:this.props.productId,
                qty:this.props.currentQty
            }
        )
   }

   render() {
      return(
          <Container>
              <BtnAdd onClick={this.quantityUp}><span>+</span></BtnAdd>
                <Qty>{this.props.currentQty}</Qty>
              <BtnRemove onClick={this.quantityDown}><span>-</span></BtnRemove>
          </Container>
      )
   }
}