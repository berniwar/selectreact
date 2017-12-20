import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import OrderingTable from '../ordering/OrderingTable'
import Order from '../ordering/Order'

export default class ModalComponent extends React.Component{
    render(){

    let left = {
      width:'45%',
      margin:'1rem'
  }
  let right = {
      width:'45%'
  }


        return(
            <div>
                <Modal trigger={<Button>Show Modal</Button>}>
                    
                    <Modal.Header>Product Name</Modal.Header>
                    
                    <Modal.Content image>
                           
                            <Modal.Description>
                                        <Order/>
                            </Modal.Description>

                    </Modal.Content>

                    <Modal.Actions>

                                <Button  style = {left} ui basic blue onClick={this.close}>
                                  Continue Shopping
                                </Button>

                                <Button   style ={right} ui primary content="Add to Cart" onClick={this.confirming} />
                              </Modal.Actions>

                  </Modal>
            </div>        
        )
    }
}

