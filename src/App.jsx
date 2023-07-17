import {Amplify, Auth} from 'aws-amplify';
import awsmobile from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Resume, Interview, Home, InterviewStart } from './pages';
import { Authenticator } from '@aws-amplify/ui-react';
import { RequireAuth } from './RequireAuth';
import { Sidebar } from './components';
import './App.css'
import { useStateContext } from './context/ContextProvider';
import {
  Predictions,
  AmazonAIPredictionsProvider
} from '@aws-amplify/predictions';

Amplify.configure(awsmobile);
Predictions.addPluggable(new AmazonAIPredictionsProvider());

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <Authenticator className='flex relative bg-main-dark-bg overflow-hidden '>
    {({ signOut, user }) => (
      <div className='flex h-screen overflow-hidden'>
        <BrowserRouter>
          <div className={`fixed h-full overflow-hidden z-20 transition-all duration-300 ease-in-out mr-10 ${activeMenu ? 'w-72' : 'w-0'} bg-secondary-dark-bg bg-white`}>
            <Sidebar />
          </div>
          <div className='ml-80 w-full'>
          <Routes>
            <Route 
              path="/" 
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/interview-menu"
              element={
                <RequireAuth>
                  <InterviewStart />
                </RequireAuth>
              }
            />
            <Route
              path="/interview"
              element={
                <RequireAuth>
                  <Interview />
                </RequireAuth>
              }
            />
            <Route
              path="/resume"
              element={
                <RequireAuth>
                  <Resume />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    )}
    </Authenticator>
  );
}

export default App
