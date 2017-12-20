import React from 'react';
import ProductsItem from './ProductsItem'
import { Button, Card, Icon, Image, Container} from 'semantic-ui-react'
import SecondaryButton from '../components/SecondaryButton'

export default class PlywoodProductsItem extends React.Component{
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
		return (
					<div>
						<Card>
						<Image src="https://static.pexels.com/photos/20787/pexels-photo.jpg"/>
							<Card.Content>
							
								<div className='tittle'>
										<Card.Header>
									<h3>{this.props.name}</h3>
										</Card.Header>

										<h5>Description</h5>

								</div>
								<h5>$ 8.00-12.00 </h5>

									<div class="ui vertical basic buttons">
									  <button className="fluid ui black button"
									  style={button}>
									  		<span style= {left}>A/B</span>
									  		<span style={right}>1-2 $</span>
									  </button>
									  <button className="fluid ui black button" style={button}><span style= {left}>B/B</span>       <span style={right}> 1-2 $</span></button>
									  <button className="fluid ui black button" style={button}><span style={left}>C/D</span>       <span span style={right}>1-2 $</span></button>
									</div>

						</Card.Content>
						 </Card>
					</div>

				)
			}
		}



