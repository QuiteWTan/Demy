import SecondSectionPic from '../assets/SecondSection.png'

const SearchCourses = () => {
    return(
        <div className='w-full flex flex-col section justify-center items-center bg-gray-100'>
            <div className='max-w-[1200px] flex flex-col mx-auto'>
                <div className='flex flex-col md:flex-row justify-center gap-6'>
                    <div className='w-full flex flex-col justify-center gap-y-2'>
                        <h1 className='text-xl font-Robot'>Any Courses You Interested In?</h1>
                        <h2 className='text-3xl text-[#7c9c94] font-Robot'>Tell Us Right Away!</h2>
                        <p className='text-lg font-poppins'>Discover our comprehensive academic website with, empowering learners to excel. Unlock your potential with expert instruction, interactive learning, and cutting-edge resources. Enroll now and shape your educational journey!</p>
                        <h1 className='text-lg text-gray-500 mt-10'>Find Your Courses Here</h1>
                        <div className='shadow-md px-4 py-2 w-[60%] flex justify-between items-center border bg-white'>
                            <input type="text"  className='outline-none text-xl bg-transparent' placeholder='Search Courses'/>
                            <box-icon name='search-alt-2' ></box-icon>
                        </div>
                    </div>
                    <div className='border-[#7c9c94] border-4 p-4 rounded-md'>
                        <img src={SecondSectionPic} alt="" className='rounded-md h-full'/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchCourses;