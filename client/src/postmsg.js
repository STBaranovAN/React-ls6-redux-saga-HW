import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMessage } from "./actions/actions";
import { btn_new_msg, tf_new_msg } from "./constants/constants";
//import {Component} from "react";


class PostMsg extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			text: ""
		}

		this.getText = this.getText.bind(this);
	}

	getText(e){
		this.setState({text: e.target.value});
	}

	render() {

		let err = this.props.err;

		return (
			<div className="container msgform">
				<div className="row">
					<div className="col">&nbsp;</div>
				</div>
				<div className="row" style={ {display: err ? "block" : "none"} }>
					<div className="col"><p className="error">{err}</p></div>
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
							onClick={ () => {
								this.props.addMessage(this.state.text) } }
						>
							{btn_new_msg}
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
	return {currentRoom: state.msgs.selectedRoom || null, err: state.postmsg.err}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addMessage: addMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostMsg);