import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainNavigation } from './MainNavigation';

const Layout = () => (
    <Suspense>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </Suspense>
);

export { Layout };
