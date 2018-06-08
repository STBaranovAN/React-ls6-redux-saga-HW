import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";
import axios from "axios";
import { addMessage } from "./actions/actions";
//import {Component} from "react";


class PostMsg extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			text: ""
		}

		this.getText = this.getText.bind(this);
		// this.postNewMessage = this.postNewMessage.bind(this);
	}

	getText(e){
		this.setState({text: e.target.value});
	}

	// postNewMessage(e){

	// 	let msgText = this.state.msgText;
	// 	if(!msgText)
	// 	{
	// 		// alert("Enter message text!");
	// 		// this.setState({err: true});
	// 		return;
	// 	}

	// 	let currentRoom = this.props.currentRoom;

	// 	axios.post(confObj.api_url_post, {
	// 		text: msgText,
	// 		userId: confObj.userId,
	// 		messageId: uuid.v4(),
	// 		roomId: currentRoom.id 
	// 		}).then( responseObj => {
	// 			this.props.selectRoom(currentRoom)
	// 			// this.setState({
	// 			// 	msgText: "",
	// 			// 	err: false
	// 			// }); 
	// 		}, err => {
	// 		// this.setState({err: true}, () => {
	// 		// 	console.log(err);
	// 		// 	this.setState({
	// 		// 		err: true
	// 		// 	}); 
	// 		// })
	// 	});
	// }

	render() {

		let err = this.props.error;
		let currentRoom = this.props.currentRoom || {};

		return (
			<div className="container msgform">
				<div className="row">
					<div className="col">&nbsp;</div>
				</div>
				<div className="row" style={ {display: (err && err.where === "addMessage") ? "block" : "none"} }>
					<div className="col"><p className="error">err.text</p></div>
				</div>
				<div className="row">
					<div className="col">
						<textarea
							className="form-control" 
							value={this.state.text || ''}
							onChange={this.getText}
						>
						</textarea>
					</div>
				</div>
				<div className="row">
					<div className="col">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col text-right">
						<button className="btn btn-primary"
							onClick={ () => { this.props.addMessage(this.props.currentRoom, this.state.text) } }
						>
							New message
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col">&nbsp;</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {currentRoom: state.selectedRoom || null, error: state.errorObj}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addMessage: addMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostMsg);