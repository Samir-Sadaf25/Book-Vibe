import React from 'react';

import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/Error Page/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement: ErrorPage,
        children:[
            {
                index:true,
                path: "/",
                Component:Home
            },
        ]
    },
]);