import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { createDeck } from "../../actions/workouts";
import { connect } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";

class StartWorkoutForm extends Component {
	render() {
		return (
			<Fragment>
				<Jumbotron>
					<h1>Welcome to Deck</h1>
					<p>
						This will likely be the best workout you'll ever have in
						your life.
					</p>
					<p>So you're welcome.</p>
					<p>
						<Button
							onClick={this.props.createDeck.bind(
								this,
								this.props.user
							)}
						>
							Start Workout
						</Button>
					</p>
				</Jumbotron>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user.id,
});

export default connect(mapStateToProps, { createDeck })(StartWorkoutForm);
