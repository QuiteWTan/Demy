import FirstSection from './FirstSection/FirstSection'
import Company from './FirstSection/Company'
import SearchCourses from './SecondSection/SearchCourses'
import FavouriteCourses from './ThirdSection/FavouriteCourses'
import PopularCoursesList from './FourthSection/PopularCoursesList'

const LandingPage = ( ) => {
    return(
        <div className=''>
            <FirstSection/>
            <SearchCourses/>
            <FavouriteCourses/>
            <PopularCoursesList/>
        </div>
    )

}

export default LandingPage;
