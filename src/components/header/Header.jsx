import React from 'react'
import Nav from './Nav'
import Search from './Search'
import "./header.css"

const Header = ({ cartItem,productItems}) => {
  return (
    <>
      <Search productItems={productItems} cartItem={cartItem} />
      <Nav />
    </>
  );
};

export default Header