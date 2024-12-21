import React from "react";
import Headers from "../others/Headers";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  
  return (
    <div className="p-7 h-screen w-full bg-black">
      <Headers changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  ); 
};

export default AdminDashboard;
