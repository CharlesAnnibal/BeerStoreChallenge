import Product from './Product'
import {connect} from 'react-redux'
import {addToCart} from '../../store/ducks/cart'

const mapDispatchToProps = {addToCart}

export default connect(
    null,
    mapDispatchToProps,
)(Product)