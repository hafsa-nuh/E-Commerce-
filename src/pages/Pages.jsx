import React,{useEffect, useState} from "react";
import {Routes,Route } from "react-router-dom";
import Home from "../components/mainpage/Home";
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Checkout from '../components/checkout/Checkout'
// import { products_data } from "../data";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
// import HotDeals from "../components/deals/HotDeals";
import Cart from "../components/addtocart/Cart"
import Login from "../components/login/Login"
import Register from "../components/register/Register"
import ProductsDetails from "../components/products-details/ProductsDetails";

// making the path global
const url = "https://aqueous-castle-47869.herokuapp.com/products";
const Pages = () => {
  // moved the fetchin here
  const [productItems, setProductItems] = useState([]);
    // Below is sample data
  console.log(productItems);
  useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then((data) => setProductItems(data));
    }, []);

   

  const [cartItem,setCartItem]=useState([])

  const addToCart = (product) => {
    const productIsThere = cartItem.find((item) => item.id === product.id);
    if (productIsThere) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productIsThere, quantity: productIsThere.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productIsThere = cartItem.find((item) => item.id === product.id);
    if (productIsThere.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productIsThere, quantity: productIsThere.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Header cartItem={cartItem} />
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} productItems={productItems} />}
        />
        <Route
          path="cart"
          element={
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              key={productItems.id}
              {...productItems}
              setCartItem={setCartItem}
            />
          }
        />
        <Route
          path="product/:id"
          element={<ProductsDetails url={url} />}
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="checkout" element={<Checkout cartItems={cartItem} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
