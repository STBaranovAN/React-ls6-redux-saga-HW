import uuid from "uuid";

export function getRooms(){
	// console.log("From action GET_ROOMS");
	return {
		type: "GET_ROOMS",
		payload: "http://localhost:6060/api"
	}
};

export function selectRoom(currentRoom){
	// console.log("From action GET_ROOMS");
	return {
		type: "GET_MESSAGES",
		payload: currentRoom
	}
};

export function addMessage(msgText){

	// return function(dispatch){

	// 	if(!msgText)
	// 	{
	// 		dispatch({
	// 			type: "ERR_EXIST",
	// 			payload: { where: "addMessage", text: "Enter message text!" }
	// 		});
	// 		return;
	// 	}

	// 	axios.post("http://localhost:6060/api/addmessage", {
	// 		text: msgText,
	// 		userId: 12345,
	// 		messageId: uuid.v4(),
	// 		roomId: currentRoom.id 
	// 		}).then( responseObj => {
	// 			dispatch(selectRoom(currentRoom));
	// 		}, err => {
	// 			dispatch({
	// 				type: "ERR_EXIST",
	// 				payload: { where: "addMessage", text: "Server error occured..." }
	// 			});
	// 		});
	// }
	return {
		type: "POST_MESSAGE",
		payload: msgText
	}
};

export function login(userData){
	return {
		type: "LOGIN_USER",
		payload: userData
	}
};

export function throwError(errorObj){
	return {
		type: "ERR_EXIST",
		payload: errorObj
	}
};

