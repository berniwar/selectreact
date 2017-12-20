import React from 'react';
import ProductsItem from './ProductsItem'
import PlywoodProductsItem from './PlywoodProductsItem.jsx'

export default class ProductsList extends React.Component{
	render(){
		return (
				<div>
					{Object.keys(this.props.products).map((item,i) =>{ 
						if(item == 'Plywood'){
									return <div className='container' key={i}> 
										   <div className='category'>
												<h1>{item}</h1>
											</div>
											<div className='box'>{this.props.products[item].map((ele, i)=>{
												return <div className='smallbox' key={i}>
															<PlywoodProductsItem name = {ele.name}/>
														</div>
										})} </div></div>

						}

						else if(item == item){
									return <div className='container' key={i}> 
										   <div className='category'>
												<h1>{item}</h1>
											</div>
											<div className='box'>{this.props.products[item].map((ele, i)=>{
												return <div className='smallbox' key={i}>
															<ProductsItem name = {ele.name}/>
														</div>
										})} </div></div>
								}
						})
					}
				</div>
				)
			}
}
