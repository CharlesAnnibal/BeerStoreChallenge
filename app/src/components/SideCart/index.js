import SideCart from './SideCart'
import {connect} from 'react-redux'
import {addToCart} from '../../store/ducks/cart'

const mapStateToProps = state =>{
    return state.cart
}

const mapDispatchToProps = {addToCart}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideCart)