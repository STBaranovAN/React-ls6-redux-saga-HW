import React from "react";
import Rooms from "./rooms";
import Messages from "./messages";
import PostMsg from "./postmsg";

export default class Main extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<div className="container">
				<div className="row form-group">
				</div>
				<div className="row form-group">
					<div className="col form-group">
						<Rooms/>
					</div>
					<div className="col form-group">
						<Messages/>
					</div>
				</div>
				<div className="row form-group">
					<div className="col form-group"></div>
					<div className="col form-group">
						<PostMsg/>
					</div>
				</div>
			</div>
		)
	}
}

		