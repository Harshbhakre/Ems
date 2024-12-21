import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null);




useEffect(() => {
  const {employees,admin} = getLocalStorage()
  setUserData({employees,admin})
}, []); 

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider