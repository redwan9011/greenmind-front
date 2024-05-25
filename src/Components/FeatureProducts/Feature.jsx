import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import { Link } from "react-router-dom";



const Feature = () => {
    const axiosPublic = useAxiosPublic();
    const [ products, setProducts] = useState([]);

    useEffect (  ()=> {
        axiosPublic.get('/product')
        .then( res => setProducts(res.data.products))

    },[])
    
    return (
        <div className="my-14 max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
            <h1 className="text-center font-bold text-lg md:text-2xl lg:text-4xl mb-3 md:mb-5 lg:mb-7">Best selling Prodcucts</h1>
            <p></p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-8">

                {
                    products.slice(0,8).map( product => 
                        <div className="card card-compact " key={product._id}>
                        <figure><img src={product.photo} alt="Product" className="" /></figure>
                        <div className="flex flex-col gap-4 md:flex-row justify-between mt-3 items-center md:px-2 ">
                            <div>
                            <h2 className="font-semibold md:text-lg">{product.name}</h2>
                            <p className="font-semibold text-sm md:text-base">Price: {product.price}</p>
                            </div>
                          <div>
                          <Link to={`/product/${product._id}`} className="bg-cyan-300 px-3 py-2 text-sm md:text-base md:px-5 md:py-3 w-fit rounded-lg font-semibold hover:bg-cyan-700 duration-150 hover:text-white">Detail</Link>
                          </div>
                        </div>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Feature;