
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ContextAPI/AuthProvider";



const ForgetPassword = () => {
   const navigate = useNavigate();
   const {passwordRest,resetEmail} = useContext(AuthContext)

    const resetPasswordHandler= e =>{
        e.preventDefault();

        const email = e.target.email.value;

        passwordRest(email)
        .then(()=>{
            Swal.fire({
                position: "top-middle",
                icon: "success",
                title: `Password Reset Link Send to ${email} successfully!`,
                showConfirmButton: false,
                timer: 2000
              });
              navigate('/login')
              window.open("https://mail.google.com/", "_blank");
        })
        .catch(err=>{
            toast.error(err.message)
        })
    }

    return (
        <div style={{
            backgroundImage: ' url("https://i.ibb.co.com/WBpQ32n/loginpage-2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }} className="p-6 md:p-12 min-h-[70vh] mb-12 lg:mb-20">
            <h1 className="text-3xl text-white font-semibold text-center my-8">Reset Your Password | Winter Aid BD</h1>
            <div className="flex justify-center items-center font-medium mb-8">
            <p className="text-gray-100 text-center md:w-7/12">Forgot your password? No worries! Reset your password easily and securely to regain access to your Winter Aid BD account. Enter 
                your registered email to receive password recovery instructions. on Your email Address
            </p>
            </div>
            <div className="flex justify-center items-center">
               <div className="card bg-bgColor relative  w-full max-w-sm shrink-0 shadow-2xl">
                 <form onSubmit={resetPasswordHandler} className="card-body">
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Enter Your Email:</span>
                     </label>
                     <input type="email" value={resetEmail} name="email" placeholder="email" className="input input-bordered" required />
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn bg-textColor text-white">Reset Password</button>
                   </div>
                   
                 </form>
                 
               </div>
            </div>
            
        </div>
    );
};

export default ForgetPassword;