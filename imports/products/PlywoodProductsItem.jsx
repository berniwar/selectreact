import React from 'react';
import ProductsItem from './ProductsItem'
import {Button, Card, Icon, Image, Container} from 'semantic-ui-react'
import SecondaryButton from '../components/SecondaryButton'

export default class PlywoodProductsItem extends React.Component{
	render(){
		debugger
		let right ={
			float:'right'
		}
		let left={
			float:'left'
		}
		let button = {
			width:'250px'
		}


		return (
					<div>
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
									  <button className="fluid ui black button" style={button}><span style= {left}>{this.props.veneerQuality}</span>       <span style={right}> 1-2 $</span></button>
									  <button className="fluid ui black button" style={button}><span style={left}>{this.props.veneerQuality}</span>       <span span style={right}>1-2 $</span></button>
									</div>

						</Card.Content>
						 </Card>
					</div>

				)
			}
		}



