import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [authdata,setUserData] = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, settaskDescription] = useState('');
  const [taskDate, settaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState();

  const [newtask, setNewTask] = useState({});

  const SubmitHandler = (e)=>{
    e.preventDefault()
  
    setNewTask({taskTitle,taskDescription,category,taskDate,active:false,newTask:true,failed:false,completed:false})
    const data = authdata.employees
  
   data.forEach(element => {
    if(asignTo == element.name){
      element.tasks.push(newtask)
      element.taskCounts.newTask++
      
    }

    console.log(data);
    
    

    
   });
   
    

    // setTaskTitle('')
    // settaskDate('')
    // setAsignTo('')
    // setCategory('') 
    // settaskDescription('')
  }
  

  return (
    <div className="p-5 bg-[#1c1c1c] mt-3 rounded">
        <form onSubmit={(e)=>{
          SubmitHandler(e)
        }} className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{
              setTaskTitle(e.target.value)
            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4 " type="text" placeholder="Task Title" />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Date</h3>
            <input value={taskDate} onChange={(e)=>{
              settaskDate(e.target.value)
            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4 " type="Date"/>
          </div>

          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Asign to</h3>
            <input value={asignTo} onChange={(e)=>{
              setAsignTo(e.target.value)
            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4 " type="text" placeholder="Employee name" />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Category</h3>
            <input value={category} onChange={(e)=>{
              setCategory(e.target.value)
            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4 " type="text" placeholder="Design, Dev, etc " />
          </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-grey-300 mb-0.5">Description</h3>
            <textarea value={taskDescription} onChange={(e)=>{
              settaskDescription(e.target.value)
            }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4 " name="" id="" cols="30" rows="10"></textarea>
            <button className="bg-white py-3 text-black hover:text-white duration-300 border-[1px] border-grey-400 hover:bg-[#1c1c1c] rounded text-sm  w-full " >Create Task</button>
          </div>
          
        </form>
      </div>
  )
}

export default CreateTask
