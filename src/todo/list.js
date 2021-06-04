import { React, useContext, useState } from 'react';

import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination"
import {SiteContext} from '../context/site.js'


const TodoList = (props) => {
const context = useContext(SiteContext)
console.log(context)
const count = context.taskNumber
const [showTask, setTask] = useState(true);

const [currentPage, setCurrentPage] = useState(1);
const displayTask = props.list.filter(toggleCompleted =>{
  if (showTask){
    return toggleCompleted.complete;
  }else{
    return toggleCompleted.complete === false; 
  }
})
const pageItems = displayTask.slice(((currentPage*count)-count),currentPage*count)




    return (
      <>
      <span>completed tasks: {showTask ? "showing": "hidden"} </span>
      <ListGroup>
        {pageItems.map(item => (
          
            <ListGroup.Item
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
            </ListGroup.Item>
        
        ))}
      </ListGroup>
      <button onClick = {()=>setTask(!showTask)}>Toggle Completed</button>

      <button onClick = {()=>setCurrentPage(1)}>1</button>
      <button onClick = {()=>setCurrentPage(2)}>2</button>
      <button onClick = {()=>setCurrentPage(3)}>3</button>
      </>
    );

}

export default TodoList;
