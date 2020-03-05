import React from 'react'
import '../App.css'
import { Card,} from 'react-bootstrap';
export const Header = () => {
  return (
    <div className='header'>
      <Card>
        <Card.Header as='h5' >Expense Tracker</Card.Header>
      </Card>
     
    </div>
  )
}
