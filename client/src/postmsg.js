import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { addMessage } from "./actions/actions";
import { btn_new_msg } from "./constants/constants";
import { Wrapper } from "./components";
//import {Component} from "react";

const SubmitButton = styled.button`
	background-color: green;
	padding: 5px 10px;
	color: white;
	float: right;
`;

const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: black;
	background: lightblue;
	border: 3px inset green;
	border-radius: 3px;
	width: 100%;
`;

const ErrorText = styled.p`
	font-size: 1.2em;
	font-weight: bold;
  	color: crimson;
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
					<ErrorText>{err}</ErrorText>
				</div>
				<Input
					value={this.state.text || ''}
					onChange={this.getText}
				>
				</Input>
				<br/>
				<SubmitButton onClick={() => {
					this.props.addMessage(this.state.text)
				}}
				>
					{btn_new_msg}
				</SubmitButton>
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