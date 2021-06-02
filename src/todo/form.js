import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const TodoForm = (props)=> {

  // constructor(props) {
  //   super(props);
  //   this.state = { item: {} };
  // }
  const [item, setItem] = useState({});

  const handleInputChange = (e) => {
    setItem( {...item, [e.target.name]: e.target.value } );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newItem = {};
    setItem(newItem);
  };


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

export default TodoForm;
