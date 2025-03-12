import React from 'react';

import FavBookImg from '../assets/favoritebooks.png'
import { Link } from 'react-router-dom';
const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-28 flex flex-col md:flex-row justify-between items-center"> 
        <div className="md:w-1/2">
<img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
        <h2 className=' text-5xl my-5 md:w-3/4 leading-snug font-bold'>Find Your Foverite <span className='text-blue-700'> Book Here</span> </h2>
        {/* stats */}
<p className='mb-10 text-lg md:m-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id doloremque, recusandae excepturi animi pariatur a perspiciatis, possimus laudantium harum dolores illum quod? Officiis architecto omnis labore eligendi quia exercitationem.</p>
<div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
  <div>
    
    <h2 className='text-3xl font-bold'>800+</h2>
    <p className='text-base'>Book Listing</p>
  </div>
  <div>
    <h2 className='text-3xl font-bold'>558+</h2>
    <p className='text-base'>Register User</p>
  </div>
  <div>
    <h2 className='text-3xl font-bold'>1200+</h2>
    <p className='text-base'>PDF Downloads</p>
  </div>
</div>
<Link className='mt-12 block' to="/shop"><button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300  ">Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook