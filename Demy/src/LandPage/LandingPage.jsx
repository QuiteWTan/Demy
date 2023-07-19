import FirstSection from './FirstSection/FirstSection'
import Company from './FirstSection/Company'
import SearchCourses from './SecondSection/SearchCourses'
import FavouriteCourses from './ThirdSection/FavouriteCourses'

const LandingPage = ( ) => {
    return(
        <div className=''>
            <FirstSection/>
            <SearchCourses/>
            <FavouriteCourses/>
        </div>
    )

}

export default LandingPage;
