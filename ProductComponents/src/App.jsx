import React from 'react';
import { RouterProvider } from 'react-router-dom';

// FIXME: When going to detail path, unable to see data
// https://reactrouter.com/en/main/routers/router-provider
// FIXME: The actual navigation is not working
export default ({ router }) => <RouterProvider router={router} />;
