import { SEL_ROOM } from "../constants/constants";

export default function(state = null, action){
	console.log("From reducer", action);
	switch (action.type){
		case SEL_ROOM:
		return action.payload
	}
	return state
}