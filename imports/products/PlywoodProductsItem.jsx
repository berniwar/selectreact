import React from 'react';
import ProductsItem from './ProductsItem'
import {Button, Card, Icon, Image, Container} from 'semantic-ui-react'
import SecondaryButton from '../components/SecondaryButton'
import {Qualities} 		from '../api/Qualities.js'

export default class PlywoodProductsItem extends React.Component{
	constructor(){
		super()
		this.state = { }
	}
	componentWillMount(){
		var that = this
		var stuff = []
		Tracker.autorun(()=>{
			
			var qualities = Qualities.find({productId:this.props.id}).fetch()
			debugger
			if(qualities.length > 0){

				stuff.push(...qualities)
				debugger
				that.setState({qualities:stuff})
			}
		})
	}
	redirect(){
		debugger
		this.props.history.push({
				pathname:'/admin/product', 
				state:{id:this.props.id}
		})
	}
	render(){
		
		let right ={
			float:'right'
		}
		let left={
			float:'left'
		}
		let button = {
			width:'250px'
		}
debugger
		return (
					<div onClick={this.redirect.bind(this)}>
						<Card>
						<Image src="https://static.pexels.com/photos/20787/pexels-photo.jpg"/>
							<Card.Content>
							
								<div className='tittle'>
										<Card.Header>
									<h3>{this.props.name}</h3>
										</Card.Header>

									<h5>Select Quality</h5>

								</div>

								<div></div>
								<div></div>

								<p/>

									<div class="ui vertical basic buttons">
									  <button className="fluid ui black button"
									  style={button}>
									  		<span style= {left}>{this.props.veneerQuality}</span>
									  		<span style={right}>{this.props.priceperunit} - {this.props.priceperunit}  $</span>
									  </button>
									  <button className="fluid ui black button" style={button}><span style= {left}>{this.state.qualities[0].quality}</span>       <span style={right}> 1-2 $</span></button>
									  <button className="fluid ui black button" style={button}><span style={left}>{this.props.veneerQuality}</span>       <span span style={right}>1-2 $</span></button>
									</div>

						</Card.Content>
						 </Card>
					</div>

				)
			}
		}



