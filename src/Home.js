import React from "react";
import Section from "./Secition";
import styled from "styled-components";
import "./home.css";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="./images/model-s.jpg"
        leftbtntext="Custom order"
        rightbtntext="Existing inventory"
      ></Section>
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="./images/model-s.jpg"
        leftbtntext="Custom order"
        rightbtntext="Existing inventory"
      ></Section>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="./images/model-s.jpg"
        leftbtntext="Custom order"
        rightbtntext="Existing inventory"
      ></Section>
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="./images/model-s.jpg"
        leftbtntext="Custom order"
        rightbtntext="Existing inventory"
      ></Section>
      <Section
        title="Accessories"
        description="Make Your Tesla Better"
        backgroundImg="./images/model-s.jpg"
        leftbtntext="Custom order"
      ></Section>
    </Container>
  );
}

export default Home;
const Container = styled.div``;
