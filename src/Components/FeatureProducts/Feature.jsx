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
    console.log(products);
    return (
        <div className="my-14 max-w-6xl mx-auto">
            <h1 className="text-center font-bold text-lg md:text-2xl lg:text-4xl mb-3 md:mb-5 lg:mb-7">Best selling Prodcucts</h1>
            <p></p>
            <div className="grid grid-cols-4 gap-6">

                {
                    products.slice(0,8).map( product => 
                        <div className="card card-compact " key={product._id}>
                        <figure><img src={product.photo} alt="Product" className="" /></figure>
                        <div className="card-body text-left ml-2">
                            <h2 className="font-semibold text-lg">{product.name}</h2>
                            <p>Price:{product.price}</p>
                            {/* <Link to={`/product/${product._id}`}>Detail</Link> */}
                        </div>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Feature;