export default function(state = null, action){
	console.log("From reducer", action);
	switch (action.type){
		case "ERR_EXIST":
		return action.payload
	}
	return state
}