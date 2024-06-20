import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center bg-light m-0">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" />
      </Container>
    </footer>
  );
};

export default Footer;
