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
        <div className="my-10">
            <h1>Feature </h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    products.slice(0,6).map( product => 
                        <div className="card card-compact bg-base-100 shadow-xl" key={product._id}>
                        <figure><img src={product.photo} alt="Product" className="w-60" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.price}</p>
                            <h2>{product.category}</h2>
                            <h5>{product.brand}</h5>
                            <Link to={`/product/${product._id}`}>Detail</Link>
                        </div>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Feature;