import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Category = () => {
    const [ products, setProducts] = useState([])
    useEffect( ()=> {
        axios.get('../../../public/feature.json')
        .then( res => setProducts(res.data))
    }, [])
    console.log(products);
    return (
       <div>
        <h1>Category products</h1>
         <div className="grid grid-cols-3 gap-5">
            {
                products.map( product => 
                    <div className="card  bg-base-100 shadow-xl" key={product.id}>
                    <figure className="px-10 pt-10">
                      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{product.category}</h2>
                     <h3>Category {product.category}</h3>
                    <Link to={`/product`}> See Products</Link>
                    </div>
                  </div>
                )
            }
        </div>
       </div>
    );
};

export default Category;