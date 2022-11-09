import React, { useEffect, useState } from "react";
import FlashCard from "./FlashCard";
import { ImFire } from "react-icons/im";
import "./style.css";
// import data from "./Data"


const HotDeals = () => {
    const [productItems ,setProductItems] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/products")
        .then(r => r.json())
        .then(data => setProductItems(data))
    },[])
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <i>
              <ImFire />
            </i>
            <h1>Hot Deals</h1>
          </div>
          {productItems.map((items)=> (
            <FlashCard key={items.id} items={items} />
          ))}
          {/* <FlashCard productItems={productItems}/> */}
        </div>
      </section>
    </>
  );
};

export default HotDeals;
