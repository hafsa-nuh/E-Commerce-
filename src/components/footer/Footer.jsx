import React from "react";
import "./Footer.css";

function Footer() {
  return (

<div className="main-footer">
<div>
  <div className="row">
    {/* Column1 */}
    <div className="column">
      <h4>Icon  Tech</h4>
      <h1 className="list">
        <li>+254 711 234567</li>
        <li>Nairobi, Kenya</li>
        <li>Moi Avenue</li>
      </h1>
    </div>
    {/* Column2 */}
    <div className="column">
      <h4>Lorem</h4>
      <ui className="list">
        <li>Ipsum</li>
        <li>Dor</li>
        <li>Sit emet</li>
      </ui>
    </div>
    {/* Column3 */}
    <div className="column">
      <h4>Find Us</h4>
      <ui className="list">
        <li>Branches</li>
        <li>Mombasa</li>
        <li>Kisumu</li>
      </ui>
    </div>
  </div>
  <hr />
  <div className="row">
    <p className="col-sm">
      &copy;{new Date().getFullYear()} Icon Tech | All rights reserved |
      Terms Of Service | Privacy
    </p>
  </div>
</div>
</div>
  );
}
export default Footer;
