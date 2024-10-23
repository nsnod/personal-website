import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        {}
        <img className="bg-light m-0 mx-auto d-block" src={data.companylogo} alt={data.role} style={{ maxWidth: '400px' }} />
        <p className="lead mt-3">
          {data.role}
          <br />
          {data.date}
        </p>
        {}
        <p className="text-muted">
          {data.message}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;