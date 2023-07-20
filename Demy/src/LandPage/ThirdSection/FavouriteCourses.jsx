import SecondSection from '../assets/SecondSection.png'
const FavouriteCourses = () => {
    const FavouriteCourses = [
        {
            Icon:<box-icon type='solid' name='component' size='60px' color='#7c9c94'></box-icon>,
            Title:'Computer',
            EnrolledTotal:'640',
        },
        {
            Icon:<box-icon name='scatter-chart' size='60px' color='#7c9c94'></box-icon>,
            Title:'Chemistry',
            EnrolledTotal:'640',
        },
        {
            Icon:<box-icon name='circle-three-quarter' type='solid' size='60px' color='#7c9c94'></box-icon>,
            Title:'Accounting',
            EnrolledTotal:'640',
        },
        {
            Icon:<box-icon name='objects-horizontal-center' type='solid' size='60px' color='#7c9c94'></box-icon>,
            Title:'Physics',
            EnrolledTotal:'640',
        },
        
    ]
    return(
        <div className="max-w-[1300px] flex flex-col text-center justify-center items-center section">
            <h1 className="text-3xl font-Robot"><span className="text-[#7c9c94] font-bold ">Top Seller</span> Among Our Courses</h1>
            <p className="text-sm md:text-md max-w-[900px] py-6 font-poppins">Unlock your potential with our top-selling courses at our esteemed academy website. From cutting-edge technology to business essentials and creative arts, our expert-led courses deliver practical knowledge and skills for success. Join thousands of satisfied learners and embark on your transformative educational journey today!</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-4 text-[#7c9c94]'>
                {FavouriteCourses.map((Fav,index) => (
                    <div className='flex flex-col justify-center items-center py-4 px-16 bg-white shadow-xl border hover:scale-110 duration-300 transition-all'  key={index}>
                        {Fav.Icon}
                        <h1 className='text-xl font-Robot'>{Fav.Title}</h1>
                        <h2 className='text-lg font-Robot'>({Fav.EnrolledTotal})</h2>
                        <button className='pt-8 font-poppins font-bold text-gray-400'>View More</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FavouriteCourses