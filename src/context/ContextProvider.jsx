import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    userProfile: false,
    notification: false,
    createInterview: false,
    chat: false,

}

const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#4f31d4');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);
    const [isEditable, setIsEditable] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [bio, setBio] = useState("");
    const [company, setCompany] = useState("");
    const [job_title, setJobTitle] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [summary, setSummary] = useState("");
    const [resume, setResume] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [skillLevel, setSkillLevel] = useState("");
    const [interviewType, setInterviewType] = useState("");
    const [isInterviewOn, setIsInterviewOn] = useState(false);
    const [interviews, setInterviews] = useState([]);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider
            value={{
                currentColor, 
                currentMode, 
                activeMenu, 
                screenSize, 
                jobRole,
                setScreenSize, 
                handleClick, 
                isClicked, 
                initialState, 
                setIsClicked, 
                setActiveMenu, 
                setCurrentColor, 
                setCurrentMode, 
                setMode, 
                setColor, 
                themeSettings, 
                setThemeSettings,
                isEditable,
                firstname,
                surname,
                bio,
                company,
                job_title,
                start_date,
                end_date,
                summary,
                resume,
                skillLevel,
                interviewType,
                isInterviewOn,
                interviews,
                setIsEditable,
                setFirstname,
                setSurname,
                setBio,
                setCompany,
                setJobTitle,
                setStartDate,
                setEndDate,
                setSummary,
                setResume,
                setJobRole,
                setSkillLevel,
                setInterviewType,
                setIsInterviewOn,
                setInterviews
            }}
        >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
export const useStateContext = () => useContext(StateContext);