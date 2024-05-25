import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useAxiosPublic from '../../Hooks/useAxioPublic';
import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa6';


const ClientReview = () => {
    const axiosPublic = useAxiosPublic()
    const [ reviews, setReviews] = useState([])
    useEffect( ()=> {
        axiosPublic.get('/review')
        .then( res => setReviews(res.data))
    }, [])
    console.log(reviews);
    return (
        <div className='my-14 max-w-6xl mx-auto px-4 md:px-6 lg:px-0'>
            <h1 className='text-base md:text-xl lg:text-2xl my-8 text-black font-bold'>What Customer say about <br></br> GREENMIND?</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`mySwiper `}
        >

          {
                reviews.map( review => 
                
                
                <SwiperSlide>
                    <div className='bg-cyan-200 rounded-xl h-48 flex flex-col text-black font-semibold p-2 lg:p-12'>
                    <p>{review?.review}</p>

                   <div className='flex flex-col items-center lg:flex-row justify-between mt-4'>
                   <div className='flex'>
                    <span><FaQuoteLeft /></span>
                    <h3> {review?.reviewer}</h3>
                    </div>

                    <div className='flex  items-center gap-1'>
                        <FaStar></FaStar>
                        <span>{review?.rating}</span>
                    </div>
                   </div>

                    </div>
                </SwiperSlide>)
          }
             
         
          
        
        
        </Swiper>
      </div>
    );
};

export default ClientReview;