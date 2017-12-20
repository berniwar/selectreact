import React from 'react'
import ConfirmingHeader from './ConfirmingHeader.jsx'
import ConfirmingDetailHeader from './ConfirmingDetailHeader'
import ConfirmingDetailRow from './ConfirmingDetailRow'
import ConfirmingTotal from './ConfirmingTotal'
import Header from '../components/Header.jsx'
import { Icon, Image, Segment, Step, Button, Table } from 'semantic-ui-react'



export default class Confirming extends React.Component{
	render(){
		let style = {
			background: 'white'
		}
		return(
			<div className='father'>
					<Segment>
							<div >
								<ConfirmingHeader className="ui header"/>
								<p/>

							</div>

							<Table celled fixed singleLine>

								 <Table.Header>
									  <Table.Row>
										<Table.HeaderCell><ConfirmingDetailHeader ID="WhiteBackground" /></Table.HeaderCell>
									  </Table.Row>
		    					  </Table.Header>

		    					  <Table.Body>
		    						<Table.Row>
										<ConfirmingDetailRow/>	
								 	</Table.Row>
								 	<Table.Row>
										<ConfirmingDetailRow/>	
								 	</Table.Row>
								 	<Table.Row>
										<ConfirmingDetailRow/>	
								 	</Table.Row>
								  </Table.Body>

							</Table>

							<Table celled fixed singleLine>

								 <Table.Header>
									<Table.Row>
										<Table.HeaderCell><ConfirmingDetailHeader/></Table.HeaderCell>
									</Table.Row>
		    					  </Table.Header>

		    					  <Table.Body>
									<Table.Row><ConfirmingDetailRow/></Table.Row>
								  </Table.Body>

							</Table>

							<Table celled fixed singleLine>

								 <Table.Header>
									<Table.Row>
										<Table.HeaderCell><ConfirmingDetailHeader/></Table.HeaderCell>
									</Table.Row>
		    					  </Table.Header>

		    					  <Table.Body>
		    					  	<Table.Row><ConfirmingDetailRow/>	</Table.Row>
		    					  	</Table.Body>

		    				</Table>

								<Button primary fluid>Submit Order</Button>

					</Segment>

			</div>
			)
	}
}

