

const UpdateProfile = () => {
    return (
        <div style={{
            backgroundImage: ' url("https://i.ibb.co.com/WBpQ32n/loginpage-2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }} className="p-6 md:p-12 min-h-[70vh] mb-12 lg:mb-20">
            <h1 className="text-3xl text-white font-semibold text-center my-8">Manage Your Details</h1>
            <div className="flex justify-center items-center font-medium mb-8">
            <p className="text-gray-100 text-center md:w-7/12">Update your profile details, including your name and profile picture. Ensure your information is always
             accurate and up-to-date for a personalized experience.
            </p>
            </div>
            <div className="flex justify-center items-center">
               <div className="card bg-bgColor relative  w-full max-w-sm shrink-0 shadow-2xl">
                 <form className="card-body">
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Name</span>
                     </label>
                     <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">New Photo-Path</span>
                     </label>
                     <input type="text" name="path" placeholder="Photo-path" className="input input-bordered" required />
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn bg-textColor text-white">Update Profile</button>
                   </div>
                   
                 </form>
                 
               </div>
            </div>
            
        </div>
    );
};

export default UpdateProfile;