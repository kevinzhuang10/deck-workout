import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { drawCard, markComplete } from "../../actions/workouts";
import Card from "./Card";

class WorkoutView extends Component {
	welcomeMessage = () => {
		return <h1>Draw your first card!</h1>;
	};

	render() {
		const {
			currentCard,
			deckId,
			drawCard,
			currentCardCompleted,
			markComplete,
		} = this.props;
		return (
			<Fragment>
				{currentCard ? (
					<Card card={currentCard} />
				) : (
					this.welcomeMessage()
				)}
				{currentCardCompleted || !currentCard ? (
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
				)}
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
