import {Amplify, Auth} from 'aws-amplify';
import awsmobile from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Resume, Interview, Home } from './pages';
import { Authenticator } from '@aws-amplify/ui-react';
import { RequireAuth } from './RequireAuth';
import { Sidebar } from './components';
import './App.css'

Amplify.configure(awsmobile);

const App = () => {
  return (
    <Authenticator>
    {({ signOut, user }) => (
      <div>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div>
            <Routes>
                <Route path="/" element={<Sidebar />}>
                  <Route index element={<Home />} />
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
                </Route>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
      </div>
    )}
    </Authenticator>
  );
}

export default App


