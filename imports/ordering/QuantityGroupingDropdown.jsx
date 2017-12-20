import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 'Sheets', text: 'Sheets', value: 'Sheets' },
  { key: 'Bundles', text: 'Bundles', value: 'Bundles' },
  { key: 'Containers', text: 'Containers', value: 'Containers' },
]



class QuantityGroupingDropdown extends React.Component{
	getData(e){
		var data = e.target.textContent || 'Bundles'

	}
	render(){
		return(
			<div className='inputWidth'>
			  <Menu >
			    <Dropdown  
			    	onChange = {this.getData.bind(this)}
			    	options={options} simple item
			    	text='Bundles'
			     />
			  </Menu>
			 </div>
		)
	}
}



export default QuantityGroupingDropdown