import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator} from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, {useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { CreateProfile } from '../src/pages/CreateProfile';

Amplify.configure(awsconfig);

function App() {
  useEffect(() => {
  const updateInterview = async() => {
    const { attributes } = await Auth.currentAuthenticatedUser();
    console.log(attributes)
  };

  updateInterview();
  
}, []);
  return (
    <Authenticator>
      {/* <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div>
          <Routes>
              <Route path="/create" element={<CreateProfile />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter> */}
      {({ signOut, user }) => (
        <div className="App">
          <h1>Hello {user.email}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
    )}
    </Authenticator>
  );
}

export default withAuthenticator(App);


