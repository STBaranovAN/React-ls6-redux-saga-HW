import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { getRooms, selectRoom } from "./actions/actions";
import Room from "./item";
import { no_room_msg } from "./constants/constants";
import { Wrapper, Title } from "./components";

const List = styled.ul`
	list-style-type: none;
`;

const ListItem = styled.li`
	border: 2px outset blue;
	border-radius: 5px;
	background: azure;
	color: black;
	margin: 10px;
	&:hover {
		cursor: pointer;
	} 
`;

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
			return (<Wrapper>
						<Title>{err}</Title>
					</Wrapper>
			)
		}
		
		if(allRooms.length > 0) {
			return (
					<Wrapper>
							<Title>All rooms:</Title>
							<br/>
							<List>
								{allRooms.map((item, index) => {
									return <ListItem key={index}><Room
											name={item.name} 
											onClick={() => { 
												this.props.selectRoom(item);
											}}
										/></ListItem>
								})
							}
							</List>	
					</Wrapper>
			)
		} else {
			return (<Wrapper>
						<Title>{no_room_msg}</Title>
					</Wrapper>)
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

		