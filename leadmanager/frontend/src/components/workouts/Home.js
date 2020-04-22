import React, { Fragment, Component } from "react";
import StartWorkoutForm from "./StartWorkoutForm";
import WorkoutCompleted from "./WorkoutCompleted";
import WorkoutView from "./WorkoutView";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
	getContent = () => {
		const { deckId, workoutCompleted } = this.props;
		if (workoutCompleted) {
			return <WorkoutCompleted />;
		}

		return deckId ? <WorkoutView /> : <StartWorkoutForm />;
	};

	render() {
		return (
			<Fragment>
				<Row className="justify-content-md-center">
					<Col md="auto">{this.getContent()}</Col>
				</Row>
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
