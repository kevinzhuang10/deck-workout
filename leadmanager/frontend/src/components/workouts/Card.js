import React, { Component } from "react";
import Card from "react-bootstrap/Card";

const WorkoutCard = (props) => {
	const { suit, rank } = props.card;
	return (
		<Card style={{ width: "20rem" }} border={"light"}>
			<Card.Img variant="top" src={getCardImageFileName(suit, rank)} />
			<Card.Body>
				<Card.Title>{`${mapping[suit]}: ${rank} reps`}</Card.Title>
			</Card.Body>
		</Card>
	);
};

const mapping = {
	spades: "sit up",
	hearts: "squat",
	clubs: "push up",
	diamonds: "burpee",
};

const rankMapping = {
	1: "A",
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	11: "J",
	12: "Q",
	13: "K",
};
const suitMapping = {
	clubs: "C",
	diamonds: "D",
	hearts: "H",
	spades: "S",
};

const getCardImageFileName = (suit, rank) => {
	return `static/PNG/${rankMapping[rank]}${suitMapping[suit]}.png`;
};

export default WorkoutCard;
