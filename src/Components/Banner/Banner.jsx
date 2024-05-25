import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import bgimage from "../../assets/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg"

const Banner = () => {
  const axiosPublic = useAxiosPublic()
  const [count, setCount] = useState({})

  useEffect(() => {
    axiosPublic.get('/productCount')
      .then(res => console.log(res.data.count))
  }, [])
  return (
    <div>
      <div className="hero md:h-[60vh] "  style={{ backgroundImage: `url(${bgimage})`,backgroundPosition: 'center' }}>
        <div className=" "></div>
        <div className="hero-content text-white w-full ">
          <div className="w-full h-full ml-2 lg:ml-10">
            <div>
              <h1 className="text-lg md:text-2xl lg:text-4xl mb-3 md:mb-8 ml font-bold ">Buy Your <br></br> Dream Products</h1>
            </div>

            <div className="flex gap-5 md:my-5 items-center">
              <div> 
                <h1 className="md:text-2xl">50 +</h1>
                <h5 className="text-xs md:text-base">Product Species</h5>
              </div>
              <div className="h-8 md:h-11 w-[2px] bg-white"> </div>
              <div> 
                <h1 className="md:text-2xl">100 +</h1>
                <h5 className="text-xs md:text-base">customers</h5>
              </div>
            </div>

            <form className="flex flex-col md:flex-row gap-2 lg:items-center mt-7">

              <label className="input input-bordered flex items-center w-2/4    md:w-1/3">
                <input type="text" className="grow placeholder:text-xs md:placeholder:text-base" placeholder="what are you looking for?" />
            
              </label>
              <input type="submit" value="Search" className="px-2 py-2 md:px-4 md:py-3 text-xs md:text-sm lg:text-base bg-white rounded-lg text-black font-semibold cursor-pointer hover:bg-cyan-300 duration-300  w-1/5 md:1/12 lg:w-1/12" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;