import React from "react";
import { connect } from "react-redux";

class Messages extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		}
	}

	componentDidUpdate(){
		// console.log("From DID UPDATE", this.props.roomMessages);
	}

	render() {

		let err = this.props.error;
		let roomName = this.props.currentRoomName || "Choose a room";
		let roomMessages = this.props.allMessages || [];

		if(err && err.where === "selectRoom") {
			return (<div className="messages">
						<h2>{err.text}</h2>
					</div>
			)
		}
		
		if(roomMessages.length == 0) {
			return (<div className="messages">
						<h2>No messages in room...</h2>
					</div>
			)
		}

		return (
			<div className="messages">
				<h2>{roomName}</h2>
				<div className="text-right">
					{roomMessages.map((item, index) => {
						return <p key={index}>{item.text}</p>
					})}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {allMessages: state.roomMessages, currentRoomName: (state.selectedRoom && state.selectedRoom.name) || null, error: state.errorObj}
}

export default connect(mapStateToProps)(Messages);

		