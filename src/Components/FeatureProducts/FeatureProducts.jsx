import { useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxioPublic";


const FeatureProducts = () => {
    const axiosPublic = useAxiosPublic();
    useEffect ( ()=> {
        axiosPublic.get('/product')
    }, [])
    return (
        <div>
            <h1>Feature Products</h1>


        </div>
    );
};

export default FeatureProducts;