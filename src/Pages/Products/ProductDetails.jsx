
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const axioPublic = useAxiosPublic()
    // const [details , setDetails] = useState({})
 const details = useLoaderData();
 console.log(details);
    return (
        <div>
            <h1>{details.name}</h1>
        </div>
    );
};

export default ProductDetails;