import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: '4mm', text: '4mm', value: '4mm' },
  { key: '6mm', text: '6mm', value: '6mm' },
  { key: '9mm', text: '9mm', value: '9mm' },
  { key: '12mm', text: '12mm', value: '12mm' },
  { key: '18mm', text: '18mm', value: '18mm' }
]

const DropdownForm = () => (
  <Menu compact>
    <Dropdown  options={options} simple item />
  </Menu>
)

export default DropdownForm