import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUser, FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxioPublic";


const ManageUser = () => {
    const axiosPublic = useAxiosPublic()
   
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users', 
            // {
            //     headers: {
            //         authorization: ` Bearer ${localStorage.getItem('access-token')}`
            //     }
            // }
        )
            return res.data
        }
    })
    console.log(users);

    const handleDelete = (id) => {
        console.log('click', id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }

    const handleMakeAdmin = (user) => {
        console.log(user._id);
        axiosPublic.patch(`/users/admin/${user._id}`)

            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} admin successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }
    return (
        <div>
            

            <div>
                <div className="overflow-x-auto">
                <h1 className="text-2xl font-bold text-center my-8">Total Users:{users.length} </h1>
                    <table className="table table-zebra text-center">
                        {/* head */}
                        <thead>
                            <tr className="text-lg font-bold">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                               
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, ind) => <tr key={user._id}>
                                    <th>{ind + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                              
                                    <td>
                                        {
                                            user.role === 'admin' ? <>
                                               <div className="flex justify-center">
                                               <FaUser className="text-3xl text-black " />
                                               </div>
                                            </> :
                                            <div className=" flex justify-center">

                                                <button onClick={() => handleMakeAdmin(user)} className="bg-slate-700 p-2 "> <FaUsers className="text-3xl text-white " /></button>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)}> <MdDelete className="text-3xl text-red-600" /></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;