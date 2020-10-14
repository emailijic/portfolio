import React from "react";
import { Col } from "react-bootstrap";
import { Title } from "../components";
import Garment from "../assets/others/garment.svg";
import styled from "styled-components";

const StayTuned = () => {
  return (
    <Container>
      <Col className="m-0 p-0">
        <Title title="Contact" icon={Garment} />
        <Panel>
          <p
            className="col-md-5 col-8 mb-5"
            style={{ textAlign: "center", fontWeight: 600 }}
          >
            I am open to any new opportunities.
          </p>
          <p
            className="col-md-5 col-8 mb-5"
            style={{ textAlign: "center", fontWeight: 600 }}
          >
            Email: emailijic@gmail.com
          </p>
        </Panel>
      </Col>
    </Container>
  );
};

export default StayTuned;

const Container = styled.div`
  @media (max-width: 992px) {
    margin-top: 12.5rem;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
