const Company = () => {
    return( 
        <div className='max-w-[1300px] flex flex-col mx-auto'>
            <div className='text-center pt-16 '>
                <h1 className='font-bold text-xl font-montserrat'>Partnered by Multinational Company Around the World</h1>
                <h2 className='text-gray-400 font-poppins'>Find your creativity by collaborating with the experienced coachers around the world</h2>
                <ul className='pt-6 grid grid-cols-2 md:grid-cols-4 justify-center gap-6 md:px-20'>
                    <li className='flex items-center justify-center border-slate-700 border-2 rounded-md px-3 py-2'>
                        <box-icon type='solid' name='camera-home' size='24px' color='#708090'></box-icon>
                        <h1 className='text-xl font-Robot font-semibold px-1 text-[#708090]'>Otter</h1>
                    </li>
                    <li className='flex items-center justify-center border-slate-700 border-2 rounded-md px-3 py-2'>
                        <box-icon name='home-smile' size='24px' color='#708090' ></box-icon>
                        <h1 className='text-xl font-Robot font-semibold px-1 text-[#708090]'>Beaver</h1>
                    </li>
                    <li className='flex items-center justify-center border-slate-700 border-2 rounded-md px-3 py-2'>
                        <box-icon name='shape-square' size='24px' color='#708090' ></box-icon>
                        <h1 className='text-xl font-Robot font-semibold px-1 text-[#708090]'>Hippo</h1>
                    </li>
                    <li className='flex items-center justify-center border-slate-700 border-2 rounded-md px-3 py-2'>
                        <box-icon name='analyse' type='solid' size='24px' color='#708090' ></box-icon>
                        <h1 className='text-xl font-Robot font-semibold px-1 text-[#708090]'>Cattos</h1>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Company;