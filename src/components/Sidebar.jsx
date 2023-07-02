import React from "react";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import { MdOutlineCancel, MdOutlineSupportAgent } from 'react-icons/md';
import { AiOutlineHome, AiOutlineContacts, AiOutlineFileText } from 'react-icons/ai';
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-2.5 pb-2.5 pr-20 rounded-full text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-2.5 pb-2.5 pr-20 rounded-full text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();
  
  function logOut() {
    signOut();
    navigate('/login');
  }

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="ml-3 mr-10 w-full h-screen md:overflow-hidden pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <MdOutlineSupportAgent /> <span>InterviewGPT</span>
            </Link>
          </div>
          <div className="pl-30 mt-10 ">
              <div key="home">
                <NavLink
                  to={'/'}
                  key={'home'}
                  onClick={() => {}}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <AiOutlineHome />
                  <span className="capitalize ">home</span>
                </NavLink>
              </div>
              <div key="interview">
                <NavLink
                  to={'/interview-menu'}
                  key={'interview'}
                  onClick={() => {}}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <AiOutlineContacts />
                  <span className="capitalize ">interview</span>
                </NavLink>
              </div>
              <div key="resume">
                <NavLink
                  to={'/resume'}
                  key={'resume'}
                  onClick={() => {}}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <AiOutlineFileText />
                  <span className="capitalize ">resume</span>
                </NavLink>
              </div>
          </div>
      </>
    )}
    </div>
    
  );
};

export default Sidebar;