import React from 'react'
import { Input } from 'semantic-ui-react'


class  InputField extends React.Component{
	render(){
		return(
			<div 
				className='inputWidth'>
  				<Input placeholder='Add #' />
 		 	</div>
		)
	}
}



export default InputField