import { Link } from "react-router-dom";


const Register = () => {
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
               <div className="card bg-bgColor  w-full max-w-sm shrink-0 shadow-2xl">
                 <form onSubmit={} className="card-body">
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
                     <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                     
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn bg-textColor text-white">Register</button>
                   </div>
                   <div className="form-control mt-6">
                     <p className="text-center">
                        Have An Account? 
                        <Link to="/login"><span className="text-blue-600 cursor-pointer underline">Login Now</span></Link>
                     </p>
                   </div>
                   
                 </form>
                 
               </div>
            </div>
            
        </div>
    );
};

export default Register;