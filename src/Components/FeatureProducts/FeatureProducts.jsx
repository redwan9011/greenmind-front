import axios from "axios";
import { useEffect, useState } from "react";


const FeatureProducts = () => {
    const [ products, setProducts] = useState([])
    useEffect( ()=> {
        axios.get('../../../public/feature.json')
        .then( res => setProducts(res.data))
    }, [])
    console.log(products);
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                products.map( product => 

                    <div className="card  bg-base-100 shadow-xl" key={product.id}>
                    <figure className="px-10 pt-10">
                      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{product.category}</h2>
                     <h3>Name: {product.name}</h3>
                     <p>rating: {product.rating}</p>
                    </div>
                  </div>
                )
            }
        </div>
    );
};

export default FeatureProducts;