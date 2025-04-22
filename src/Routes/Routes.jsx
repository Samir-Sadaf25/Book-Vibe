import React from 'react';

import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/Error Page/ErrorPage';
import BookDetails from '../Pages/Book Details/BookDetails';
import ReadList from '../Pages/Read List/ReadList';

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
                path:'/ReadList',
                loader: () => fetch('booksData.json'),
                Component:ReadList
            },
            {
                path:'/BookDetails/:id',
                loader: () => fetch('/booksData.json'),
                Component:BookDetails,
            }
        ]
    },
]);