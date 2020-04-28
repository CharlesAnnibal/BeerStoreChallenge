import {connect} from 'react-redux'
import Checkout from './Checkout'
import {listCartProducts} from '../../store/ducks/cart'


const mapStateToProps = state =>{
    return state.cart
}

const mapDispatchToProps = {listCartProducts}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Checkout)