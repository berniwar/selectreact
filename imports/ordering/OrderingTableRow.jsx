
import React from 'react'
import ThicknessDropdownForm from './ThicknessDropdownForm'
import QuantityGroupingDropdown from './QuantityGroupingDropdown'
import InputField from "./InputField"
import UnitPrice from "./UnitPrice"

export default class OrderingTableRow extends React.Component{
	render(){
		return(
			<div className='cont'>

			
				<ThicknessDropdownForm/>
				
			
				<QuantityGroupingDropdown/>
				
			
				<InputField/>
				

				<UnitPrice/>

			</div>
			)
	}
}
