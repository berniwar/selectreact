import React from 'react'
import Header from '../components/Header'
import { Icon, Image, Segment, Step, Grid, Button } from 'semantic-ui-react'

export default class Steps extends React.Component {

render(){
  let left = {
      width:'45%',
      margin:'2rem'
  }
  let right = {
      width:'45%'
  }

    return(
  
  

  <div>
    <Header/>      
       <div className='step' ui tablet stackable steps>

          <Segment attached>
              <div className='StepTop'>
                  <div>
                    <h2>PO # 34567898765</h2>
                  </div>
                  <div>
                    Order Pending
                  </div>
                  <div>
                    4 Containers : Detailed Order
                  </div>
                  <div>
                    <h5>Estimated Date of Arrival : March 1 2018</h5>
                  </div>
              </div>
         </Segment>

         <Step.Group ordered widths={4}>

              <Step completed>
                <Step.Content>
                  <Step.Title>Purchase</Step.Title>
                  <Step.Description>
                    <tbody>
                   <tr> Purchase Approved  </tr>
                      </tbody>
                  </Step.Description>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                  <Step.Title>Manufacturing</Step.Title>
                  <Step.Description>Production Started</Step.Description>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                  <Step.Title>Shipping</Step.Title>
                  <Step.Description>On Route</Step.Description>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                    <Step.Title>Tracking</Step.Title>
                    <Step.Description>Finalized</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>

            <Segment attached className='Nounderline'>
              <table className="ui very basic table" >
                <tbody>
                  <tr>
                    <td>Next Steps: </td>
                  </tr>

                  <tr>
                    <td class="warning">Signed Invoice Needed</td>
                    <td>Manufacturing Begins (2-4 Weeks)</td>
                    <td>Shipping Documents Copies Sent</td>
                    <td>Original Documents Mailed</td>
                  </tr>

                  <tr>
                    <td class="warning">20% Deposit Needed</td>
                    <td>Product Finished</td>
                    <td>70% Remainder Needed</td>
                    <td>Order Arrived and Finished</td>
                  </tr>

                </tbody>
              </table>

                  <span >
                    <Button id='LeftButton'  style = {left} ui basic blue button>Log Out</Button>
                  </span>

                  <span >
                    <Button id='RightButton' style ={right} ui primary button>Continue Shopping</Button>
                  </span>



            </Segment>

         </div>

  </div>
)
  }
}

