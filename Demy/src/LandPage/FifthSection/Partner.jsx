import PartnerImage from '../assets/Partner.png'
import FAQ from './FAQ'

const Partner = () => {
    const Questions = [
        {
            Question:'What is Demy',
            Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            Question:'What are your vision',
            Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            Question:'What are your mission',
            Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            Question:'Can Demy work on IOS ',
            Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            Question:'Is it beginner friendly',
            Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },

    ]
    return(
        <div className='w-full flex flex-col section justify-center items-center bg-gray-100'>
            <div className='max-w-[1300px] flex flex-col mx-auto'>
                <div className="flex flex-col md:flex-row items-center text-center">
                    <div className='w-[90%] flex items-center justify-center'>
                        <img src={PartnerImage} alt="" className='w-[90%]'/>
                    </div>
                    <div className='w-full md:w-[60%] lg:w-full flex flex-col items-center'>
                        
                        <h1 className='text-3xl lg:text-6xl font-ysa max-w-[500px] py-4'>Any thoughts on contributing to <span className='text-[#7c9c94] font-bold '>DEMY</span> ?</h1>
                        <p className="text-md lg:text-lg max-w-[900px] py-6 font-ysa">Looking for a skilled tutor to join our academy website? We seek experienced educators proficient in various subjects, dedicated to guiding and empowering students. Apply now to be part of a dynamic teaching team, fostering growth, and facilitating a rewarding learning experience for our students.</p>
                        <p className='text-md font-Robot text-gray-400 py-2'>What are you waiting for ? Hop in!</p>
                        <div className='flex items-center w-full justify-center'>
                            
                            <button className='py-2 text-lg text-white bg-[#7c9c94] px-24 rounded-md opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300'>Join Us!</button>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="mt-16 text-4xl font-ysa font-bold text-center py-4">FREQUENTLY ASKED QUESTIONS</h1>
                    <div className='flex flex-col py-6 gap-y-4 w-[90%] md:w-[70%]'>
                        {Questions.map((Q,index) => (
                            <FAQ Ques={Q.Question} Ans={Q.Answer} i={index}/>
                        ))
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Partner