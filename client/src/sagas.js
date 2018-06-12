import { call, put, takeEvery, takeLatest, all, select } from "redux-saga/effects";
import axios from "axios";
import uuid from "uuid";
import { ALL_ROOMS, SEL_ROOM, ROOM_MSGS, GET_ROOMS, GET_MESSAGES, POST_MESSAGE, API_URL, API_URL_POST, ERR_EXIST, USER_ID } from "./constants/constants";
import { getCurrentRoom } from './selectors'

function* getAllRooms(action){ /// Worker Saga ///
	// console.log("From SAGA", action);
	try {
		let result = yield call( axios.get, action.payload );
		yield put({type: ALL_ROOMS, payload: result.data.chats});
	}
	catch(err){
		console.log(err);
		yield put({type: ERR_EXIST, payload: { where: "getRooms", text: "Server error!" }});
	}
}

function* getMessages(action){
	console.log("From SAGA", action);
	try {
		yield put({type: SEL_ROOM, payload: action.payload});
		let messages = yield call(axios.get, `http://localhost:6060/api/${action.payload.id}/messages`);
		yield put({type: ROOM_MSGS, payload: messages});
	}
	catch(err){
		console.log(err);
		yield put({type: ERR_EXIST, payload: { where: "selectRoom", text: "Server error!" }});
	}
}

function* postMessage(action){

	if(!action.payload)
	{
		yield put({type: ERR_EXIST, payload: { where: "addMessage", text: "Enter message text!" }});
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
		yield put({type: ROOM_MSGS, payload: messages});
	}
	catch(err){
		console.log(err);
		yield put({type: ERR_EXIST, payload: err});
		setError(ERR_EXIST, err);
	}
}

// function* loginUser(action){
// 	try {
// 		let token = yield call(axios.post, "http://localhost:6060/api/auth", JSON.stringify(action.payload), {"Content-Type":"application/json"});
// 		localStorage.sagaToken = JSON.stringify(token);
// 		yield put({type: "USER_TOKEN", payload: token});
// 	}
// 	catch(err){
// 		yield put({type: "USER_TOKEN", payload: null});
// 	}
// }

function* mySaga(){	/// Watcher Saga ///
	yield all([
		takeEvery(GET_ROOMS, getAllRooms),
		takeEvery(GET_MESSAGES, getMessages),
		takeEvery(POST_MESSAGE, postMessage)
		// takeLatest(LOGIN_USER, loginUser)
	]);
}

function* setError(type, errorObj){
	yield put({type: type, payload: errorObj});
}

export default mySaga;


