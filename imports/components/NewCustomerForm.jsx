import React from 'react'
import { Input, Button, Segment, Table } from 'semantic-ui-react'

export default class NewCustomerForm extends React.Component{

	constructor(){
		super()
		this.state = {
			name:'',
			category:''
		}
	}
	getData (e){
		//var name = this.refs.name.value.trim()
		this.setState({[e.target.name]: e.target.value},()=>{
			console.log(this.state)
		})

	}
    render(){

    	return(

    		<div className='father'>

    		<Segment onChange={this.getData.bind(this)}>

				<h3>New Customer Form</h3>

	    			Name <Input fluid placeholder='Add Name' name="name"/>
	    			Number <Input fluid placeholder='Add Number' name= "number"/>
	    			Email <Input fluid  placeholder='Add Email' name= "email"/>
	    			Company <Input fluid  placeholder='Add Company' name= "company"/>
	    			Address <Input fluid  placeholder='Add Address' name= "address"/>
	    			Role <Input fluid  placeholder='Add Role' name= "role"/>

	    		<h4></h4>
	    		<p/>

	    			<button class="ui fluid primary button" > Submit </button>

	    	</Segment>

			</div>

    		   )
    }
}
