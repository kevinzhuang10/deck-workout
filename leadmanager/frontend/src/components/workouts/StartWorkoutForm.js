import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import { createDeck } from '../../actions/workouts';
import { connect } from 'react-redux';

class StartWorkoutForm extends Component {
  render() {
    return (
      <Fragment>
        <Button
        onClick={this.props.createDeck.bind(this, this.props.user)}
        >Start Workout</Button>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user.id
})

export default connect(mapStateToProps, { createDeck })(StartWorkoutForm);
