import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: '4 mm', text: '4 mm', value: '4 mm' },
  { key: '6 mm', text: '6 mm', value: '6 mm' },
  { key: '9 mm', text: '9 mm', value: '9 mm' },
  { key: '12 mm', text: '12 mm', value: '12 mm' },
  { key: '18 mm', text: '18 mm', value: '18 mm' }
]

class ThicknessDropdownForm extends React.Component{
	getData(e){
		var data = e.target.textContent || '4 mm'

	}
	render(){
		return(
			<div className='inputWidth'>
			  <Menu>
			    <Dropdown  
			    	onChange = {this.getData.bind(this)}
			    	options={options} simple item
			    	text='4 mm'
			     />
			  </Menu>
			  </div>
		)
	}
}

export default ThicknessDropdownForm


