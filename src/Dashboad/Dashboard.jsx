import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 bg-blue-400 h-screen text-center py-5">
                     
               {
                isAdmin ? 
                <ul>
                <li> <Link to ='/dasboard/users'  >Manage Users</Link> </li>
                <li> <Link to ='/dasboard/addproduct'  >Ad product</Link> </li>
                <li> <Link to ='/'  >Home</Link> </li>
            </ul>

            : 
            <ul>
                <li> <Link>Profile</Link></li>
                <li> <Link to ='/'  >Home</Link> </li> 
            </ul>
               }
                </div>
                <div className="col-span-9">
                    

                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;