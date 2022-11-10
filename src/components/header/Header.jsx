import React from 'react'
import Nav from './Nav'
import Search from './Search'
import "./header.css"

const Header = (props) => {
  return <>
  <Search toggleCartModal={props.toggleCartModal} cartModal={props.cartModal}  cartItems={props.cartItems} numberOfItemsInCart={props.numberOfItemsInCart} onAdd={props.onAdd} onRemove={props.onRemove}/>
  <Nav cartModal={props.cartModal} cartItems={props.cartItems} onAdd={props.onAdd} onRemove={props.onRemove}/>
  </>
}

export default Header