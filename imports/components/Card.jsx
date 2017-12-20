import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Card = () => (
  <Card>
    <Image src='/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        Okoume
      </Card.Header>
      // <Card.Meta>
      //   <span className='date'>
      //     Joined in 2015
      //   </span>
      // </Card.Meta>
      <Card.Description>
        Description
      </Card.Description>
      price
      button
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default Card