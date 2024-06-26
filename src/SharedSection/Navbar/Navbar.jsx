import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";




const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
    const links = <>
    <li><NavLink to='/' style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "#1dadc0" : "black",
          color: isActive ? "white" : "white",
        };
      }}>Home</NavLink></li>
    <li><NavLink to='/product' style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          background: isActive ? "#1dadc0" : "black",
          color: isActive ? "white" : "white",
        };
      }}> Products</NavLink></li>
  
</>
    return (
        <div className="max-w-6xl mx-auto">
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
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
    <li ><Link to='/dasboard'>Dashboard</Link></li>
    <li>
      {
          user ? <li onClick={()=>logout()} className="cursor-pointer">Logout</li> : <li><Link to='/login'>Login</Link></li>
      }
    </li>
  </ul>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;