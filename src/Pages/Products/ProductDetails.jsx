import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";


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
        <div>

            <div className="flex gap-8 my-10 bg-slate-50 shadow-xl">
                {/* left side */}
                <div className="w-full flex flex-col justify-center items-center">
                    <img src={photo} alt="" className="w-1/2" />
                    {/* review */}
                    <div>
                        {
                            review.map(rev =>
                                <div key={rev._id}>
                                    <h1>Reviewr: {rev.reviewer}</h1>
                                    <h2>rating: {rev.rating}</h2>
                                    <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                                        <button className="btn" onClick={handleLike}>
                                            Like {reaction === 'like' ? 1 : 0} <AiFillLike />
                                        </button>
                                        <button className="btn" onClick={handleDislike}>
                                            Dislike {reaction === 'dislike' ? 1 : 0} <AiFillDislike />
                                        </button>

                                    </div>
                                </div>
                            )
                        }



                    </div>
                </div>
                {/* right side */}
                <div className="w-full">
                    <h1>{name}</h1>
                    <h2>{brand}</h2>

                    <p>{description}</p>
                    <p>{availability}</p>
                    <h4>{price}</h4>


                    <form onSubmit={handlereview} className="mt-2">

                        <div className="flex gap-2">
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
                                                <FaRegStar
                                                    className="cursor-pointer text-2xl"
                                                    color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
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

                        <textarea name="review" placeholder="type your review" className="textarea textarea-bordered w-full" required></textarea>
                        <input type="submit" value="Review" className="bg-slate-700 px-2 py-1 md:px-3 md:py-2 text-white cursor-pointer mt-2 rounded-md text-sm md:text-base" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
