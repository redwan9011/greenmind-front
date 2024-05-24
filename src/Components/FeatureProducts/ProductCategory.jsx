import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const ProductCategory = () => {
    const allproducts = useLoaderData();
  
    const {category} = useParams();
    console.log(category);
    const [ products , setProducts] = useState([])
    useEffect( ()=> {
     const categoryProduct=   allproducts.filter( product => product.category === category)
        console.log(categoryProduct);
        setProducts(categoryProduct)
    }, [])

    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                {
                    products.map( product => 

                        <div className="card card-compact  bg-base-100 shadow-xl" key={product._id}>
                        <figure><img src={product.photo} className="w-60" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                           <p>{product.price}</p>
                           <Link to={`/product/${product._id}`}>Detail</Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCategory;