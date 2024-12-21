import React, { useContext, useEffect } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [AuthData] = useContext(AuthContext)

const [user, setUser] = useState(null);
const [loggedInUserData, setLoggedInUserData] = useState(null);

useEffect(() => {
  if (user) {
    console.log('User state updated:', user);
  }
}, );

useEffect(() => {
  
    const LoggedInUser = localStorage.getItem("loggedInUser")
    if(LoggedInUser){
      const userData = JSON.parse(LoggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
 

}, []);


const handleLogin = (email, password) => {
  if (email == "admin@e.com" && password == "123") {
    setUser('admin');
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  } else if (AuthData){
    const employee =AuthData.employees.find((e)=>email === e.email && password === e.password)
    if(employee){
      setUser(employee);
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
    
  } else {
    alert('Invalid credentials');
  }
};

  return (
    <div> 
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user === 'admin' ? (
      <AdminDashboard changeUser={setUser}/>
    ) : (
      user == "employee"?<EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>:null
    )}
  </div>
  )
}

export default App



