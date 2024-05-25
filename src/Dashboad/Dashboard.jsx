import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-5">
                {/* dashboard left */}
                <div className="col-span-3  bg-cyan-300 min-h-screen text-center py-5">
                     
               {
                isAdmin ? 
                <ul className="space-y-2 mt-10">
                <li className="text-lg font-semibold hover:underline"> <Link to ='/dasboard/users'  >Manage Users</Link> </li>
                <li className="text-lg font-semibold hover:underline"> <Link to ='/dasboard/addproduct'  >Ad product</Link> </li>
                <li className="text-lg font-semibold hover:underline"> <Link to ='/'>Home</Link> </li>
            </ul>

            : 
            <ul>
                <li className="text-lg font-semibold hover:underline"> <Link>Profile</Link></li>
                <li className="text-lg font-semibold hover:underline"> <Link to ='/'  >Home</Link> </li> 
            </ul>
               }
                </div>
                {/* dasboard right */}
                <div className="col-span-9">
                    

                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;