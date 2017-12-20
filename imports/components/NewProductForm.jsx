import React from 'react'
import { Input, Button, Segment, Table } from 'semantic-ui-react'

export default class NewProductForm extends React.Component{

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

				<h3>New Product Form</h3>

	    			Name <Input fluid placeholder='Add Name' name="name"/>
	    			Category <Input fluid placeholder='Add Category ie Panel' name= "category"/>
	    			Sub Category <Input fluid  placeholder='Add Sub Category ie Plywood' name= "subcategory"/>
	    			Sub Sub Category <Input fluid  placeholder='Add Sub Sub Category ie Okoume' name= "subsubcategory"/>
	    			Quality<Input fluid  placeholder='Add Quality ie A/B' name= "quality"/>
	    			Use<Input fluid  placeholder='Add Use ie Furniture' name= "Use" />
	    			Description<Input fluid  placeholder='Add Description ie Why buy this prodict' name= "description"/>
	    			Manufacturer <Input fluid  placeholder='Add Manufacturer ie Acme' name= "Manufacturer" />
	    			Port of Origin <Input fluid  placeholder='Add Port of Origin ie Mobile, AL' name= "portoforigin"/>

				<h4>Dimensions for 1 Unit</h4>

	    			Length <Input fluid  placeholder='Add Length in cm ' name= "length"/>
	    			Width  <Input fluid  placeholder='Add Width in cm' name= "width" />
	    			Thickness  <Input  fluid placeholder='Add Thickness in mm' name= "thickness" />

				<h4>Shipping</h4>

		    		Pieces per Bundle/Pallet<Input fluid  placeholder='Add Pieces per Bundle ie 100' name= "piecesperbundle" />
	    			Bundles/Pallets per Container <Input fluid  placeholder='Add Bundles per Container ie 18' name= "bundlesperpallet"/>
	    			Weight per Unit <Input fluid  placeholder='Weight per Unit ie 100kg' name= "wightperunit"/>


	    		<h4>Pricing</h4>

	    			Price per Unit<Input fluid  placeholder='Pirice per Unit ie 1.00 (USD)' name= "priceperunit"/>
	    			Pricing Updating Cycle <Input fluid  placeholder='Pirice per Unit ie Daily/Weekly/Monthly' name= "updatecycle"/>
	    			Capacity per Month <Input fluid  placeholder='Capacity per Month ie 100 Containers' name= "capacitypermonth"/>

	    		<h4></h4>
	    		<p/>

	    			<button class="ui fluid primary button" > Submit </button>

	    	</Segment>

			</div>

    		   )
    }
}
