import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './products/ProductsList'
import {Products} 	from './api/Products.js'

var _ = require('lodash')

// var products = [
// 	{
// 		name:'Okoume', 
// 		category: 'Plywood',
// 		thickness: 4,
// 		price:10,
// 		piecesPerBundle: 900 ,
// 		quality: 'A',
// 		veneerQuality:'A/B',
// 		use:'Furniture'
// 	},

// 	{
// 		name:'Birch', 
// 		category: 'Plywood',
// 		thickness: 4,
// 		price:10,
// 		piecesPerBundle: 900 ,
// 		quality: 'A',
// 		veneerQuality:'A/B',
// 		use:'Furniture'
// 	},
	
// 	{
// 		name:'Sapele', 
// 		category: 'Plywood',
// 		thickness: 4,
// 		price:10,
// 		piecesPerBundle: 900 ,
// 		quality: 'A',
// 		veneerQuality:'A/B',
// 		use:'Furniture'
// 	},
// 	{
// 		name:'450 PVC', 
// 		category: 'PVC',
// 		thickness: 4,
// 		price:20,
// 		piecesPerBundle: 900 ,
// 		quality: 'B' ,
// 		use:'Furniture'
// 	},
// 	{
// 		name:'550 PVC', 
// 		category: 'PVC',
// 		thickness: 4,
// 		price:30,
// 		piecesPerBundle: 900 ,
// 		quality: 'A',
// 		use:'Structural'
// 	},
// 	{
// 		name:'ConstructionPVC', 
// 		category: 'PVC',
// 		thickness: 18,
// 		price:30,
// 		piecesPerBundle: 80 ,
// 		quality: 'C',
// 		use:'Construction'
// 	},
// 	{
// 		name:'Imported Film', 
// 		category: 'Film Face',
// 		thickness: 18,
// 		price:20,
// 		piecesPerBundle: 80 ,
// 		quality: 'A',
// 		use:'Construction'
// 	},
// 	{
// 		name:'Domestic Film', 
// 		category: 'Film Face',
// 		thickness: 18,
// 		price:15,
// 		piecesPerBundle: 80 ,
// 		quality: 'B',
// 		use:'Construction'
// 	},
// 	{
// 		name:'Recycled Core', 
// 		category: 'Film Face',
// 		thickness: 18,
// 		price:9,
// 		piecesPerBundle: 80 ,
// 		quality: 'C',
// 		use:'Construction'
// 	}
// ]


export default class MainPage extends React.Component{
	constructor(){
		super()
		this.state = {
			products:''
		}
	}

componentWillMount(){
var that = this
	Tracker.autorun(()=>{
		var products = Products.find({}).fetch()
		debugger
		that.setState({products},()=>{
			debugger
			console.log(this.state.products)
		})

	})
}

        render(){
        	var groupped = _.groupBy(this.state.products,'category')

                return(
                	<div>
                		<Header/>
                	
                	<div className = 'products'>
			            <ProductsList 
			            	products = {groupped}
			           		history  = {this.props.history}
			            />
               		 </div>
               		 <Footer/>
               		 </div>
                )
                
        }
}