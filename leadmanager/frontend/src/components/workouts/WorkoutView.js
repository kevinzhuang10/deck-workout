import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { drawCard, markComplete } from "../../actions/workouts";
import Card from "./Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WorkoutView extends Component {
	welcomeMessage = () => {
		return <h1>Draw your first card!</h1>;
	};

	renderCard = () => {
		const { currentCard, currentCardCompleted } = this.props;

		return currentCard ? (
			<Card
				{...{
					card: currentCard,
					currentCardCompleted,
				}}
			/>
		) : (
			this.welcomeMessage()
		);
	};

	renderButton = () => {
		const {
			currentCard,
			deckId,
			drawCard,
			currentCardCompleted,
			markComplete,
		} = this.props;

		return currentCardCompleted || !currentCard ? (
			<Button
				{...{
					onClick: drawCard.bind(this, deckId),
				}}
			>
				Draw Card
			</Button>
		) : (
			<Button
				{...{
					onClick: markComplete.bind(this, currentCard.id),
				}}
			>
				Done
			</Button>
		);
	};

	render() {
		return (
			<Fragment>
				<Jumbotron style={{ width: "60rem" }}>
					<Row className="justify-content-md-center">
						<Col md="auto">
							{this.renderCard()}
							{this.renderButton()}
						</Col>
					</Row>
				</Jumbotron>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	currentCard: state.workouts.currentCard,
	deckId: state.workouts.deckId,
	currentCardCompleted: state.workouts.currentCardCompleted,
});

export default connect(mapStateToProps, { drawCard, markComplete })(
	WorkoutView
);
