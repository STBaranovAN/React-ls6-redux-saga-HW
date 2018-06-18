import React from "react";
import { connect } from "react-redux";
import { no_msgs_msg, choose_room_msg } from "./constants/constants";
import { Wrapper, Title, SimpleText } from "./components";

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
			return (<Wrapper>
						<Title>{err}</Title>
					</Wrapper>
			)
		}
		
		if(roomMessages.length > 0) {
			return (
				<Wrapper>
					<Title>{roomName}</Title>
					<div className="text-right">
						{roomMessages.map((item, index) => {
							return <b><SimpleText key={index}>{item.text}</SimpleText></b>
						})}
					</div>
				</Wrapper>
			)
		} else {
			return (<Wrapper>
						<Title>{no_msgs_msg}</Title>
					</Wrapper>
			)
		}
	}
}

function mapStateToProps(state){
	return {msgs: state.msgs}
}

export default connect(mapStateToProps)(Messages);

		