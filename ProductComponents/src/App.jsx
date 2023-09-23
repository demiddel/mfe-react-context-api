import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import { ProductListComponent } from './components/ProductListComponent';

export default ({history, data}) => (
    <Router location={history.location} navigator={history} >
        <Routes>
            <Route exact path="/detail/:id" render={props => <ProductDetail {...props} />} /> 
            <Route path="/" render={ 
                 () => <ProductListComponent products={data} />} />
        </Routes>
    </Router>
);
