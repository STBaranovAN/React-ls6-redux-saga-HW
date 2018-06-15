import { POST_MSG } from "../constants/constants";

export default function(state = { err: null }, action){
	console.log("From reducer", action);
	switch (action.type){
		case POST_MSG:
		return {
			err: action.payload
		}
	}
	return state;
}