import { ROOM_MSGS } from "../constants/constants";

export default function(state = { selectedRoom: null, roomMessages: null, err: null }, action){
	console.log("From reducer", action);
	switch (action.type){
		case ROOM_MSGS:
			return Object.assign({}, state, action.payload);
	}
	return state;
}