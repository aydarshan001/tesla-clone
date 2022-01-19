import React from "react";
import styled from "styled-components";
import "./home.css";

function Secition(props) {
  return (
    <Wrap className="wrapcc" bgimg={props.backgroundImg}>
      <ItemText className="itemtext">
        <h1> {props.title} </h1> <p> {props.description}</p>{" "}
      </ItemText>{" "}
      <Biggroo>
        <ButtonGroup className="btngr">
          <LeftButton className="leftbtn"> {props.leftbtntext} </LeftButton>{" "}
          <RightButton className="rightbtn"> {props.rightbtntext} </RightButton>{" "}
        </ButtonGroup>{" "}
        <DownArro className="dwarro">
          <div className="dwarroimg"> </div>{" "}
        </DownArro>{" "}
      </Biggroo>{" "}
    </Wrap>
  );
}

export default Secition;

const Wrap = styled.div``;
const ItemText = styled.div``;
const ButtonGroup = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div``;
const RightButton = styled.div``;
const DownArro = styled.div`
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Biggroo = styled.div``;
