import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <Suspense>
        <main>
            <Outlet />
        </main>
    </Suspense>
);

export { Layout };
