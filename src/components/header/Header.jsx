import React from 'react'
import Nav from './Nav'
import Search from './Search'
import "./header.css"

const Header = ({ cartItem }) => {
  return (
    <>
      <Search cartItem={cartItem} />
      <Nav />
    </>
  );
};

export default Header