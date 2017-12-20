import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import SecondaryButton from '../components/SecondaryButton'

export default class ProductsItem extends React.Component{
	render(){
		return(
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
						<SecondaryButton/>
				</Card.Content>
				 </Card>
			</div>
		)
	}
};