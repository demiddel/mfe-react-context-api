import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorRoute = () => {
    const error = useRouteError();

    console.log('ErrorRoute: error: ', error);

    return (
        <>
            <h1>Error Route</h1>
            <div>Error: {error.message}</div>
        </>
    );
};

export { ErrorRoute };
