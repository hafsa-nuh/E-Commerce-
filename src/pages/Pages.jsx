import React,{useState} from "react";
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


const Pages = () => {
  const [products,setProducts]=useState([])
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
  


//   const [cartModal,setCartModal]=useState(false)
 
//   const onAdd = (product) =>{
//     const exist =cartItems.find(x => x.id === product.id);
//     if(exist){
//       setCartItems(cartItems.map(x => x.id === product.id ? {...exist, price: exist.price *2} : x))
//     }else{
//       setCartItems([...cartItems,{...product}])
//     }

//   }
//   const onRemove = (product) =>{
//     const exist =cartItems.find(x => x.id === product.id);
//     const original=products.find(x=>x.id === product.id)
//     if(exist.price <= original.price){
//       setCartItems(cartItems.filter(x => x.id !== product.id))
//     }else{
//       setCartItems(cartItems.map(x => x.id === product.id ? {...exist, price: exist.price /2} : x))
//     }
   
//   }

//   const toggleCartModal = (value) => {
//     if(!value){
//       setCartModal(true)
//     }else{
//       setCartModal(false)
//     }
//   }
// function getProducts(products){
//   setProducts(products)
// }

// console.log(`From Page${products}`)

  return (
    <>
      <Header cartItem={cartItem} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="cart"
          element={
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          }
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
