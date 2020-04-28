import AddRemoveItem from './AddRemoveItem'
import {connect} from 'react-redux'
import {removeFromCart, addToCart} from '../../store/ducks/cart'

const mapDispatchToProps = {removeFromCart, addToCart}

export default connect(
    null,
    mapDispatchToProps,
)(AddRemoveItem)