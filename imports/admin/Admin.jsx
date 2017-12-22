import React from 'react'
import { Icon, Label, Menu, Table, Segment, Button } from 'semantic-ui-react'
import Header from '../components/Header'

export default class Admin extends React.Component{
	render(){
		return(
<div>
<Header/>

	<Segment>
				  <Table celled striped>
	    <Table.Header>
	      <Table.Row>
	        <Table.HeaderCell>Product Name</Table.HeaderCell>
	        <Table.HeaderCell></Table.HeaderCell>
	      </Table.Row>
	    </Table.Header>

	    <Table.Body>
	      <Table.Row>
	         <Table.Cell>Product</Table.Cell>
	        <Table.Cell><Button ui basic blue>Edit</Button></Table.Cell>
	      </Table.Row>
	      <Table.Row>
	        <Table.Cell>Product</Table.Cell>
	        <Table.Cell><Button ui basic blue>Edit</Button></Table.Cell>

	      </Table.Row>
	      
	    </Table.Body>

	    <Table.Footer>
	     
	    </Table.Footer>
	  </Table>

	</Segment>
</div>
		)
	}
};