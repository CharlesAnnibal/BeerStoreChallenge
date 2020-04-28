
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS } from "../constants/urls";
import request from '../services/api/request';
import {
        productsRequestSuccess, 
        productsRequestFailed,
        FETCH_ALL_PRODUCTS
    } from '../store/ducks/products'

function * fetchAllProducts(){
    
    try{
        console.log("teste")
        const response = yield call(request, GET_PRODUCTS);
        yield put(productsRequestSuccess(response.products))
    }catch(e){
        yield put(productsRequestFailed(e.message))
    }
}

function * requestProducts(){
    yield takeLatest(FETCH_ALL_PRODUCTS, fetchAllProducts);
}

export default requestProducts

