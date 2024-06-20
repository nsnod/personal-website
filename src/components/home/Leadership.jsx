import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="bg-light m-0"
    >
      <style>
        {`
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: invert(1);
          }
          .carousel-item img {
            width: 100%;
            max-width: 400px;
            height: auto;
            margin: 0 auto;
          }
        `}
      </style>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead">{message}</p>
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block"
                    src={value.img}
                    alt="First slide"
                  />
                  <Carousel.Caption style={{
                    color: "#000000",
                    transform: "translateY(90px)",
                  }}>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
