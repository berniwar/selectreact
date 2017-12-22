import React from 'react'

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
handleSubmit(){
	debugger
}
handleChange(e){
	debugger
	this.setState({[e.target.name]:e.target.value})
}
	render(){
		return(
			<form onSubmit ={this.handleSubmit.bind(this)}>
			<input name= 'quality' onChange = {this.handleChange.bind(this)} placeholder = 'quality' ></input>
			<input name= 'thicknes1' onChange = {this.handleChange.bind(this)} placeholder = 'price 6mm' ></input>
			<input name= 'thickness2' onChange = {this.handleChange.bind(this)} placeholder = 'price 10mm' ></input>
			<input name= 'thickness3' onChange = {this.handleChange.bind(this)} placeholder = 'price 20mm' ></input>
				
			</form>
		)
	}
}