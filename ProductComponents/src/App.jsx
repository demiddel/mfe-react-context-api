import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import { ProductListComponent } from './components/ProductListComponent';

export default ({history, data}) => (
    <Router history={history}>
        <Switch>
            <Route exact path="/detail/:id" render={props => <ProductDetail {...props} />} />
            <Route path="/" render={
                () => <ProductListComponent products={data} />} />
        </Switch>
    </Router>
);
