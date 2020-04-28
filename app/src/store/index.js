import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import productsReducer from './ducks/products'
import cartReducer from './ducks/cart'
import requestProducts from '../sagas/products'
import {addingOnCart, removingFromCart, getCartProductsFromCookie} from '../sagas/cart'

console.log("cart:",{cart:cartReducer})

  let combinedReducers = combineReducers({products:productsReducer, cart:cartReducer})

  let sagaMiddleware = createSagaMiddleware()
  
  let store = createStore(
      combinedReducers,
      applyMiddleware(sagaMiddleware)
  )

  /*Running sagas*/
  const sagas = [
    requestProducts,
    addingOnCart,
    removingFromCart,
    getCartProductsFromCookie
  ]

  sagas.forEach((saga)=>{
    sagaMiddleware.run(saga)
  })

  export default store;