import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import {
	GET_LEADS,
	DELETE_LEAD,
	ADD_LEAD,
	CREATE_DECK,
	DRAW_CARD,
  MARK_COMPLETE,
  START_OVER,
} from "./types";
import { tokenConfig } from "./auth";

export const createDeck = (userId) => (dispatch, getState) => {
	const body = {
		user: userId,
		active: true,
	};

	axios
		.post("/api/workouts/deck", body, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: CREATE_DECK,
				payload: {
					deckId: res.data.id,
				},
			});
		})
		.catch((err) => {
			return dispatch(
				returnErrors(err.response.data, err.response.status)
			);
		});
};

export const drawCard = (deckId) => (dispatch, getState) => {
	axios
		.get(`/api/workouts/card/random?deck=${deckId}`, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: DRAW_CARD,
				payload: res.data,
			});
		})
		.catch((err) => console.log("error here", err));
};

export const markComplete = (cardId) => (dispatch, getState) => {
  const body = {
    active: false
  }

	axios
		.patch(`/api/workouts/card/${cardId}`, body, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: MARK_COMPLETE,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};


export const startOver = () => (dispatch) => {
  dispatch({
    type: START_OVER
  })
}