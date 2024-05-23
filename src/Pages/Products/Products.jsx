import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import './style.css'

const Products = () => {
    const axiosPublic = useAxiosPublic()
    const [products, setProducts] = useState([]) 
    const [ currentPage , setCurrentPage] = useState(0)
    const {count} = useLoaderData();
    console.log(count);
     const itemsPerPage = 5
     const numberOfPages = Math.ceil(count/itemsPerPage)
    const pages = [...Array(numberOfPages).keys()] 

    console.log(currentPage, pages, numberOfPages);
    // const { refetch, data: products = [] } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/product?page=${currentPage}&size=${itemsPerPage}`)
    //         return res.data
    //     }
    // })

    useEffect(() => {
        axiosPublic.get(`/product?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => {
                setProducts(res.data)
            })
    }, [axiosPublic, currentPage])
    const handlePrevPage = ()=>{
        if(currentPage >0 ){
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNexPage = ()=>{
        if(currentPage <numberOfPages -1 ){
            setCurrentPage(currentPage + 1)
        }
    } 
    return (
        <div className="grid grid-cols-3 gap-5 my-10">
            {
                products.map(product =>

                    <div className="card card-compact  bg-base-100 shadow-xl" key={product._id}>
                        <figure><img src={product.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                           <p>{product.price}</p>
                           
                        </div>
                    </div>
                )
            }

            {/* pagination */}
            <div className="text-center mt-10 flex  justify-center gap-2 relative">
                    
                    <button className=" bg-black text-white text-md px-2 py-1 rounded-md $" onClick={handlePrevPage}>prev</button>
                    {
                        pages.map(page => <button 
                            key={page}
                            onClick={()=> setCurrentPage(page)}
                            className={` bg-black text-white text-md px-2 py-1 rounded-md ${currentPage === page  && 'selected'}`}
                        
                        >{page +1}</button>)
                    }
                    <button className=" bg-black text-white text-md px-2 py-1 rounded-md $" onClick={handleNexPage}>Next</button>
                </div>
        </div>
    );
};

export default Products;