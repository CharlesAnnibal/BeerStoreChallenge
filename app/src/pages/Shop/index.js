import Shop from './Shop'
import {connect} from 'react-redux'
import {getAllProducts} from '../../store/ducks/products'
import {listCartProducts} from '../../store/ducks/cart'

const mapStateToProps = state=>{
    return{
        products:state.products.products
    }
}

const mapDispatchToProps = {getAllProducts, listCartProducts}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Shop)