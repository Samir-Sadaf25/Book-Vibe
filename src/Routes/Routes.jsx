import React from 'react';

import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/Error Page/ErrorPage';
import BookDetails from '../Pages/Book Details/BookDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement: ErrorPage,
        children:[
            {
                index:true,
                loader: () => fetch('booksData.json'),
                path: "/",
                Component:Home
            },
            {
                path:'/BookDetails/:id',
                Component:BookDetails,
            }
        ]
    },
]);