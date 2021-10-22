import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import { ProductComponent } from './components/ProductComponent';

export default ({history, data}) => (
    <Router history={history}>
        <Switch>
            <Route exact path="/detail/:id" render={props => <ProductDetail {...props} />} />
            <Route path="/" render={
                () => <ProductComponent product={data}/>} />
        </Switch>
    </Router>
);
