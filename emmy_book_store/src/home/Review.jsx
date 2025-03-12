// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaCartShopping } from "react-icons/fa6";
//react icon
import{FaStar} from "react-icons/fa6"
import { Avatar } from "flowbite-react";
import profile from "../assets/profile.jpeg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
 
// Import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Out Customer</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga eaque ab ut dicta iste voluptate eos! Neque vero vitae dolor at. Nobis nesciunt totam maxime consequuntur adipisci odio fugiat!</p>
              <Avatar className="w-16 h-16 rounded-full" img={profile} alt="avatar of Jese" rounded />
              <h2 className="text-lg font-medium">Mark Ping</h2>
              <p className="text-base">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga eaque ab ut dicta iste voluptate eos! Neque vero vitae dolor at. Nobis nesciunt totam maxime consequuntur adipisci odio fugiat!</p>
              <Avatar className="w-16 h-16 rounded-full" img={profile} alt="avatar of Jese" rounded />
              <h2 className="text-lg font-medium">Mark Ping</h2>
              <p className="text-base">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga eaque ab ut dicta iste voluptate eos! Neque vero vitae dolor at. Nobis nesciunt totam maxime consequuntur adipisci odio fugiat!</p>
              <Avatar className="w-16 h-16 rounded-full" img={profile} alt="avatar of Jese" rounded />
              <h2 className="text-lg font-medium">Mark Ping</h2>
              <p className="text-base">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga eaque ab ut dicta iste voluptate eos! Neque vero vitae dolor at. Nobis nesciunt totam maxime consequuntur adipisci odio fugiat!</p>
              <Avatar className="w-16 h-16 rounded-full" img={profile} alt="avatar of Jese" rounded />
              <h2 className="text-lg font-medium">Mark Ping</h2>
              <p className="text-base">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga eaque ab ut dicta iste voluptate eos! Neque vero vitae dolor at. Nobis nesciunt totam maxime consequuntur adipisci odio fugiat!</p>
              <Avatar className="w-16 h-16 rounded-full" img={profile} alt="avatar of Jese" rounded />
              <h2 className="text-lg font-medium">Mark Ping</h2>
              <p className="text-base">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga eaque ab ut dicta iste voluptate eos! Neque vero vitae dolor at. Nobis nesciunt totam maxime consequuntur adipisci odio fugiat!</p>
              <Avatar className="w-16 h-16 rounded-full" img={profile} alt="avatar of Jese" rounded />
              <h2 className="text-lg font-medium">Mark Ping</h2>
              <p className="text-base">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review