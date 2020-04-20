import React, { Fragment, Component } from "react";
import StartWorkoutForm from "./StartWorkoutForm";
import WorkoutCompleted from "./WorkoutCompleted";
import WorkoutView from "./WorkoutView";
import { connect } from "react-redux";

class Home extends Component {
	render() {
		const { deckId, workoutCompleted } = this.props;

		if (workoutCompleted) {
			return <WorkoutCompleted />;
		}

		return (
			<Fragment>
				{deckId ? <WorkoutView /> : <StartWorkoutForm />}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	deckId: state.workouts.deckId,
	currentCard: state.workouts.currentCard,
	currentCardCompleted: state.workouts.currentCardCompleted,
	workoutCompleted: state.workouts.workoutCompleted,
});

export default connect(mapStateToProps, null)(Home);
