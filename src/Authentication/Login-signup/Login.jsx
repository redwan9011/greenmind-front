import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '../../SharedSection/Navbar/Navbar';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
const Login = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
    const [ show, setShow] = useState()

  const {
    register,
    handleSubmit,


  } = useForm()
  const onSubmit = (data) => {
    console.log(data);

    // login(data.email, data.password)
    //   .then(result => {
    //     console.log(result.user);

    //     navigate(from, { replace: true })

    //   })
    //   .catch(err => {
    //     console.log(err);
    //     alert(err.message)
    //   })

  }


  return (
    <div>
        <Navbar></Navbar>
        <div className="card  w-full max-w-3xl mx-auto bg-slate-400 mt-5">
      <h1 className='text-center text-2xl font-semibold pt-5'>Login</h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>


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
          <input type={show ? "text" : 'password' } {...register("password")} name='password' placeholder="password" className="input " required />
          <div className='flex items-center gap-1 cursor-pointer mt-1 ' onClick={()=>setShow (!show)}>
          <span  >Show Password?</span>
            {
               !show ?   <FaEyeSlash /> : <FaEye />
            }
          </div>


        </div>
        <div className="form-control mt-6">
          <input type="submit" value="LOGIN" className='bg-black cursor-pointer text-white py-3 rounded-md font-semibold' />
        </div>

      </form>
      <p className='text-center text-white'>---------Or----------</p>
      <div className='text-center my-3'>
     
      </div>
      <Link to='/signup' className='text-center text-white pb-3'>New here? Create a New Account </Link>
    </div>
    </div>
  );
};

export default Login;