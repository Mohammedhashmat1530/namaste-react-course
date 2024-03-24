import React from 'react';
import { RestaurantMenuTitle } from './RestaurantMenuTitle';
import Accordion from './ResturantAccordian'

export const RestaurantMenu = () => {
    const accordionItems = [
        { title: 'Item 1', content: ['Content for Item 2', 'Content for Item 2', 'Content for Item 2', 'Content for Item 2'] },
        { title: 'Item 2', content: ['Content for Item 2', 'Content for Item 2', 'Content for Item 2', 'Content for Item 2'] },
        { title: 'Item 3', content: ['Content for Item 2', 'Content for Item 2', 'Content for Item 2', 'Content for Item 2'] },
    ];

    return (<>
        <RestaurantMenuTitle />

        <h1>Accordion Example</h1>
        <div className='acc-list'>
            
            <Accordion items={accordionItems} />
        </div>


    </>
    )
}


