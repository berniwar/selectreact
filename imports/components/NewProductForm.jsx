import React from 'react'
import { Input, Button, Segment, Table } from 'semantic-ui-react'
import {Products} from '../api/Products.js'

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
	
	handleSubmit(e){
		e.preventDefault()
		debugger
		
		var name = this.state.name
		var category = this.state.category
		var subcategory = this.state.subcategory
		var subsubcategory = this.state.subsubcategory
		var quality = this.state.quality
		var use = this.state.Use
		var description = this.state.description
		var Manufacturer  = this.state.Manufacturer 
		var portoforigin = this.state.portoforigin

		var length= this.state.length
		var width = this.state.width
		var thickness = this.state.thickness

		var piecesperbundle = this.state.piecesperbundle
		var bundlesperpallet = this.state.bundlesperpallet
		var wightperunit = this.state.wightperunit

		var priceperunit = this.state.priceperunit
		var updatecycle = this.state.updatecycle
		var capacitypermonth = this.state.capacitypermonth

		var veneer= this.state.veneer
		var veneerQuality = this.state.veneerQuality

		var product = {
			name,
			category,
			subcategory,
			quality,
			use,
			description,
			Manufacturer,
			portoforigin,
			length,
			width,
			thickness,
			piecesperbundle,
			bundlesperpallet,
			wightperunit,
			priceperunit,
			updatecycle,
			capacitypermonth,
			veneer,
			veneerQuality
		}

		debugger
		Meteor.call('addProduct', product,(e)=>{
			debugger
		})
	}
    render(){

    	return(

    		<form onSubmit = {this.handleSubmit.bind(this)}

    			className='father'>
    		

    		<Segment onChange={this.getData.bind(this)}>

				<h2>New Product Form</h2>

				<h4>Required Information</h4>

					Name <Input required fluid placeholder='Add Name' name="name"/>
					Description<Input required fluid  placeholder='Add Description ie Why buy this prodict' name= "description"/>
					Category <Input required fluid placeholder='Add Category ie Plywood or PVC or Film Face . Othewise : Add new Category' name= "category"/>
					
				<h3>Subcategories</h3>

					<h5>Quality A </h5>
	    			name <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>
	    			price <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>
	    			description <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>
	    								
	    			<h5>Quality B </h5>
	    			name <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>
	    			price <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>
	    			description <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>
	    								
	    			<h5>Quality C </h5>
	    			name <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>
	    			price <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>
	    			description <Input fluid  placeholder='Add Sub Category ie -Panel' name= "subcategory"/>



				<h4>Dimensions for 1 Unit</h4>

	    			Length <Input fluid  placeholder='Add Length in cm ' name= "length"/>
	    			Width  <Input fluid  placeholder='Add Width in cm' name= "width" />
	    			Thickness  <Input  fluid placeholder='Add Thickness in mm' name= "thickness" />

				<h4>Shipping</h4>

		    		Pieces per Bundle/Pallet<Input fluid  placeholder='Add Pieces per Bundle ie 100' name= "piecesperbundle" />
	    			Bundles/Pallets per Container <Input fluid  placeholder='Add Bundles per Container ie 18' name= "bundlesperpallet"/>
	    			Weight per Unit <Input fluid  placeholder='Weight per Unit ie 100kg' name= "wightperunit"/>


	    		<h4>Manufacturer</h4>

	    			Price per Unit<Input fluid  placeholder='Price per Unit ie 1.00 (USD)' name= "priceperunit"/>
	    			Pricing Updating Cycle <Input fluid  placeholder='Pirice per Unit ie Daily/Weekly/Monthly' name= "updatecycle"/>
	    			Capacity per Month <Input fluid  placeholder='Capacity per Month ie 100 Containers' name= "capacitypermonth"/>
	    			Manufacturer <Input fluid  placeholder='Add Manufacturer ie Acme' name= "Manufacturer" />
	    			Port of Origin <Input fluid  placeholder='Add Port of Origin ie Mobile, AL' name= "portoforigin"/>

	    		<h4>Plywood Specific</h4>
					Veneer <Input fluid  placeholder='Add Veneer ie Okoume' name= "veneer"/>
	    			Veneer Quality <Input fluid  placeholder='Add Veneer Quality ie A/B' name= "veneerQuality"/>
	    		<p/>

	    			<button className="ui fluid primary button" > Submit </button>

	    	</Segment>

			</form>

    		   )
    }
}
