import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import './todo.scss';

const ToDo = (props)=> {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }
  const [list, setList] = useState([]);
  const [count, setCount] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList( [...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

  };

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
      { _id: 6, complete: false, text: 'Walk the Dog again', difficulty: 4, assignee: 'Person A'},
      { _id: 7, complete: true, text: 'Do Homework again', difficulty: 3, assignee: 'Person A'},
      { _id: 8, complete: false, text: 'Take another Nap', difficulty: 1, assignee: 'Person A'},
    ];

    setList(list);
  
  }, [])
  useEffect(()=>{
    let newCount = list.filter(item => !item.complete).length;
    setCount(newCount);
  })
  
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <h2 className="text-center bg-dark m-1 p-3 text-light">
          To Do List Manager ({count}) 
          </h2>
        <section className="todo">
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          <div className = "mx-auto w-50">
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
        </Container>
      </>
    );
  
}

export default ToDo;
