import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaShare } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const ProductDetails = () => {
    const [reaction, setReaction] = useState(null); 

    const details = useLoaderData();
 
    const { name, photo, description, price, availability, brand } = details || {};
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleLike = () => {
        setReaction(reaction === 'like' ? null : 'like');
    };

    const handleDislike = () => {
        setReaction(reaction === 'dislike' ? null : 'dislike');
    };

    return (
        <div>
            <div className="flex gap-8 my-10 bg-slate-50 shadow-xl">
                <div className="w-full flex justify-center">
                    <img src={photo} alt="" className="w-1/2" />
                </div>
                <div className="w-full">
                    <h1>{name}</h1>
                    <h2>{brand}</h2>
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
                    <p>{description}</p>
                    <p>{availability}</p>
                    <h4>{price}</h4>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                        <button className="btn" onClick={handleLike}>
                            Like {reaction === 'like' ? 1 : 0} <AiFillLike />
                        </button>
                        <button className="btn" onClick={handleDislike}>
                            Dislike {reaction === 'dislike' ? 1 : 0} <AiFillDislike />
                        </button>
                        <button className="btn">
                            Share <FaShare />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
