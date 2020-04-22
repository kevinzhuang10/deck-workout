import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { startOver } from "../../actions/workouts";
import Jumbotron from "react-bootstrap/Jumbotron";

class WorkoutCompleted extends Component {
	render() {
		return (
			<Fragment>
				<Jumbotron>
					<h1>Congrats on finishing!</h1>
					<p>See you next time!</p>
					<p>
						<Button
							{...{
								onClick: this.props.startOver.bind(this),
							}}
						>
							Start Again
						</Button>
					</p>
				</Jumbotron>
			</Fragment>
		);
	}
}

export default connect(null, { startOver })(WorkoutCompleted);
