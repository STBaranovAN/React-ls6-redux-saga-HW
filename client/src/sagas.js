import { call, put, takeEvery, takeLatest, all, select } from "redux-saga/effects";
import axios from "axios";
import uuid from "uuid";
import { ALL_ROOMS, ROOM_MSGS, GET_ROOMS, GET_MESSAGES, POST_MESSAGE, API_URL, API_URL_POST, POST_MSG, USER_ID, server_error_msg, emty_text_error_msg } from "./constants/constants";
import { getCurrentRoom } from './selectors'

function* getAllRooms(action){ /// Worker Saga ///
	// console.log("From SAGA", action);
	try {
		let result = yield call( axios.get, action.payload );
		yield put({type: ALL_ROOMS, payload: { allRooms: result.data.chats, err: null }});
	}
	catch(err){
		console.log(err);
		yield put({type: ALL_ROOMS, payload: { allRooms: null, err: server_error_msg }});
	}
}

function* getMessages(action){
	console.log("From SAGA", action);
	try {
		let messages = yield call(axios.get, `http://localhost:6060/api/${action.payload.id}/messages`);
		yield put({type: ROOM_MSGS, payload: { selectedRoom: action.payload, roomMessages: messages.data, err: null }});
	}
	catch(err){
		console.log(err);
		yield put({type: ROOM_MSGS, payload: { selectedRoom: action.payload, roomMessages: null, err: server_error_msg }});
	}
}

//currentRoom, text

function* postMessage(action){

	if(!action.payload)
	{
		yield put({type: POST_MSG, payload: emty_text_error_msg});
		return;
	}

	const currentRoom = yield select(getCurrentRoom);

	try {
		yield call(axios.post, API_URL_POST, {
			text: action.payload,
			userId: USER_ID,
			messageId: uuid.v4(),
			roomId: currentRoom.id
			});
		let messages = yield call(axios.get, `http://localhost:6060/api/${currentRoom.id}/messages`);
		yield put({type: ROOM_MSGS, payload: { selectedRoom: currentRoom, roomMessages: messages.data, err: null }});
	}
	catch(err){
		console.log(err);
		yield put({type: POST_MSG, payload: server_error_msg});
	}
}

function* mySaga(){	/// Watcher Saga ///
	yield all([
		takeEvery(GET_ROOMS, getAllRooms),
		takeEvery(GET_MESSAGES, getMessages),
		takeEvery(POST_MESSAGE, postMessage)
	]);
}

export default mySaga;


