import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const LogIn = () => {

  const {logInUser, googleLogin} = useContext(AuthContext)
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const [eye, setEye] = useState(false)
  const {state} = useLocation();

 
  const loginHandler = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrMessage("");
    logInUser(email,password)
    .then(()=>{
      toast.success("User Login SuccessFully!")
      if(state){
        navigate(state)
      }
      else{
        navigate('/')
      }
     })
     .catch(err=>{
      setErrMessage(err.message.split("/")[1])
     })
  };

  const googleLogIn = ()=>{
    googleLogin()
    .then(()=>{
      toast.success("User Login SuccessFully!")
      if(state){
        navigate(state)
      }
      else{
        navigate('/')
      }
    })
    .catch(err=>{
      setErrMessage(err.message.split("/")[1])
     })

  }

    return (
        <div style={{
            backgroundImage: ' url("https://i.ibb.co.com/WBpQ32n/loginpage-2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }} className="p-6 md:p-12 min-h-[85vh] mb-12 lg:mb-20">
            <h1 className="text-3xl text-white font-semibold text-center my-8">Log In to Your Account</h1>
            <div className="flex justify-center items-center">
               <div className="card bg-bgColor relative  w-full max-w-sm shrink-0 shadow-2xl">
                 <form onSubmit={loginHandler} className="card-body">
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Password</span>
                     </label>
                     <input 
                     type={!eye?"password":"text"} 
                     name="password" placeholder="password" className="input input-bordered" required />
                     <label className="label">
                       <Link to="/utility/password" className="label-text-alt text-base link link-hover">Forgot password?</Link>
                     </label>
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn bg-textColor text-white">Login</button>
                   </div>
                   
                 </form>
                 <p onClick={()=> setEye(!eye)} className="text-gray-500 absolute top-[175px] right-12 text-xl">
                  {
                    eye?<FaEyeSlash />: <FaEye />
                  }
                 
                 </p>
                 <div className="px-6 pb-6">
                 <div className="divider">OR</div>
                   <div className="form-control mt-6">
                     <button onClick={googleLogIn} className="flex justify-center items-center border-textColor gap-3 border-2 p-2 rounded-full">
                        <img src="https://i.ibb.co.com/2ZcdcPq/googlelogo.webp" alt="" 
                        className="w-8 h-8 rounded-full" />
                        <span className="font-semibold text-textColor">Sign With Google</span>
                     </button>
                   </div>
                   <div className="form-control mt-6">
                     <p className="text-center">
                        Don't Have Account? 
                        <Link to="/register"> <span className="text-blue-600 cursor-pointer underline">Register Now</span></Link>
                     </p>
                   </div>
                   <div className="form-control mt-6">
                     {
                      errMessage && <p className="text-red-500 text-center">{errMessage}</p>
                     }
                   </div>
                 </div>
               </div>
            </div>
            
        </div>
    );
};

export default LogIn;