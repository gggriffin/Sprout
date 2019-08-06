import React from 'react';
import Card from 'react-bootstrap/Card';
import './ListCard.css';

function ListCard() {
  return (
    <Card className="crd">
      <Card.Body className="crdBod">
        <Card.Title className="crdTtl">Fav 1</Card.Title>
        <Card.Text className="crdTxt">
          This is a random sentence that simulates the appearance of a description while being a description itself.
        </Card.Text>
        <Card.Link className="crdLnk" href="#">
          <i className="fas fa-link" id="lnkIcn" />
          Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ListCard;