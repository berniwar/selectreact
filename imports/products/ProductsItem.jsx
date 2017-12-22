import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import SecondaryButton from '../components/SecondaryButton'
import NewProductForm from '../components/NewProductForm'

export default class ProductsItem extends React.Component{


	redirect(){
		debugger
		this.props.history.push({
				pathname:'/admin/product', 
				state:{id:this.props.id}
		})
	}
	render(){
		return(
			<div onClick={this.redirect.bind(this)}>
				<Card>

				<Image src="https://static.pexels.com/photos/20787/pexels-photo.jpg"/>

					<Card.Content>
					
						<div className='tittle'>
								<Card.Header>
							<h3>{this.props.name}</h3>
								</Card.Header>

								<h5>{this.props.description} </h5>

						</div>

						<h5>{this.props.priceperunit} - {this.props.priceperunit} </h5>

						<SecondaryButton/>

				</Card.Content>

				 </Card>
			</div>
		)
	}
};