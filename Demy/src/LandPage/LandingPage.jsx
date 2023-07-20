import FirstSection from './FirstSection/FirstSection'
import Company from './FirstSection/Company'
import SearchCourses from './SecondSection/SearchCourses'
import FavouriteCourses from './ThirdSection/FavouriteCourses'
import PopularCoursesList from './FourthSection/PopularCoursesList'
import Partner from './FifthSection/Partner'
import Footer from './Footer/Footer'

const LandingPage = ( ) => {
    return(
        <div className=''>
            <FirstSection/>
            <SearchCourses/>
            <FavouriteCourses/>
            <PopularCoursesList/>
            <Partner/>
            <Footer/>
        </div>
    )

}

export default LandingPage;
