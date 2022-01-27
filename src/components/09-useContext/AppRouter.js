import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    
  return (
    <Router>
        <div>
            <NavBar/>
            <div className='container'>
              <Routes>
                  {/* <Route path='/about' component={AboutScreen}/> */}
                  {/* <Route path="/about" component={AboutScreen} /> */}
                  <Route exact path="/about" element={<AboutScreen />} />
                  <Route exact path="/login" element={<LoginScreen />} />
                  <Route exact path="/" element={<HomeScreen />} />
                  <Route path="*" element={<Navigate to="/" />}/>
              </Routes>
            </div>
        </div>
    </Router>
  );
};
