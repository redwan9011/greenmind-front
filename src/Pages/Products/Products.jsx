import useAxiosPublic from "../../Hooks/useAxioPublic";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import './style.css'

const Products = () => {
    const axiosPublic = useAxiosPublic()
    const [products, setProducts] = useState([]) 
    const [currentPage , setCurrentPage] = useState(0)
    const {count} = useLoaderData();
    const [itemsPerPage ,setItemsPerPage]=useState (6)
    const numberOfPages = Math.ceil(count/itemsPerPage)
   const pages = [...Array(numberOfPages).keys()] 

    useEffect(() => {
        axiosPublic.get(`/product?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => {
                setProducts(res.data)
            })
    }, [axiosPublic, currentPage,itemsPerPage])

    // pagination
    const handlePerPage = e => {
        e.preventDefault()
       
        const value = parseInt(e.target.value)
        setItemsPerPage(value)
        setCurrentPage(0)
        
      }

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

    <div className="my-10"> 
        <div className="grid grid-cols-3 gap-5 ">
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

           
        </div>

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
                <select value={itemsPerPage} onChange={handlePerPage}  name="" id="">
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="18">18</option>
                </select>
                </div>
        </div>
       
    );
};

export default Products;