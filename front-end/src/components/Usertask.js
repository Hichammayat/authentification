import React from 'react'
import Task from '../modals/TaskModal'
import {useDispatch, useSelector} from "react-redux"
import { useEffect,useState } from 'react'
import{getTasks,AddTask,DLTtask,filtertask,taskStatus,handletask} from '../redux/Task-reducer'
import {useNavigate} from "react-router-dom"

function Usertask() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const getUserId = JSON.parse(localStorage.getItem('user'))

    
    const [newtask, setNewtask] = useState(new Task("", getUserId._id))

    useEffect(() =>{
      dispatch(getTasks({id:getUserId._id}))
  },[])
  const Tasks = useSelector(state => state.Tasks.task)
  console.log(Tasks)
  console.log("hsgg")
  const signout = () => {
    
    navigate("/");
    localStorage.clear();
  };




















  
  return (
    <div className="App">
      <div className='navbar'>
      <input type="text"  placeholder='task' onChange={(e) => setNewtask({...newtask, titre : e.target.value})}/>
      <button onClick={() =>dispatch(AddTask({id:getUserId._id,task : newtask}))}>ADD</button>
      <div className='search'>
              <input 
               type="text"
               placeholder="search..." 
               className='search-input' 
               onChange={(e)=>(e.target.value)===""?dispatch(handletask()):dispatch(filtertask(e.target.value))}
              />
              <button className='signout-btn' onClick={()=>signout()}>Logout</button>
              </div>
        </div>
      {
        Tasks.map(item =>(
          
          <div className={item.status ? "todo-completed" : ""}>
    
          <h3>{item.titre}</h3>
          <button onClick={() =>dispatch(DLTtask({id:item._id}))}><i className="fa-solid fa-trash"></i></button>
          <button onClick={() =>dispatch(taskStatus({id:item._id,status:item.status}))}><i className="fa-regular fa-square-check"></i></button>
          </div>
        ))
      }
      
      
     

    </div>
  )
  
}

export default Usertask