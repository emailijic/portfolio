import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const Home = () => {
  return (
    <div className="mt-5 pt-3">
      <P>
        I build mobile and web applications. <br />
        <span style={{ fontStyle: "italic" }}>
          "Chase your passion, not your pension."
        </span>
        <span style={{ fontWeight: "bold" }}> Denis-Waitley</span>
      </P>
    </div>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 95px;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #2a2a72 0%, #009ffd 45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 55px;
  }
`;

const P = styled.p`
  text-align: justify;
  font-size: 18px;
`;
