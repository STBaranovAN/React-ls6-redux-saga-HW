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
			<div className="main container">
				<div className="row">
					<div className="col">
						<Rooms/>
					</div>
					<div className="col">
						<Messages/>
						<br/>
						<PostMsg/>
					</div>
				</div>
			</div>
		)
	}
}

		