import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home/index'
import Checkout from '../../pages/Checkout/index'
import Shop from '../../pages/Shop/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/checkout" component={Checkout} />
                
            </Switch>
        </BrowserRouter>
    )
}