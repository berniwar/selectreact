import React from 'react'
import OrderingTableHeader from './OrderingTableHeader'
import OrderingTableBody from './OrderingTableBody'

export default class OrderingTable extends React.Component{
	render(){
			let style = {
			display:'inline-block'
			}
			let box = {	
			float:'right', 
			width:'50%'
			}
		return(
			<div>

					<img style = {style} className='orderingImg' src="https://static.pexels.com/photos/20787/pexels-photo.jpg"></img>

						<div className="tableWidth" style = {box}>
								<OrderingTableHeader/>
								<OrderingTableBody />
						</div>
			</div>
			)

		}
}