
import {connect} from 'react-redux'
import Home from './Home'
import {getAllProducts} from '../../store/ducks/products'


const mapStateToProps = state =>{
    return state.products
}

const mapDispatchToProps = {getAllProducts}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)