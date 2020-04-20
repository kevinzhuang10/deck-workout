import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { startOver } from "../../actions/workouts";

class WorkoutCompleted extends Component {
	render() {
		return (
			<Fragment>
				<h1>Congratulations on finishing!</h1>
				<Button
					{...{
						onClick: this.props.startOver.bind(this),
					}}
				>
					Start Again
				</Button>
			</Fragment>
		);
	}
}

export default connect(null, { startOver })(WorkoutCompleted);
