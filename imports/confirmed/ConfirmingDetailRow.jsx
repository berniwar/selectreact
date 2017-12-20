
import React from 'react'
import { Icon, Button} from 'semantic-ui-react'

export default class confirmingDetailRow extends React.Component{
	render(){
			return(
						<div className='confirmingDetailRow'>
							<div>6mm</div>
							<div>9 Bundles</div>
							<div>1, 512 Sheets</div>
							<div>5.29. $</div>
							<div> 2708.08. $</div>
							<div> <button class="ui red basic button">Delete</button></div>
							<div><button class="ui basic blue button">Edit</button></div>
						</div>
					)
			}
		}

