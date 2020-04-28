export const ADD_TO_CART = 'cart/ADD_TO_CART'
export const ADD_TO_CART_SUCCESS = 'cart/ADD_TO_CART_SUCCESS'
export const ADD_TO_CART_FAILED = 'cart/ADD_TO_CART_FAILED'

export const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
export const REMOVE_FROM_CART_SUCCESS = 'cart/REMOVE_FROM_CART_SUCCESS'
export const REMOVE_FROM_CART_FAILED = 'cart/REMOVE_FROM_CART_FAILED'

export const LIST_CART_PRODUCTS = 'cart/LIST_CART_PRODUCTS'
export const LIST_CART_PRODUCTS_SUCCESS = 'cart/LIST_CART_PRODUCTS_SUCCESS'
export const LIST_CART_PRODUCTS_FAILED = 'cart/LIST_CART_PRODUCTS_FAILED'


const initialState = {
    products: [],
    totalAmount: 0
}

export default function cartReducer(state = initialState, action) {

    switch (action.type) {
        case LIST_CART_PRODUCTS_SUCCESS:
            return {
                ...state,
                products:action.payload.products,
                totalAmount: action.payload.totalAmount
            }

        case LIST_CART_PRODUCTS_FAILED:
            console.log(`Tentative to LIST cart failed - ${action.payload}`)
            return state;    

        case ADD_TO_CART_FAILED:
            console.log(`Tentative to add on cart failed - ${action.payload}`)
            return state;

        default:
            return state;
    }
}


export const addToCart = product => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const addToCartFailed = message => {
    return {
        type: ADD_TO_CART_FAILED,
        payload: message
    }
}

export const removeFromCart = product => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export const removeFromCartFailed = message => {
    return {
        type: REMOVE_FROM_CART_FAILED,
        payload: message
    }
}



export const listCartProducts = () => {
    return {
        type: LIST_CART_PRODUCTS
    }
}

export const listCartProductsFailed = message => {
    return {
        type: LIST_CART_PRODUCTS_FAILED,
        payload: message
    }
}

export const listCartProductsSuccess = products =>{
    return{
        type:LIST_CART_PRODUCTS_SUCCESS,
        payload: {
            products:products,
            totalAmount:products.length === 0 ? 0 : products.map(product=>{return product.price * product.qty}).reduce((total, num)=>{return total + num})
        }
    }
}