
export const FETCH_ALL_PRODUCTS = 'products/FETCH_ALL_PRODUCTS';
export const ALL_PRODUCTS_FETCH_SUCCEEDED = 'products/ALL_PRODUCTS_FETCH_SUCCEEDED';
export const ALL_PRODUCTS_FETCH_FAILED = 'products/ALL_PRODUCTS_FETCH_FAILED';


const initialState = {
    products: [],
    message: ""
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ALL_PRODUCTS_FETCH_SUCCEEDED:
           return {
            ...state,
            products: action.payload
        }
        case FETCH_ALL_PRODUCTS:
            return state;

        case ALL_PRODUCTS_FETCH_FAILED:
            console.log(`Tentative to get products failed - ${action.payload}`)
            return state;

        default:
            return state;
    }
}


export const productsRequestSuccess = content => {
    console.log("passou na action sucesso", content)
    return {
        type: ALL_PRODUCTS_FETCH_SUCCEEDED,
        payload: content
    }
}

export const productsRequestFailed = content => {
    return {
        type: ALL_PRODUCTS_FETCH_FAILED,
        payload: content
    }
}

export const getAllProducts = () =>{
    return{
        type:FETCH_ALL_PRODUCTS
    }
}
