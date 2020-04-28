import React, { Component } from 'react';
import {StyledLink, StyledBtn} from './style'
import { Link } from 'react-router-dom';
export default class Button extends Component {
   constructor(props) {
       super(props)
   }
   render() {
      let StyledButton = (this.props.link ? StyledLink(Link) : StyledBtn )
      //let StyledButton = StyledLink(Link)
      return(
          <StyledButton to={this.props.link} onClick={this.props.action}>
              {this.props.text}
          </StyledButton>
      )
   }
}