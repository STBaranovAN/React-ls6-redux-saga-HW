import { GET_ROOMS, GET_MESSAGES, POST_MESSAGE, API_URL } from "../constants/constants";

export function getRooms(){
	// console.log("From action GET_ROOMS");
	return {
		type: GET_ROOMS,
		payload: API_URL
	}
};

export function selectRoom(currentRoom){
	return {
		type: GET_MESSAGES,
		payload: currentRoom
	}
};

export function addMessage(text){
	return {
		type: POST_MESSAGE,
		payload: text
	}
};

