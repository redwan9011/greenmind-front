import { useContext } from "react";
import Navbar from "../../SharedSection/Navbar/Navbar";
import { useForm } from 'react-hook-form';
import { Link, useNavigate  } from 'react-router-dom';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
const Signup = () => {
  const axiosPublic = useAxiosPublic()
    const {signup} = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data);
        signup(data.email, data.password)
         .then( result => {
                   
                   updateProfile(result.user , {
                       displayName: data.name,
                      
                   })
                   .then(()=> {
                     // create users entry in database
                     const usersInfo = {
                       name: data.name,
                       email: data.email,
                     
                       
                     }
                     axiosPublic.post('/users', usersInfo)
                     .then( res => {
                       console.log( 'users added in database',res.data);
                       if(res.data.insertedId){
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Sign up successfully",
                          showConfirmButton: false,
                          timer: 1500
                        });
                       }
                       else{
                        return
                       }
                     })
                    
                   })
                   .catch(()=> {})
                  navigate('/')
               })
               .catch(err => {
                   console.log(err);
                   alert(err.message)
               })
       }

    return (
        <div className='max-w-6xl mx-auto'>
        <Navbar></Navbar>
        <div className="card  w-full max-w-3xl mx-auto bg-slate-400 mt-5 mb-6">
        <h1 className='text-center text-2xl font-semibold pt-5'>REGISTER</h1>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
    
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name"  , { required: true })} name='name' placeholder="your name" className="input " />
              {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>
        
    
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email")} name='email' placeholder="email" className="input " required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password" , { required: true, minLength:6, maxLength: 20 ,
    
              pattern:/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                 
                 })} name='password' placeholder="password" className="input " required />
              {errors.password?.type === 'minLength' && <span className='text-red-500 mt-1'>Password should be 6-20 letters</span>}
              {errors.password?.type === 'pattern' && <span className='text-red-500 mt-1'>Need atleast one Capital letter and one special character </span>}
    
            </div>
           
            <div className="form-control mt-2">
                <input type="submit" value="REGISTER" className='bg-black cursor-pointer text-white py-3 rounded-md font-semibold' />
            </div>
          </form>
          <p className='text-center text-white'>---------Or----------</p>
         <div className='text-center my-3'>
      
         </div>
          <Link to='/login' className='text-center text-white pb-3'>Already registered? Go to log in </Link>
        </div>

    </div>
    );
};

export default Signup;