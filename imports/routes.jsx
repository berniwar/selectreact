import React, { Component } 			  from 'react'
import ReactDOM 						  from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import MainPage					  	      from './MainPage'	;
import Order 							  from 	'./ordering/Order';
import Confirming 						  from './confirmed/Confirming'
import Steps 							  from './confirmed/Steps'
import ConfirmingMain                     from './confirmed/ConfirmingMain'
import ModalComponent 					  from './components/ModalComponent'
import NewProductForm 					  from './components/NewProductForm'
import NewCustomerForm 					  from './components/NewCustomerForm'
import Admin 							  from "./admin/Admin"
import SingleProductAdminPage 			  from './admin/SingleProductAdminPage'
				 

export const routes = () => (

  <Router>
	  <div>

	    <Route exact path ="/" 		   		  component   = {MainPage}/>
		<Route exact path ="/orders"    	  component   = {ModalComponent} />
	    <Route exact path ="/confirming"  	  component   = {ConfirmingMain}/>
	   	<Route exact path ="/steps"    		  component   = {Steps}/> 

	    <Route exact path ="/newproduct"   	  component	  = {NewProductForm} />
	    <Route exact path ="/newcustomer"     component   = {NewCustomerForm} />

	    <Route exact path ="/admin"   		  component   = {Admin} />
	    <Route exact path ="/admin/product"   component   = {SingleProductAdminPage} />

	  </div>
  </Router>
)