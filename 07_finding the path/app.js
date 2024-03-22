import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Body from './components/Body.js';

const AppLayout = () => {
    return (
        <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<AppLayout />);

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

