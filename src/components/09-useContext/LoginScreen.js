import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const {setUser} = useContext(UserContext);
  const userNew = {
    id:123,
    name:'Ricardo'
  }
  return <div>
    <h1>LoginScreen</h1>
    <hr/>
    <button 
      className='btn btn-primary'
      onClick={()=>setUser(userNew)}
    >Login</button>
  </div>;
};
