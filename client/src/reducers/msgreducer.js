import { ROOM_MSGS } from "../constants/constants";

export default function(state = null, action){
	console.log("From reducer", action);
	switch (action.type){
		case ROOM_MSGS:
		return action.payload
	}
	return state
}