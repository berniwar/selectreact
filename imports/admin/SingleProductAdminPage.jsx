import React from 'react'
import { Card, Icon, Image, Segment, Button } from 'semantic-ui-react'
import Header from '../components/Header.jsx'

export default class SingleProductAdminPage extends React.Component {
	constructor(){
		super()
		state = {
			quality:'',
			thicknes1:'',
			thickness2:'',
			thickness3:''
		}
	}

	componentWillMount(){
		this.setState({productId:this.props.location.state.id})
	}
handleSubmit(e){
	e.preventDefault()

	Meteor.call('addQuality',this.state)
}
handleChange(e){
	debugger
	this.setState({[e.target.name]:e.target.value})
}
	render(){
		return(
			<div>
			<Header/>
			<Segment>
			Admin Price Update or Ordering?
			<form onSubmit ={this.handleSubmit.bind(this)}>
			<input name= 'quality' onChange = {this.handleChange.bind(this)} placeholder = 'Quality' ></input>
			<input name= 'thicknes1' onChange = {this.handleChange.bind(this)} placeholder = 'unit price for 3.6mm' ></input>
			<input name= 'thickness2' onChange = {this.handleChange.bind(this)} placeholder = 'unit price for 4mm' ></input>
			<input name= 'thickness3' onChange = {this.handleChange.bind(this)} placeholder = 'unit price for 60mm' ></input>
			<input name= 'thicknes4' onChange = {this.handleChange.bind(this)} placeholder = 'unit price for 9mm' ></input>
			<input name= 'thickness5' onChange = {this.handleChange.bind(this)} placeholder = 'unit price for 12mm' ></input>
			<input name= 'thickness6' onChange = {this.handleChange.bind(this)} placeholder = 'unit price for 15mm' ></input>
			<input name= 'thickness7' onChange = {this.handleChange.bind(this)} placeholder = 'unit price for 18mm' ></input>
				<Button> Update </Button>
			</form>
			</Segment>
			</div>
		)
	}
}