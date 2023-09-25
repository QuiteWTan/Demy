const Footer = ( ) => {
    return (
        <div className="w-full bg-[#7c9c94] py-8 px-12 lg:px-24 text-white font-poppins hidden md:flex justify-center">
            <div className="max-w-[1200px] grid grid-rows-3 grid-cols-2 md:grid-rows-none md:grid-cols-feat gap-x-7 gap-y-6">
                <div>
                    <h1 className="text-4xl md:text-3xl font-semibold  font-poppins pb-4">Demy</h1>
                    <h1 className=" text-lg font-bold pb-4">Explore</h1>
                    <ul className="text-sm flex flex-col gap-2">
                        <li>Home</li>
                        <li>Partner</li>
                        <li>Course</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className=" text-lg font-bold pb-4">Other</h1>
                    <ul className="text-sm flex flex-col gap-2">
                        <li>Promotions</li>
                        <li>Interns</li>
                        <li>Social</li>
                        <li>News</li>
                        <li>Blog</li>
                        <li>Events</li>
                        <li>Terms</li>
                        <li>Policy</li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h1 className=" text-lg font-bold ">Contact Us</h1>
                    <div className="text-sm  ">
                        <p className="">- Call: +62 892 738 973</p>
                        <p>- Email: demy123@gmail.com</p>
                        <p className="py-2 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="flex flex-row py-4 gap-4">
                        <div className="bg-white flex items-center p-1 rounded-md ">
                            <box-icon type='logo' name='facebook' color='#7c9c94' size='md'></box-icon>
                        </div>
                        <div className="bg-white flex items-center p-1 rounded-md ">
                            <box-icon name='instagram-alt' type='logo' color='#7c9c94' size='md'></box-icon>
                        </div>
                        <div className="bg-white flex items-center p-1 rounded-md ">
                            <box-icon type='logo' name='twitter' color='#7c9c94' size='md'></box-icon>
                        </div>
                        <div className="bg-white flex items-center p-1 rounded-md ">
                        <box-icon type='logo' name='tiktok' color='#7c9c94' size='md'></box-icon>   
                        </div>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h1 className=" text-lg font-bold pb-4">Subscribe to our Newsletter</h1>
                    <p className="py-2 text-sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <input type="text" placeholder="Type your Email" className="text-sm outline-none px-4 py-2 rounded-md text-gray-600 w-full"/>
                    <button className="bg-[#7c9c94] opacity-75 hover:opacity-100 duration-3000 transition-all py-2 px-6 text-white text-lg font-poppins rounded-md mt-3 border-2 border-white">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;