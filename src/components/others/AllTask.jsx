import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTask = () => {
    const [authdata] = useContext(AuthContext)

  return (
    
    
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60' >
        <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>

        <div className='h-[80%] overflow-auto'>
        {authdata.employees.map((elem,idx)=>{
            return <div key={idx} className='bg-[#1c1c1c] mb-2 py-2 px-4 flex justify-between rounded border-[1px] border-white'>
            <h2 className='w-1/5'>{elem.name}</h2>
            <h3 className='w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        
        </div>
    </div>
  )
}

export default AllTask
