import React, { Component } from 'react'
import { Menu, Icon, Header } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable >
        <Menu.Item>
          <Header as='h2'>Select</Header>
        </Menu.Item>

        <Menu.Item
          className='icon'
          icon='shop icon'
          position='right'
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}>
          <Icon name='shop icon'/>
        </Menu.Item>

         <Menu.Item
          className='icon'
          icon='user' 
          position='right center'
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}>

          <Icon name='user' />
        </Menu.Item>

        <Menu.Item
		      className='icon' 
		      icon='search'
          position='right'
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          <Icon name='search' />
        </Menu.Item>

      

      
      </Menu>
    )
  }
}


// import React from 'react';
// import ReactBootstrap from 'react-bootstrap/lib';
// import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap/';



// export default class Header extends React.Component {
//   render() {
//       	var React = require('react');
// 		var FontAwesome = require('react-fontawesome');
// 		var MyComponent = React.createClass
//     return (
//          		<header>
// 				  <Navbar>
// 				    <Navbar.Header>
// 				      <Navbar.Brand>
// 				        <a href="#">Select</a>
// 				      </Navbar.Brand>
// 				    </Navbar.Header>
// 				    <Nav pullRight>
// 				      <NavItem eventKey={1} href="#">
// 						<i
// 					        className='fa fa-search'
// 					        name='fa-search'
// 					     />
//         			</NavItem>
// 				      <NavItem eventKey={2} href="#">
// 						<i
// 					        className='fa fa-user-o'
// 					        name='fa-user-o'
// 					     />
// 				      </NavItem>
// 				      <NavItem eventKey={2} href="#">
// 						<i
// 				      	 className='fa fa-shopping-cart'
// 				      	 name='fa-shopping-cart'
// 				      	 />
// 				      </NavItem>
// 				    </Nav>
// 				  </Navbar>

//      			 </header>

//     );
//   }
// };

