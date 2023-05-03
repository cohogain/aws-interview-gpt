import {Amplify, Auth} from 'aws-amplify';
import awsmobile from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateProfile, Interview } from './pages';

Amplify.configure(awsmobile);

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div>
          <Routes>
              <Route exact path="/" element={<CreateProfile />} />
              <Route path="/interview" element={<Interview />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App


