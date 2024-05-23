import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                        <ul>
                            <li> <Link to ='/dasboard/users'  >Manage Users</Link> </li>
                            <li> <Link to ='/'  >Home</Link> </li>
                        </ul>

                </div>
                <div className="col-span-9">
                    

                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;