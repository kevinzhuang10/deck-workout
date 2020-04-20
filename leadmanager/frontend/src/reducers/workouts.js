import {
	CREATE_DECK,
	DRAW_CARD,
	MARK_COMPLETE,
	START_OVER,
} from "../actions/types.js";

const initialState = {
	deckId: null,
	currentCard: null,
	currentCardCompleted: false,
	workoutCompleted: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CREATE_DECK:
			return {
				...state,
				deckId: action.payload.deckId,
				currentCard: null,
				currentCardCompleted: false,
				workoutCompleted: false,
			};
		case DRAW_CARD:
			if (!action.payload) {
				return {
					...state,
					deckId: null,
					currentCard: null,
					currentCardCompleted: false,
					workoutCompleted: true,
				};
			}
			return {
				...state,
				currentCard: action.payload,
				currentCardCompleted: false,
			};
		case MARK_COMPLETE:
			return {
				...state,
				currentCardCompleted: true,
			};
		case START_OVER:
			return { ...initialState };
		default:
			return state;
	}
}
