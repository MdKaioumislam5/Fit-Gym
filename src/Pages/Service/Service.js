import React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const ServiceDetail = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();

  const navigateServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="container">
      <div id="service" className="service ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>$ {price}</Card.Text>
            <Button variant="primary" onClick={() => navigateServiceDetail(id)}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetail;