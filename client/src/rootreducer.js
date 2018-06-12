import { combineReducers } from "redux";
import allRoomsReducer from "./reducers/allroomsreducer";
import selRoomReducer from "./reducers/selroomreducer";
import msgReducer from "./reducers/msgreducer";
import errorReducer from "./reducers/errorreducer";
// import tokenReducer from "./reducers/tokenreducer";
//import authReducer from "./authreducer";

let rootReducer = combineReducers({
	allRooms: allRoomsReducer,
	selectedRoom: selRoomReducer,
	roomMessages: msgReducer,
	errorObj: errorReducer
	// token: tokenReducer

	// rooms: {
	// 	allRooms: [],
	// 	selectedRoom: {},
	// 	roomMessages: []
	// }

	// Object.assign(rooms, {roomMessages: [1,3,4]})
	// {...rooms, {roomMessages: []}}

	// auth: {
	// 	logged: true,
	// 	err: null
	// }
});

export default rootReducer;