import React, {useContext,useState} from "react";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link,NavLink } from "react-router-dom";
import { UserContext } from "../../services/UserContext";

const Search = ({ cartItem,productItems }) => {

  const [query, setQuery] = useState("")
  const {user} =useContext(UserContext)

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo">
            <h1>
              Tech <span> Shop</span>
            </h1>
          </div>
          <div className="search-box f_flex">
            <FaSearch className="icons" />
            <input 
            type="text" 
            placeholder="search and hit enter..." 
            onChange={event => setQuery(event.target.value)}
            />
            <span> All Category </span>
          </div>
          <div className="icon f_flex width">
            <div>
             
            <Link to="/login">
              {!user.email ? <FaUserAlt className="icons icon-circle" /> 
              :    <span><small>{user.email}</small></span>
              }
            </Link>
            
            </div>
            <div className="cart">
              <Link to="cart">
                <FaShoppingCart className="icons icon-circle" />
                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
        <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',zIndex:'100'}}>
          <ul style={{zIndex:'5'}}>
            {productItems.filter(product => {
              if (query === "") {return null
              } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
                //returns filtered array
                return product;
              }
            }).map((items, id) => {
              return (
                <div className="box">
                  <div className="product mtop" key={id}>
                    <div className="product-details">
                      {/**start of products details div */}
                      <div style={{display:'flex'}}>
                        <img style={{width:'250px',height:'200px'}} src={items.image_url} alt={items.name}/>
                        <div className="paragra">
                          <p>{items.description}</p>
                        </div>
                        <div className="price">
                          <h4>Ksh {items.price}.00 </h4>
                        </div>
                        <NavLink to={`product/${items.id}`} ><button onClick={()=>{setQuery("")}} className="btn">Buy Now</button></NavLink>
                      </div>
                    </div>{/**end of products details div */}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Search;
