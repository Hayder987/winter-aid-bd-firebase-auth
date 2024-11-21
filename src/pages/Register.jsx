import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet";


const Register = () => {
  const {registerUser,updateUser,googleLogin} = useContext(AuthContext);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const upperCase = /^(?=.*[A-Z]).+$/;
  const lowerCase = /^(?=.*[a-z]).+$/;
  const [eye, setEye] = useState(false)
  
  

    const registerHandler=(e)=>{
       e.preventDefault();

       const name = e.target.name.value;
       const path = e.target.path.value;
       const email = e.target.email.value;
       const password = e.target.password.value;
       setErrMessage("");

       if(password.length<6){
        setErrMessage("ERROR: Password Must Be 6 Digit!")
        return
       }
       if(!upperCase.test(password)){
        setErrMessage("ERROR: Password Must Be 1 UpperCase!")
        return
       }
       if(!lowerCase.test(password)){
        setErrMessage("ERROR: Password Must Be 1 LowerCase!")
        return
       }
       
       registerUser(email, password)
       .then(()=>{
        updateUser(name, path)
        toast.success("User Create SuccessFully!")
        navigate('/')
       })
       .catch(err=>{
        setErrMessage(err.message)
       })
    }

    const googleLogIn =()=>{
      googleLogin()
      .then(()=>{
        navigate("/")
        toast.success("User Login SuccessFully!")
      })
      .catch(err=>{
        setErrMessage(err.message)
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
            <Helmet>
              <title>Register || WinterAid BD</title>
            </Helmet>
            <h1 className="text-3xl text-white font-semibold text-center my-8">Create Account winter-Aid-BD</h1>
            <div className="flex justify-center items-center">
               <div className="card bg-bgColor relative  w-full max-w-sm shrink-0 shadow-2xl">
                 <form onSubmit={registerHandler} className="card-body">
                 <div className="form-control">
                     <label className="label">
                       <span className="label-text">Name</span>
                     </label>
                     <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Image Url</span>
                     </label>
                     <input type="text" name="path" placeholder="Image-Path" className="input input-bordered" />
                   </div>
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
                     
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn bg-textColor text-white">Register</button>
                   </div>
                   <div className="form-control mt-6">
                     <p className="text-center">
                        Have An Account?  
                        <Link to="/login"> <span className="text-blue-600 cursor-pointer underline">Login Now</span></Link>
                     </p>
                   </div>
                   <div className="form-control mt-6">
                     {
                      errMessage && <p className="text-red-500 text-center">{errMessage}</p>
                     }
                   </div>
                   
                 </form>
                 <div className="px-6 pb-6 mt-[-50px]">
                 <div className="divider">OR</div>
                   <div className="form-control mt-6">
                     <button onClick={googleLogIn} className="flex justify-center items-center border-textColor gap-3 border-2 p-2 rounded-full">
                        <img src="https://i.ibb.co.com/2ZcdcPq/googlelogo.webp" alt="" 
                        className="w-8 h-8 rounded-full" />
                        <span className="font-semibold text-textColor">Sign With Google</span>
                     </button>
                   </div>
                 </div>
                 <p onClick={()=> setEye(!eye)} className="text-gray-500 absolute top-[360px] right-12 text-xl">
                  {
                    eye?<FaEyeSlash />: <FaEye />
                  }
                 
                 </p>
                 
               </div>
            </div>
            
        </div>
    );
};

export default Register;