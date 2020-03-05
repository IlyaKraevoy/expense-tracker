import React from 'react'
import { Button } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';

export const AddTransaction = () => {
  return (
    <div className='addTransaction'>
      <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
      <InputGroup.Text>0.00</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Amount (to the nearest dollar)"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Amount (to the nearest dollar)"
    />
    <InputGroup.Append>
      <InputGroup.Text>$</InputGroup.Text>
      <InputGroup.Text>0.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
    </div>
  )
}
