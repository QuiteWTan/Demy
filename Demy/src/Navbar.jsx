import { useState } from "react"

const Navbar = () => {
    
    return (
        <div className="w-full h-[65px] border-b-2">
            {/* Medium or more */}
            <div className="flex md:max-w-[1400px] max-w-[600px] m-auto flex-row justify-center md:justify-between items-center w-full h-full ">
                <div className="flex flex-row items-center gap-x-2 pl-4">
                    <box-icon type='solid' name='book-reader' size='md' color='#7c9c94'></box-icon>
                    <h1 className="text-4xl md:text-3xl font-semibold text-[#7c9c94] font-poppins pl">Demy</h1>
                </div>

                <ul className="hidden md:flex flex-row justify-between gap-x-8 font-poppins text-[15px]">
                    <li className='border-b-2 border-transparent hover:border-[#7c9c94] selection:transition-all duration-300'>Home</li>
                    <li className='border-b-2 border-transparent hover:border-[#7c9c94] selection:transition-all duration-300'>About</li>
                    <li className='border-b-2 border-transparent hover:border-[#7c9c94] selection:transition-all duration-300'>Courses</li>
                    <li className='border-b-2 border-transparent hover:border-[#7c9c94] selection:transition-all duration-300'>Partner</li>
                    <li className='border-b-2 border-transparent hover:border-[#7c9c94] selection:transition-all duration-300'>Contact</li>
                </ul>

                <div className="hidden md:flex flex-row gap-x-4">
                    <button className="flex justify-center items-center gap-1 bg-[#7c9c94] px-3 py-2 rounded-md">
                        <box-icon name='lock-alt' color='white'></box-icon>
                        <h1 className="text-white">Login</h1>
                    </button>
                    <button>
                        Sign Up
                    </button>
                </div>
            </div>

                           
            <div className='absolute bottom-0 w-full md:hidden bg-white  rounded-t-lg border-t-2 border-gray-300'>
                    
                    <div className="flex flex-row items-end justify-evenly w-full px-2 gap-24">
                        <div className="flex flex-row p-2 w-full justify-evenly"> 
                            <box-icon name='home' type='solid' size='45px' color='#7c9c94'></box-icon>
                            <box-icon type='solid' name='bookmarks' size='45px' color='#7c9c94'></box-icon>
                        </div>
                        <div className="flex flex-row p-2 w-full justify-evenly">
                            <box-icon type='solid' name='group' size='45px' color='#7c9c94'></box-icon>
                            <box-icon type='solid' name='contact' size='45px' color='#7c9c94'></box-icon>
                        </div>
                    </div>
            </div>

            <div className="md:hidden rounded-full bg-[#7c9c94] w-[90px] h-[90px] items-center flex justify-center z-12 absolute left-[50%] bottom-2 translate-x-[-50%] ">
                <box-icon type='solid' name='book' size='55px' color='white'></box-icon>
            </div>
           
        </div>
    )
}

export default Navbar