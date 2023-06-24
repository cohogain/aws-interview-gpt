import React from 'react'
import agile from '../assets/agile.svg';
import ai from '../assets/artificial-intelligence.svg';
import coding from '../assets/coding.svg';
import seedling from '../assets/seedling.svg';
import tree from '../assets/tree.svg';
import telephone from '../assets/telephone.svg';
import interview from '../assets/interview.svg';
import interviewTask from '../assets/interviewTask.svg';
import halfEarthForest from '../assets/halfEarthForest.svg';
import { createInterview } from '../services/interviewService';
import { useStateContext } from '../context/ContextProvider';

const InterviewStart = () => {
    const { setJobRole, jobRole, setSkillLevel, skillLevel, interviewType, setInterviewType, interviewId, setInterviewId } = useStateContext();

    return (
        <div className='mt-12'>
            <h2 className="flex justify-center mt-10 text-lg font-medium text-gray-700 mb-3">Choose Your Job Title ...</h2> 
            <div className="flex relative flex-wrap pd-20 lg:flex-nowrap justify-center ">
                <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${jobRole === "DevOps" ? "bg-purple-700" : ""}`}>
                <div 
                    key="DevOps" 
                    className="bg-white card h-35 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                    onClick={() => (setJobRole("DevOps"))}>
                    <img className="w-10 h-10" alt="test" src={agile}/>
                    <div className='flex justify-between'>
                    <p className="text-sm text-bold text-gray-400 pt-2 pl-2">DevOps</p>
                    </div>
                </div>
                </div>
                <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${jobRole === "AI Engineer" ? "bg-purple-700" : ""}`}>
                <div 
                    key="AI Engineer" 
                    className="bg-white h-35 card dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                    onClick={() => (setJobRole("AI Engineer"))}>
                    <img className="w-10 h-10" alt="test" src={ai}/>
                    <div className='flex justify-between'>
                    <p className="text-sm text-gray-400  pt-2 pl-2">AI Engineer</p>
                    </div>
                </div>
                </div>
                <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${jobRole === "Software Engineer" ? "bg-purple-700" : ""}`}>
                <div 
                    key="Software Engineer"
                    className="bg-white h-35 card dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                    onClick={() => (setJobRole("Software Engineer"))}>
                    <img className="w-10 h-10" alt="test" src={coding}/>
                    <div className='flex justify-between'>
                    <p className="text-sm text-gray-400 pt-2 pl-2">Software Engineer</p>
                    </div>
                </div>
                </div>
            </div>

            <h2 className="flex justify-center text-lg mt-10 font-medium text-gray-700 mb-3">Choose Your Experience Level ...</h2> 
            <div className="flex relative flex-wrap lg:flex-nowrap justify-center ">
            <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${skillLevel === "Junior" ? "bg-purple-700" : ""}`}>
                <div 
                key="Junior" 
                className="bg-white card h-35 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                onClick={() => (setSkillLevel("Junior"))}>
                <img className="w-10 h-10" alt="test" src={seedling}/>
                <div className='flex justify-between'>
                    <p className="text-sm text-bold text-gray-400 pt-2 pl-2">Junior</p>
                </div>
                </div>
            </div>
            <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${skillLevel === "Mid-Senior" ? "bg-purple-700" : ""}`}>
                <div 
                key="Mid-Senior" 
                className="bg-white h-35 card dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                onClick={() => (setSkillLevel("Mid-Senior"))}>
                <img className="w-10 h-10" alt="test" src={tree}/>
                <div className='flex justify-between'>
                    <p className="text-sm text-gray-400  pt-2 pl-2">Mid-Senior</p>
                </div>
                </div>
            </div>
            <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${skillLevel === "Executive" ? "bg-purple-700" : ""}`}>
                <div 
                key="Executive"
                className="bg-white h-35 card dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                onClick={() => (setSkillLevel("Executive"))}>
                <img className="w-10 h-10" alt="test" src={halfEarthForest}/>
                <div className='flex justify-between'>
                    <p className="text-sm text-gray-400 pt-2 pl-2">Principle</p>
                </div>
                </div>
            </div>
            </div>

            <h2 className="flex justify-center text-lg mt-10 font-medium text-gray-700 mb-3">Choose Your Interview Type ...</h2> 
            <div className="flex relative flex-wrap lg:flex-nowrap justify-center ">
            <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${interviewType === "Phone Screen" ? "bg-purple-700" : ""}`}>
                <div 
                    key="Phone Screen"
                    className="bg-white h-35 card dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                    onClick={() => (setInterviewType("Phone Screen"))}>
                    <img className="w-10 h-10" alt="test" src={telephone}/>
                    <div className='flex justify-between'>
                    <p className="text-sm text-gray-400 pt-2 pl-2">Phone Screen</p>
                    </div>
                </div>
                </div>
                <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${interviewType === "Behavioral" ? "bg-purple-700" : ""}`}>
                <div 
                    key="Behavioral" 
                    className="bg-white card h-35 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                    onClick={() => (setInterviewType("Behavioral"))}>
                    <img className="w-10 h-10" alt="test" src={interview}/>
                    <div className='flex justify-between'>
                    <p className="text-sm text-bold text-gray-400 pt-2 pl-2">Behavioral</p>
                    </div>
                </div>
                </div>
                <div className={`flex m-3 flex-wrap p-0.5 justify-center rounded-2xl gap-1 items-center hover:drop-shadow-xl ${interviewType === "Technical" ? "bg-purple-700" : ""}`}>
                <div 
                    key="Technical" 
                    className="bg-white h-35 card dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 p-4 rounded-2xl "
                    onClick={() => (setInterviewType("Technical"))}>
                    <img className="w-10 h-10" alt="test" src={interviewTask}/>
                    <div className='flex justify-between'>
                    <p className="text-sm text-gray-400  pt-2 pl-2">Technical</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex relative mt-20 flex-wrap lg:flex-nowrap justify-center ">
            <button
                type="button"
                disabled={!jobRole || !skillLevel || !interviewType}
                onClick={async ()=> {
                const result = await createInterview({title: jobRole, experience: skillLevel, interviewType: interviewType});
                console.log(result.data.createInterview.id)
                setInterviewId(result.data.createInterview.id);
                }}
                className={`mt-2 text-white font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
                !jobRole || !skillLevel || !interviewType
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-700'
                }`}
            >
                Start Assessment
            </button>
            </div>
        </div>
    )
}

export default InterviewStart;
