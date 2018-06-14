import { ALL_ROOMS } from "../constants/constants";

export default function(state = {allRooms: null, err: null}, action){
	console.log("From reducer", action);
	switch (action.type){
		case ALL_ROOMS:
		return Object.assign({}, state, action.payload);
	}
	return state
}