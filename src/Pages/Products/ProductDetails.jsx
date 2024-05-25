import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { FaRegStar, FaStar } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa6';


const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [reaction, setReaction] = useState(null);
    const [review, setReview] = useState([])
    const axiosPublic = useAxiosPublic()
    const details = useLoaderData();
    const { name, photo, description, price, availability, brand, _id } = details || {};
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleLike = () => {
        setReaction(reaction === 'like' ? null : 'like');
    };

    const handleDislike = () => {
        setReaction(reaction === 'dislike' ? null : 'dislike');
    };

    const date = new Date();
    const justDate = date.toISOString().split('T')[0];

    const handlereview = e => {
        e.preventDefault();

        if (user) {
            const form = e.target;
            const review = form.review.value;
            const rating = form.rating.value;
            const reviewdata = { review, commentid: _id, reviewer: user.displayName, reviewerEmail: user.email, date: justDate, rating }
          
            axiosPublic.post('/review', reviewdata)
            .then(res => {
                console.log(res.data);
                form.reset()
            })
        }
       else {
        return navigate('/login')
       }
    
    }
    useEffect(() => {
        axiosPublic.get('/review')
            .then(res => {
                const allreview = res.data;
                const reviews = allreview.filter(review => review.commentid === _id);
                setReview(reviews)
            })
    }, [])

    return (
        <div className="bg-slate-100 pb-6">

            <div className="flex gap-8 my-10  max-w-6xl mx-auto">
                {/* left side */}
                <div className="w-full flex flex-col justify-center items-center">
                    <img src={photo} alt="" className="w-1/2" />
                  
                </div>
                {/* right side */}
                <div className="w-full py-8  flex flex-col justify-between">
                   <div className="space-y-2">
                   <h1 className="text-xl font-semibold">{name}</h1>
                    <h2 className="text-lg font-semibold">{brand}</h2>

                    <p className="text-gray-500">{description}</p>
                    <p className="font-semibold">Availablity: {availability}</p>
                    <h4 className="font-semibold">Price: {price}</h4>
                   </div>


                    <form onSubmit={handlereview} className="mt-2 space-y-2">

                       

                        <textarea name="review" placeholder="type your review" className="textarea textarea-bordered w-full" required></textarea>
                        <div className="flex gap-2 pb-3">
                            {
                                [...Array(5)].map((star, i) => {
                                    const currentRating = i + 1;
                                    return (
                                        <div key={i}>
                                            <div className="relative">
                                                <input
                                                    className="absolute top-2 left-[5px] cursor-pointer opacity-0"
                                                    type="radio"
                                                    name="rating"
                                                    value={currentRating}
                                                    onClick={() => setRating(currentRating)}
                                                    required
                                                />
                                                <FaStar
                                                    className="cursor-pointer text-2xl"
                                                    color={currentRating <= (hover || rating) ? '#ffc107' : '#000000'}
                                                    onMouseEnter={() => setHover(currentRating)}
                                                    onMouseLeave={() => setHover(null)}
                                                />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            {rating}
                        </div>
                        <input type="submit" value="Review" className="bg-slate-700 px-2 py-1 md:px-3 md:py-2 text-white cursor-pointer  mt-5 rounded-md text-sm md:text-base " />
                       
                    </form>


                </div>

                
            </div>
              {/* review */}
              <div className=" max-w-6xl mx-auto mb-10">
                <h1 className="text-base md:text-lg lg:text-2xl font-bold my-8">Reviews</h1>
                   

            {
                review.length > 0 ? 

                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
      
                {
                      review.map( review => 
                      
                      
                      <SwiperSlide>
                          <div className='bg-cyan-200 rounded-xl  flex flex-col text-black font-semibold p-6 '>
                          <p>{review?.review}</p>
      
                         <div className='flex justify-between mt-4'>
                         <div className='flex'>
                          <span><FaQuoteLeft /></span>
                          <h3> {review?.reviewer}</h3>
                          </div>
      
                          <div className='flex items-center gap-1'>
                              <FaStar></FaStar>
                              <span>{review?.rating}</span>
                          </div>
                         </div>
                         <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-3">
                                              <button className="btn " onClick={handleLike}>
                                              <AiFillLike />
                                                   {reaction === 'like' ? 1 : 0} 
                                              </button>
                                              <button className="btn" onClick={handleDislike}>
                                              <AiFillDislike />
                                                 {reaction === 'dislike' ? 1 : 0} 
                                              </button>
      
                                          </div>

                        <div className="flex gap-1 mt-4">
                        <input type="text" placeholder="reply" className="input input-bordered " />
                        <button className="btn">Reply</button>
                        </div>
      
                          </div>
                      </SwiperSlide>)
                }
                   
               
                
              
              
              </Swiper> : 
              <h1 className="text-xl font-bold text-black pb-5"> No review</h1>
            }



                    </div>
        </div>
    );
};

export default ProductDetails;
