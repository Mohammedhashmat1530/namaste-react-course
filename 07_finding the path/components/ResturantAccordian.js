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
          <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>

            <div class="menu-item">
              <div class="menu-item-details">
                <h3 class="item-title">Masala Idlii </h3>
                <p class="item-cost">₹130.00</p>
                <p class="item-desc">A quick stir fry of idlii, with spices and masala to make this wonderful snack or breakfast.| item can't be modified |</p>
              </div>
              <div class="menu-img-wrapper">
                <img class="menu-item-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/giyraixx6tuih5revpnl" alt="Masala Idlii " />
                <button class="add-btn"> ADD +</button>
              </div>
            </div>

            {/*
            {item.content.map((a) => (
              <h6>{a}</h6>
            ))}
            */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
