import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";


const navLinkStyle = ({ isActive, isPending }) => {
    return isPending
      ? "pending"
      : `inline-block w-full  text-center text-lg py-2  bg-transparent text rounded font-semibold ${isActive
        ? "border-blue-500   border-y backdrop-filter backdrop-blur-3xl "
        : "   hover:border-y hover:border-blue-500 hover:text-gray-600 hover:backdrop-blur-3xl"
      }`;
  };

const Navbar = () => {

    const links = <>
    <li><NavLink to='/' className={navLinkStyle}>Home</NavLink></li>
    <li><NavLink to='/products' className={navLinkStyle}>Products</NavLink></li>
  
</>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <Link to='/'>GREENMIND</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
     {
        links
     }
    </ul>
  </div>
  {/* profile */}
  <div className="navbar-end ">
  <div className="dropdown dropdown-bottom dropdown-end ">
  <div tabIndex={0} role="button" className=" m-1 text-4xl"><FaRegCircleUser /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  ">
    <li ><Link>Dashboard</Link></li>
    <li><Link to='/login'>Login</Link></li>
  </ul>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;