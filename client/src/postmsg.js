import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { addMessage } from "./actions/actions";
import { btn_new_msg, tf_new_msg } from "./constants/constants";
import { Wrapper } from "./wrapper";
//import {Component} from "react";

const Button = styled.button`
	background-color: green;
	padding: 5px 10px;
	color: white;
`;

const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: lightgreen;
	border: none;
	border-radius: 3px;
`;

class PostMsg extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ""
		}

		this.getText = this.getText.bind(this);
	}

	getText(e) {
		this.setState({ text: e.target.value });
	}

	render() {

		let err = this.props.err;

		return (
			<Wrapper>
				<div style={{ display: err ? "block" : "none" }}>
					<p className="error">{err}</p>
				</div>
				<Input
					value={this.state.text || ''}
					onChange={this.getText}
				>
				</Input>
				<br/>
				<Button onClick={() => {
					this.props.addMessage(this.state.text)
				}}
				>
					{btn_new_msg}
				</Button>
			</Wrapper>
		)
	}
}

function mapStateToProps(state) {
	return { currentRoom: state.msgs.selectedRoom || null, err: state.postmsg.err }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addMessage: addMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostMsg);