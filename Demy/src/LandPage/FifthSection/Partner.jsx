import PartnerImage from '../assets/Partner.png'

const Partner = () => {
    return(
        <div className='w-full flex flex-col section justify-center items-center bg-gray-100'>
            <div className='max-w-[1300px] flex flex-col mx-auto'>
                <div className="flex flex-row items-center text-center">
                    <div className='w-[90%] '>
                        <img src={PartnerImage} alt="" className='w-[90%]'/>
                    </div>
                    <div className='w-full md:w-[60%] lg:w-full flex flex-col items-center'>
                        
                        <h1 className='text-6xl font-ysa max-w-[500px] py-4'>Any thoughts on contributing to <span className='text-[#7c9c94] font-bold '>DEMY</span> ?</h1>
                        <h2 className='text-xl font'></h2>
                        <p className="text-lg max-w-[900px] py-6 font-ysa">Looking for a skilled tutor to join our academy website? We seek experienced educators proficient in various subjects, dedicated to guiding and empowering students. Apply now to be part of a dynamic teaching team, fostering growth, and facilitating a rewarding learning experience for our students.</p>
                        <p className='text-md font-Robot text-gray-400 py-2'>What are you waiting for ? Hop in!</p>
                        <div className='flex items-center w-full justify-center'>
                            
                            <button className='py-2 text-lg text-white bg-[#7c9c94] px-24 rounded-md opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300'>Join Us!</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner