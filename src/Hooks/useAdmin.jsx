import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosPublic from "./useAxioPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";



const useAdmin = () => {
  const {user, loading} = useContext(AuthContext)
  const axioPublic = useAxiosPublic()
  const {data:isAdmin} = useQuery({
    queryKey: [ user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async ()=> {
      console.log('askign or cheacking adming' , user);
     const res = await axioPublic.get(`/users/admin/${user?.email}`)
     console.log(res.data);
     return res.data
    }
  })
  console.log(isAdmin === true);
  return [ isAdmin]
};

export default useAdmin;