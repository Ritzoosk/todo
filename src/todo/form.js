import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useForm from '../hooks/useForm.js'

export default function TodoForm(props) {
  const[formData, setFormData] = useState({});
  const[values, handleInputChange, handleSubmit] = useForm(props.handleSubmit)

    return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <Form.Group>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Add Item</Button >
        </form>
      </>
    );
  
}


