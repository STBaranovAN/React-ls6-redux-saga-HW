import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRooms, selectRoom } from "./actions/actions";
import Room from "./item";
import { no_room_msg } from "./constants/constants";

class Rooms extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		}
	}

	componentDidMount(){
		this.props.getRooms();
	}
	
	render() {
		let err = this.props.chatRooms.err;
		let allRooms = this.props.chatRooms.allRooms || [];

		if(err)		
		{
			return (<div className="rooms">
						<h2>{err}</h2>
					</div>
			)
		}
		
		if(allRooms.length > 0) {
			return (
				<div className="rooms">
							<h2>All rooms:</h2>
							<ul>
								{allRooms.map((item, index) => {
									return <Room
											key={index} name={item.name} 
											onClick={() => { 
												this.props.selectRoom(item);
											}}
										/>
								})
							}
							</ul>	
				</div>
			)
		} else {
			return (<div className="rooms">
						<h2>{no_room_msg}</h2>
					</div>)
		}
	}
}

function mapStateToProps(state){
	return {chatRooms: state.rooms}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getRooms: getRooms, selectRoom: selectRoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);

		