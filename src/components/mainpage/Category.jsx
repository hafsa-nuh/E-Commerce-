import React, {useState} from "react";
import {data} from "../../data"

const Categories = () => {
  const [isHovering, setIsHovering] = useState(false)
   const handleMouseOver = () => {
     setIsHovering(true);
   };

   const handleMouseOut = () => {
     setIsHovering(false);
   };

  return (
    <>
      <div
        className="category"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {data.map((value, id) => {
          return (
            <div className="box f_flex" key={id}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
              {isHovering && (
                <ul className="hide" key={id} >
                  <li>{value.category.type1}</li>
                  {/* <li>{value.category.type2}</li>
                  <li>{value.category.type3}</li>
                  <li>{value.category.type4}</li>
                  <li>{value.category.type5}</li>
                  <li>{value.category.type6}</li>
                  <li>{value.category.type7}</li>
                  <li>{value.category.type8}</li>
                  <li>{value.category.type9}</li>
                  <li>{value.category.type10}</li> */}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
