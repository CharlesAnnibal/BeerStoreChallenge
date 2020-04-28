import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS } from "../constants/urls";
import { getCookieByName, deleteCookieByName, createCookie, getAllCookieProducts } from '../services/cookies/cookieManager';
import {
    ADD_TO_CART,
    LIST_CART_PRODUCTS,
    listCartProducts,
    listCartProductsSuccess,
    addToCartFailed,
    REMOVE_FROM_CART,
    listCartProductsFailed,
    removeFromCartFailed
} from '../store/ducks/cart'

function* addOnCartCookie(action) {
    try {
        const savedCookie = yield call(getCookieByName, `cart-prod-${action.payload.id}`);
        let currentProduct = action.payload;
        console.log("curr qty", savedCookie.length)
        currentProduct['qty'] = (savedCookie === "" ? 1 : JSON.parse(savedCookie).qty + 1);

        let newProduct = savedCookie.length > 0 ? Object.assign(JSON.parse(savedCookie), currentProduct) : currentProduct
        yield call(createCookie, `cart-prod-${action.payload.id}`, JSON.stringify(newProduct))
        yield put(listCartProducts())

    } catch (e) {
        console.log("erro" + e.message)
        yield put(addToCartFailed(e.message))
    }
}

function * removingFromCartCookie(action){
    //try {
        const savedCookie = yield call(getCookieByName, `cart-prod-${action.payload.id}`);
        action.payload['qty'] = JSON.parse(savedCookie).qty - 1;
        console.log("ESTE SAGA FOI CHAMADO", action.payload['qty'])
        if(action.payload['qty'] === 0){
            yield call(deleteCookieByName, `cart-prod-${action.payload.id}`)
        }else{
            yield call(createCookie, `cart-prod-${action.payload.id}`, JSON.stringify(Object.assign(JSON.parse(savedCookie), action.payload)))
        }
        yield put(listCartProducts())

    /*} catch (e) {
        console.log("erro" + e.message)
        yield put(removeFromCartFailed(e.message))
    }*/
}

export function* getCartCookie() {
    try {
        let products = yield call(getAllCookieProducts)
        console.log("PRODUCT LIST:",products)
        yield put(listCartProductsSuccess(products))
    } catch (e) {
        console.log("erro" + e.message)
        yield put(listCartProductsFailed(e.message))
    }

}

export function* addingOnCart() {
    yield takeEvery(ADD_TO_CART, addOnCartCookie)
}

export function* removingFromCart() {
    yield takeEvery(REMOVE_FROM_CART, removingFromCartCookie)
}

export function* getCartProductsFromCookie() {
    yield takeEvery(LIST_CART_PRODUCTS, getCartCookie)
}