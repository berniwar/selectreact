import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import ThicknessDropdownForm from '../ordering/ThicknessDropdownForm'
import QuantityGroupingDropdown from '../ordering/QuantityGroupingDropdown'
import InputField from '../ordering/InputField'
import PrimaryButton from '../components/PrimaryButton'
import Modal from '../components/ModalComponent'
import OrderingTableRow from './OrderingTableRow'
import OrderingTableHeader from './OrderingTableHeader'
import OrderingTableBody from './OrderingTableBody'
import { Segment } from 'semantic-ui-react'
import BottomSectionTop from './BottomSectionTop'
import BottomSectionMiddle from './BottomSectionMiddle'
import BottomSectionBottom from './BottomSectionBottom'
import OrderingTable from './OrderingTable'


export default class Order extends React.Component{
	render(){
		let style = {
			display:'inline-block'
		}
		let box = {	
			float:'right', 
			width:'50%'
		}

		return(

			<div >

								<div >
									<OrderingTable/>

									<p/>

									<div>
										<BottomSectionTop/>
									</div>

									<p/>
									
									<div>
										<BottomSectionMiddle/>
									</div>	

									<p/>

									<div >
										<BottomSectionBottom/>
									</div>	

								</div>


			</div>
			)
	}
}


