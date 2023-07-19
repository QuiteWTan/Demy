import FirstSection1 from '../assets/FirstSection1.png'
import Company from './Company'
const FirstSection = () => {
    return(
        <div className='max-w-[1300px] flex flex-col section '>
            <div className='flex flex-col md:flex-row w-full justify-center'>
                <div className='w-full'>
                    <img src={FirstSection1} alt="" className='w-[90%]'/>
                </div>
                <div className='w-full md:w-[60%] lg:w-full flex flex-col'>
                    <h1 className='text-[#7c9c94] text-2xl lg:text-3xl font-caveat'>Follow Your Journey</h1>
                    <h2 className='text-3xl md:text-xl lg:text-4xl font-poppins font-semibold py-4'>Unlock your potential with our diverse course catalog, offering a wide range of subjects to <span className='text-[#7c9c94] '>enhance your skills and knowledge.</span></h2>
                    <p className='text-md font-Robot text-gray-400'>Gain Access to 2000+ courses from all different subject to your liking!</p>
                    <div className=''>
                        <button className='py-2 text-white bg-[#7c9c94] px-4 rounded-md opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300'>Get Started</button>
                        <button className='p-2 px-6'>
                            <h1 className='py-2 border-[#7c9c94] outline-[#7c9c94] border-2 px-4 rounded-md text-[#7c9c94] hover:opacity-100 hover:scale-110 transition-all duration-300'>
                                Discover
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
            <Company/>
        </div>
    )

}

export default FirstSection
