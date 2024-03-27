import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Body from './components/Body.js';
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';

import { About } from './components/About.js';
import { Error } from './components/Error.js';
import { Contact } from './components/Contact.js';
import { RestaurantMenu } from './components/RestaurantMenu.js';

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element: <Body />,
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:"/resturant/:id",
                element:<RestaurantMenu />
            }
            
        ]
      
    },
   
    
])


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<RouterProvider router={router} />);

/*

header
    -logo
    -nav-items
body
    -Search
    -Resturant container
        -resturant card
            -img
            -name of res,rating,cusine,delivery time
footer
    -copyright
    -links
    -address
    -contact
    
    */

