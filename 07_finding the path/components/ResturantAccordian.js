import React, { useState } from 'react';


const Accordion = ({ items }) => {
  console.log("eheh")
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => onItemClick(index)}>
            {item.title}
          </div>


        
             {item.content?.map((i) => (
              
            
            
          <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
           
            <div class="menu-item">
              <div class="menu-item-details">
                <h3 class="item-title">{i.card.info.name}</h3>
                <p class="item-cost">₹{(i.card.info.price)/100 ||  (i.card.info.defaultPrice)/100}</p>
                <p class="item-desc">{i.card.info.description}</p>
              </div>
              <div class="menu-img-wrapper">
                <img class="menu-item-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${i.card.info.imageId}`}/>
                <button class="add-btn"> ADD +</button>
              </div>
            </div>


          </div>
          ))} 

          
        </div>
      )) }
    </div>
  );
};

export default Accordion;
