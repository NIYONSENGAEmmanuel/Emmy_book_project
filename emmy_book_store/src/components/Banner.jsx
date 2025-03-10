import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 items-center'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='space-y-8 md:w-1/2 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>For the best praces</span></h2>
                <p className='md:w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit ex voluptatem porro nemo aperiam. Sunt a earum dolores praesentium explicabo, repudiandae dolorem officiis, facere illo maxime molestiae? Iste, minima.</p>
                <div>
                    <input className='py-2 px-2 rounded-s-sm outline-none bg-white' type="search" name='search' id='search' placeholder='Search a book' />
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'> Search</button>
                </div>
            </div>
            {/* right side  */}
            <div>
           <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner