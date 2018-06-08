export default function(state = null, action){
	console.log("From reducer", action);
	switch (action.type){
		case "ALL_ROOMS":
		return action.payload
	}
	return state
}