import useAxiosPublic from "../../Hooks/useAxioPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import { CiFilter } from "react-icons/ci";
import Button from "../../Components/Button/Button";

const Products = () => {
    const axiosPublic = useAxiosPublic();

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [totalCount, setTotalCount] = useState(0);
    const [sortOrder, setSortOrder] = useState('asc');
    const [brandFilter, setBrandFilter] = useState('');

    const [itemsPerPage, setItemsPerPage] = useState(8);
    const numberOfPages = Math.ceil(totalCount / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        const fetchData = async () => {
            const categoryFilter = selectedCategory !== 'All' ? `&category=${selectedCategory}` : '';
            const brandQuery = brandFilter ? `&brand=${brandFilter}` : '';
            const response = await axiosPublic.get(`/product?page=${currentPage}&size=${itemsPerPage}&sort=${sortOrder}${categoryFilter}${brandQuery}`);
            const { totalCount, products } = response.data;

            setProducts(products);
            setTotalCount(totalCount);
        };

        fetchData();
    }, [axiosPublic, currentPage, itemsPerPage, selectedCategory, sortOrder, brandFilter]);

     
    // Pagination handlers
    const handlePerPage = e => {
        e.preventDefault();
        const value = parseInt(e.target.value);
        setItemsPerPage(value);
        setCurrentPage(0);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < numberOfPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Category filter handler
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0);
    };

    // Sort order handler
    const handleSortOrderChange = (order) => {
        setSortOrder(order);
        setCurrentPage(0);
    };

    // Brand filter handler
    const handleBrandFilterChange = (e) => {
        setBrandFilter(e.target.value);
    };

    // Apply brand filter
    const applyBrandFilter = () => {
        setCurrentPage(0);
    };
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axiosPublic.get('/review')
            .then(res => {
                const allreview = res.data;
                setReviews(allreview)
            })
    }, [])
    console.log(reviews);
    return (
        <div className="my-10 max-w-6xl mx-auto">
            <div >
                {/* filter */}
          <div className="flex gap-2">
                  {/* cateegory filter */}
                  <div className="dropdown my-8">
                    <div  tabIndex={0} role="button" className="btn m-1 flex items-center gap-1">Category <CiFilter /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleCategoryChange('All')}><a>All</a></li>
                        <li onClick={() => handleCategoryChange('Home')}><a>Home</a></li>
                        <li onClick={() => handleCategoryChange('Electronics')}><a>Electronics</a></li>
                        <li onClick={() => handleCategoryChange('Fashion')}><a>Fashion</a></li>
                    </ul>
                </div>
                    {/* brand filter */}
                    <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Enter Brand Name"
                        value={brandFilter}
                        onChange={handleBrandFilterChange}
                        className="border border-gray-400 rounded px-2 py-1 mr-2"
                    />
                    <button onClick={applyBrandFilter} className="bg-black text-white px-2 py-1 rounded-md">Filter</button>
                </div>
                          {/* sort */}
                          <div className="dropdown my-8">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by Price</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortOrderChange('asc')}><a>Low to High</a></li>
                        <li onClick={() => handleSortOrderChange('desc')}><a>High to Low</a></li>
                    </ul>
                </div>
          </div>
      
            
            </div>

            {/* cards */}
            <div className="grid grid-cols-4 gap-8">
                {products.map(product => (
                    <div className="card card-compact bg-base-100 shadow-xl relative" key={product._id}>
                        <figure><img src={product.photo} alt="Product" /></figure>
                        <h5 className="absolute right-3 top-2 font-semibold text-cyan-500">{product.brand}</h5>
                        <div className="card-body bg-cyan-200 rounded-xl">
                            <div className="flex items-center justify-between">
                            <h2 className="text-base font-semibold">{product.name}</h2>
                            
                            </div>
                        
                            <h2 className="text-base font-semibold">{product.category}</h2>
                          <div className="flex justify-between">
                            <p>Price:{product?.price}</p>
                          <Link to={`/product/${product._id}`} className="bg-white px-4 py-2 rounded-xl hover:bg-cyan-800 hover:text-white duration-200"> Details </Link>
                          
                          </div>                       
                        </div>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="text-center mt-10 flex justify-center gap-2 relative">
                <button className="bg-black text-white text-md px-2 py-1 rounded-md" onClick={handlePrevPage}>Prev</button>
                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`bg-black text-white text-md px-2 py-1 rounded-md ${currentPage === page && 'selected'}`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button className="bg-black text-white text-md px-2 py-1 rounded-md" onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handlePerPage}>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Products;
