import React,{useEffect,useState} from 'react';
import { RestaurantMenuTitle } from './RestaurantMenuTitle';
import Accordion from './ResturantAccordian'
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"

export const RestaurantMenu = () => {
    const {id}=useParams();
    const [ResInfo,setResInfo] = useState('');
    const [AccordianData1,setAccordianData1] = useState('');
    const [AccordianData2,setAccordianData2] = useState('');
    const [AccordianData3,setAccordianData3] = useState('');
    const [AccordianData4,setAccordianData4] = useState('');
    const [AccordianData5,setAccordianData5] = useState('');
   
    useEffect(()=>{
        fetchdata();
        
    },[])

    const fetchdata = async () =>{
       
        const url =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7440744&lng=83.24558979999999&restaurantId=${id}`;
        const response= await fetch(url);
        const json = await response.json();
        setResInfo(json.data.cards[0].card.card.info)
        setAccordianData1(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card)
        setAccordianData2(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card)
        setAccordianData3(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card)
        setAccordianData4(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card)
        setAccordianData5(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card)
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR)
    }

    

    const accordionItems = [
        { title: AccordianData1?.title, content: AccordianData1?.itemCards },
        { title: AccordianData2?.title, content: AccordianData2?.itemCards },
        { title: AccordianData3?.title, content: AccordianData3?.itemCards },
        { title: AccordianData4?.title, content: AccordianData4?.itemCards },
        { title: AccordianData5?.title, content: AccordianData5?.itemCards },
    
    ];

    if(ResInfo ==="") return <Shimmer />

    return (<>
        <RestaurantMenuTitle  resDetails={ResInfo}  />

        <h1>Accordion Example</h1>
        <div className='acc-list'>
            
            <Accordion items={accordionItems}/>
        </div>


    </>
    )
}


