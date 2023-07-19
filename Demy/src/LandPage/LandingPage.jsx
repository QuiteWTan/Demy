import FirstSection from '../assets/FirstSection1.png'
const LandingPage = ( ) => {
    return(
        <div className='max-w-[1300px] flex flex-col mx-auto'>
            <div className='flex flex-col md:flex-row w-full justify-center px-10'>
                <div className='w-full'>
                    <img src={FirstSection} alt="" className='w-[90%] pt-10'/>
                </div>
                <div className='md:w-[65%] lg:w-full flex flex-col pt-[50px]'>
                    <h1 className='text-[#7c9c94] text-2xl lg:text-3xl font-caveat'>Follow Your Journey</h1>
                    <h2 className='text-2xl lg:text-4xl font-poppins font-semibold py-4'>Unlock your potential with our diverse course catalog, offering a wide range of subjects to enhance your skills and knowledge.</h2>
                    <p className='text-md font-Robot text-gray-400'>Gain Access to 2000+ courses from all different subject to your liking!</p>
                    <div className=''>
                        <button className='py-2 text-white bg-[#7c9c94] px-4 rounded-md'>Get Started</button>
                        <button className='p-2 px-6'>
                            <h1 className='py-2 border-[#7c9c94] outline-[#7c9c94] border-2 px-4 rounded-md text-[#7c9c94]'>
                                Discover
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center pt-16'>
                <h1 className='font-Robot text-xl'>Partnered by Multinational Company Around the World</h1>
                <h2 className='text-gray-400 font-poppins'>Find your creativity by collaborating with the experienced coachers around the world</h2>
            </div>
        </div>
    )

}

export default LandingPage;
