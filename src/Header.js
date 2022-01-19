import React, { useState } from "react";
import styled from "styled-components";
// import "./home.css";
import "./header.css";

function Header() {
  const [burgerstatus, setburgerstatus] = useState(false);
  return (
    <Contner className="contner">
      <Img className="img"></Img>
      <Menu className="menu">
        <a href="">Model S</a>
        <a href="">Model Y</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Cyber Truck</a>
      </Menu>
      <Rmenu className="rmenu">
        <a href="">SHOP</a>
        <a href="">TESLA ACCOUNT</a>
        <Rimg className="rimg" onClick={() => setburgerstatus(true)}></Rimg>
      </Rmenu>
      <Burgernav className="bnav" show={burgerstatus}>
        <div className="bbimg">
          <div className="bimg" onClick={() => setburgerstatus(false)}></div>
        </div>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model Y</li>
        <li>Model X</li>
        <li>Used Inventory</li>
        <li>Trade-in</li>
        <li>CyberTruck</li>
        <li>Existing Inventory</li>
        <li>Roadaster</li>
      </Burgernav>
    </Contner>
  );
}

export default Header;

const Contner = styled.div``;
const Menu = styled.div`
  @media (max-width: 997px) {
    display: none;
  }
`;
const Img = styled.div``;
const Rmenu = styled.div`
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const Rimg = styled.div``;
const Burgernav = styled.div`
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
`;
// const BImg = styled.div``;
