import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
    // const user = {
    //     id: 123,
    //     name: 'Ricardo',
    //     email:'rchecalla@cmactacna.com.pe'
    // }
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppRouter/>
        </UserContext.Provider>
    );
//   return <div>
//     <h1>MainApp</h1>
//     <hr/> 
//     <AppRouter/>
//   </div>;
};
