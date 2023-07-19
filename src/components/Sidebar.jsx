import React from "react";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import { MdOutlineCancel, MdOutlineSupportAgent } from 'react-icons/md';
import { AiOutlineHome, AiOutlineContacts, AiOutlineFileText, AiOutlineSetting, AiOutlineInfoCircle} from 'react-icons/ai';
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const activeLink = 'flex items-center gap-5 py-2.5 text-md text-gray-700';

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
    <div className="border-r border-gray-500 ml-3 mr-10 w-1/4 h-screen md:overflow-hidden pb-10">
      <div className="w-full h-full">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <MdOutlineSupportAgent /> <span>InterviewGPT</span>
            </Link>
          </div>
          <div className="border-b border-gray-300 my-4"></div>
          <div className="pl-30 mt-2">
              <div key="home">
                <NavLink
                  to={'/'}
                  key={'home'}
                  onClick={() => {}}
                  style={({ isActive }) => ({
                    borderRightColor: isActive ? currentColor : 'transparent',
                    borderRightWidth: '4px'
                  })}
                  //className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  className={ activeLink }
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
                    borderRightColor: isActive ? currentColor : 'transparent',
                    borderRightWidth: isActive ? '4px' : '',
                  })}
                  // className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  className={ activeLink }
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
                    borderRightColor: isActive ? currentColor : 'transparent',
                    borderRightWidth: isActive ? '4px' : '',
                  })}
                  // className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  className={ activeLink }
                >
                  <AiOutlineFileText />
                  <span className="capitalize ">resume</span>
                </NavLink>
              </div>
            </div>
            
            <div className="bottom-4 border-b border-gray-300 my-4"></div>
            <div>
              <NavLink 
                to={'/settings'}
                onClick={() => {}}
                className={activeLink}
              >
                <AiOutlineSetting />
                <span className="capitalize">settings</span>
              </NavLink>
              <NavLink 
                to={'/about'}
                onClick={() => {}}
                className={activeLink}
              >
                <AiOutlineInfoCircle />
                <span className="capitalize">about</span>
              </NavLink>
            </div>
      </>
    )}
    </div>
    </div>
    
  );
};

export default Sidebar;