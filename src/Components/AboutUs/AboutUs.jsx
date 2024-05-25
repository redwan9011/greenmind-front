import { BiSolidShoppingBags } from "react-icons/bi";
import { MdAddIcCall, MdOutlineLocalShipping } from "react-icons/md";


const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="my-8 md:my-10 lg:my-14 text-center px-4 md:px-6 lg:px-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-1">About Us</h1>
            <p className="text-gray-500">Order now and appreciate the products quality</p>
            <div className="grid grid-cols-3 justify-center mt-7">

                <div className="flex flex-col items-center space-y-1">
                <span className="bg-cyan-200 p-6 rounded-full text-2xl"><BiSolidShoppingBags /></span>
                <h1 className="text-xs md:text-base font-bold ">Large Assortment</h1>
                <p className="text-xs md:text-sm text-gray-500 lg:px-9">We offer many different type of products with many variations in each category</p>
                </div>

                <div className="flex flex-col items-center space-y-1">
               <span className="bg-cyan-200 p-6 rounded-full text-2xl"> <MdOutlineLocalShipping /></span>
                <h1 className="text-xs md:text-base font-bold ">Fast and Free Shipping</h1>
                <p className="text-xs md:text-sm text-gray-500 lg:px-9">4-days or less delivery time, free shipping and an expedit delivery option</p>
                </div>

                <div className="flex flex-col items-center space-y-1">
               <span className="bg-cyan-200 p-6 rounded-full text-2xl"> <MdAddIcCall /></span>
                <h1 className="text-xs md:text-base font-bold ">24/7 Support</h1>
                <p className="text-xs md:text-sm text-gray-500 lg:px-9">Answer to any business related inquiry 24/7 in real-time</p>
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default AboutUs;