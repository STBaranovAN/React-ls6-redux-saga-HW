import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { no_msgs_msg, choose_room_msg } from "./constants/constants";
import { Wrapper } from "./wrapper";

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
						<h2>{err}</h2>
					</Wrapper>
			)
		}
		
		if(roomMessages.length > 0) {
			return (
				<Wrapper>
					<h2>{roomName}</h2>
					<div className="text-right">
						{roomMessages.map((item, index) => {
							return <p key={index}>{item.text}</p>
						})}
					</div>
				</Wrapper>
			)
		} else {
			return (<Wrapper>
						<h2>{no_msgs_msg}</h2>
					</Wrapper>
			)
		}
	}
}

function mapStateToProps(state){
	return {msgs: state.msgs}
}

export default connect(mapStateToProps)(Messages);

		