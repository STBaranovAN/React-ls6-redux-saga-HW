import React from "react";
import { connect } from "react-redux";
import { no_msgs_msg, choose_room_msg } from "./constants/constants";

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

		let err = this.props.msgs.err;
		let roomName = this.props.msgs.selectedRoom && this.props.msgs.selectedRoom.name || choose_room_msg;
		let roomMessages = this.props.msgs.roomMessages || [];

		if(err) {
			return (<div className="messages">
						<h2>{err}</h2>
					</div>
			)
		}
		
		if(roomMessages.length > 0) {
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
		} else {
			return (<div className="messages">
						<h2>{no_msgs_msg}</h2>
					</div>
			)
		}
	}
}

function mapStateToProps(state){
	return {msgs: state.msgs}
}

export default connect(mapStateToProps)(Messages);

		