import React, { useEffect, useState } from 'react'
import Headers from '../others/Headers'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {


  return (
    <div>
      <div className='p-14 bg-[#1c1c1c] h-screen'>
        <Headers changeUser={props.changeUser}  data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
