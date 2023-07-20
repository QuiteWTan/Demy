const CourseRender = ({Image,Type,Title,EnrolledTotal,Price}) => {
    return(
        <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md z-1">
            <img src={Image} alt="" className="w-full"/>
            <div className="font-Robot pt-3 text-md text-[#7c9c94]">{Type}</div>
            <div className="text-sm font-poppins font-bold">{Title}</div>
            <div className="flex flex-row justify-between pt-8">
                <div className="flex flex-row gap-2 items-center">
                    <box-icon name='user' size='20px'></box-icon>
                    <h1 className="font-poppins">{EnrolledTotal}</h1>
                </div>
                <h1 className="font-poppins ">{Price}</h1>
            </div>
        </div>
    )
}

export default CourseRender