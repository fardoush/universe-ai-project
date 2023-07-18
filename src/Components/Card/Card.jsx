import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';


const Card = () => {
    //data load & data State a rakhbo
    const [items, setItems] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(res => res.json())
        //object hole data.data.tools use korte hobe
        //  .then(data => console.log("Data:",data.data.tools))
        .then(data => setItems(data.data.tools))
    },[items])
    return (
     <>
     <div className="grid grid-rows-4 grid-flow-col gap-6">
        {/* <h3>Product: {items.length}</h3> */}

        {/* //sudu 6 ta data dekhanor jonno  */}
      {
        items.slice(0,showAll ? 12 : 6).map(item => <Products
        key={item.id}
        item={item}></Products>)
      }
     </div>


 
     
     </>
    );
};

export default Card;