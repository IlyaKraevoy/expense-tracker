import React from 'react'
import '../App.css'
import { ListGroup } from 'react-bootstrap';

export const Categories = () => {
  return (
    <div className='categories'>
      <div>
        <h2>Categories</h2>
      </div>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  )
}
