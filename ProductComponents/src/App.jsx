import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import { ProductListComponent } from './components/ProductListComponent';

// FIXME: When going to detail path, unable to see data
export default ({history, data}) => (
    <Router location={history.location} navigator={history} >
        <Routes>
            <Route exact path="/detail/:id" element={<ProductDetail />} /> 
            <Route path="/" element={<ProductListComponent products={data} />} />
        </Routes>
    </Router>
);
