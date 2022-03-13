import React from "react";
import Col from "react-bootstrap/col";
import { BsArrowRight } from "react-icons/bs";
import Row from "react-bootstrap/row";
import Container from "react-bootstrap/container";

const HomePage = () => {
  return (
    <div className="containerfluid">
      <Container className="cardContainer">
        <Row className="cardsRow">
          <Col className="cards card1 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src="././images/cardImage.png" alt="card" />
                <span className="cardNumber">01</span>
              </div>
              <div className="cardHeading">
                <h3>Recruiting Service</h3>
              </div>
              <div className="cardContent">
                <p>
                  We provide the best and suaitable employees with a technical
                  filter
                </p>
              </div>
              <div className="btn-container">
                <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="cards card2 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src="././images/CardImage2.png" alt="card" />
                <span className="cardNumber">02</span>
              </div>
              <div className="cardHeading">
                <h3>Leadership Training</h3>
              </div>
              <div className="cardContent">
                <p>
                  We find out the people and cultivate a leadership quality in
                  them.
                </p>
              </div>
              <div className="btn-container">
                <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="cards card3 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src="././images/cardImage3.png" alt="card" />
                <span className="cardNumber">03</span>
              </div>
              <div className="cardHeading">
                <h3>Talent Acquisition</h3>
              </div>
              <div className="cardContent">
                <p>We acquire the best manpower for your business</p>
              </div>
              <div className="btn-container">
                <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Row className="cardSummary">
            <Col className="d-flex flex-column justify-content-between">
              <div className="blockQuote">
                Train people quickly well with e-business.So they highly
                efficient manufactured products.
              </div>
              <cite>-Richard Branson</cite>
            </Col>
            <Col>
              <p className="QuoteParagraph">
                Our consultants believe in the value that you manage your
                regulatory compliance, policies, and procedures. We have
                specialist for managed employee performance,comparable to
                internal HR function.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
