import React, { Component } from "react";
import Card from "react-bootstrap/Card";

const WorkoutCard = props => {
  const { suit, rank } = props.card;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>{`${mapping[suit]}: ${rank} reps`}</Card.Subtitle>
        <Card.Text>{`suit: ${suit}`}</Card.Text>
        <Card.Text>{`rank: ${rank}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const mapping = {
  spades: "push up",
  hearts: "squat",
  clubs: "sit up",
  diamonds: "burpee"
};

export default WorkoutCard;
