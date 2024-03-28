import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Body from './components/Body.js';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

// import { About } from './components/About.js';
import { Error } from './components/Error.js';
// import { Contact } from './components/Contact.js';
import { RestaurantMenu } from './components/RestaurantMenu.js';

const About = lazy(() => import('./components/About.js'));
const Contact = lazy(()=>import('./components/Contact.js'))

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
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={'Loading...'}>
                    <About />
                  </Suspense>
                ),
            },
            {
                path: '/contact',
                element: (<Suspense fallback={<h1>loading contact us page ....</h1>}> <Contact /></Suspense>)
            },
            {
                path: "/resturant/:id",
                element: <RestaurantMenu />
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

