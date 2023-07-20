import SecondSection from '../assets/SecondSection.png'
import CourseRender from './CourseRender'
const PopularCoursesList = () => {
    const TopCourses = [
        {
            id:1,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
        {
            id:2,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
        {
            id:3,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
        {
            id:4,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
        {
            id:5,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
        {
            id:6,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
        {
            id:7,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
        {
            id:8,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
        {
            id:9,
            Image:SecondSection,
            Type:"Computer",
            Title:'Code A React Website Tutorial | ReactJS Tutorial For Beginners',
            EnrolledTotal:'640',
            Price:'640$',
        },
    ]

    return(
        <div className='w-full flex flex-col section justify-center items-center bg-gray-100'>
            <div className='max-w-[1300px] flex flex-col mx-auto'>
                <h1 className="text-4xl font-poppins"><span className="text-[#7c9c94] font-bold ">Top courses</span> you might interested in</h1>
                <div className='mt-12 overflow-x-hidden w-full'>
                    <div className='flex gap-8 lg:w-full md:w-[170%] sm:w-[340%] w-[480%] animate-slide'>
                        {TopCourses.map((Course) => (
                            <CourseRender key={Course.id} {...Course}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCoursesList