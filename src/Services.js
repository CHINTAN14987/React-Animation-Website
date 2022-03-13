import React from "react";

import Col from "react-bootstrap/col";

import Row from "react-bootstrap/row";
import Container from "react-bootstrap/container";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <div className="servicesRow">
      <div className=" d-flex  justify-content-center align-items-center serviceTopContainer p-5">
        <div>
          <h3 className="servicesProvided"> OUR SERVICES</h3>
          <h2>
            Deliver Outsourced{" "}
            <span className="servicesSpan"> talent acquisition service's</span>
          </h2>
          <div>
            <span className="servicesView"> VIEW ALL SERVICES</span>
            <BsArrowRight />
          </div>
        </div>
        <div className="ServicesProvidedInnerContainer">
          <p>
            We offer to include employment services such as payroll and our
            priorities have always remained the same: to benefits
            administration, HR management, and assistance with a employer.
          </p>
        </div>
      </div>

      <Container>
        <Row classname="servicesContainer">
          <Col className=" softwareSummary " md={4}>
            <h3>Software Development</h3>
            <div className="paragraph">
              <p>
                Business Application Competition in global markets requires
                speed and speed at all levels. Businesses must respond quickly
                to meet customer needs, improve market speed, respond quickly to
                changing market conditions, and continue to seek to benefit from
                productivity and profitability. A sophisticated business
                application platform is essential to achieving these goals.
                Business application development software [...]
              </p>
            </div>
            <div className="summaryButton">
              <button className="myButton">
                <BsArrowRight className="summaryButtonIcon" />
              </button>
            </div>
          </Col>
          <Col className="d-flex flex-column services p-3" md={4}>
            <div>
              <img src="././images/image.jpg" alt="person" />
            </div>
            <div className="servicesInnerContainer">
              <h4>MANAGEMENT</h4>
              <h3>HR Consulting</h3>
              <p>
                HR consultants are provides broad menu Human Resource Service
              </p>
              <div className="summaryButtonTwo">
                <button className="myButtonTwo">
                  <BsArrowRight className="icon" />
                </button>
              </div>
            </div>
          </Col>
          <Col className="d-flex flex-column services p-3" md={4}>
            <div>
              <img src="././images/image.jpg" alt="person" />
            </div>
            <div className="servicesInnerContainer">
              <h4>PLANNING</h4>
              <h3>Improving Resource</h3>
              <p>
                Improving Resources provides broad menu Human Resource Service{" "}
              </p>
              <div className="summaryButtonThree">
                <button className="myButtonThree">
                  <BsArrowRight className="icon" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
