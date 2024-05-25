import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Home from "../../assets/Home.webp"
import Fashion from "../../assets/fashion.webp"
import Electronic from "../../assets/electronic.webp"

const Category = () => {


  return (
    <div className="mt-6 mb-10 ">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">Category products</h1>
      <p className="text-center text-gray-500 mt-2">Find what are you looking for</p>
      <div className="bg-cyan-200 mt-16">

        <div className=" grid grid-cols-3 gap-5 md:gap-9 lg:gap-20  max-w-6xl mx-auto px-3 md:px-6">

          <div className="card -mt-10" >
            <figure className="">
              <img src={Home} alt="home" className="rounded-xl h-40 md:h-72 lg:h-96" />
            </figure>
            <div className=" text-center">

              <h3 className="font-bold text-lg mt-1">Home </h3>

            </div>
          </div>

          <div className="card  mt-10" >
            <figure className=" ">
              <img src={Electronic} alt="electronic" className="rounded-xl h-40 md:h-72 lg:h-96" />
            </figure>
            <div className=" text-center">

              <h3 className="font-bold text-lg mt-1">Elcetronics </h3>

            </div>
          </div>

          <div className="card -mt-10 " >
            <figure className="">
              <img src={Fashion} alt="fashion Image" className="rounded-xl h-40 md:h-72 lg:h-96" />
            </figure>
            <div className=" text-center">

              <h3 className="font-bold text-lg mt-1">Fashion </h3>

            </div>
          </div>

        </div>
        <div className="text-center mt-4 pb-5 md:pb-9 lg:pb-14">
          <Link to={`/product`}> <Button buttonText="See Products" className="text-white"></Button> </Link>
        </div>
      </div>

    </div>
  );
};

export default Category;