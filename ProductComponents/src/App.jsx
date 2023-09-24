import React from 'react';
import { Routes, Route, Router, RouterProvider } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import { ProductListComponent } from './components/ProductListComponent';

// FIXME: When going to detail path, unable to see data
// https://reactrouter.com/en/main/routers/router-provider
export default ({ router}) => (
    <RouterProvider router={router} />
);
