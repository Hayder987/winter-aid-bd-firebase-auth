import { useContext } from "react";
import { AuthContext } from "../ContextAPI/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
      
        <div className="flex justify-center items-center py-12">
          <Helmet>
            <title>DashBoard || WinterAid BD</title>
          </Helmet>
            <div className="max-w-[700px] mx-auto p-10 border-2 rounded-xl">
                <div className="flex justify-center items-center">
                <img src="./welcome.gif" alt="" className="w-[170px]" />
                </div>
                <h1 className="text-center text-3xl md:text-5xl font-semibold mb-4">Welcome! {user?.displayName}</h1>
                <div className="flex justify-center items-center p-6">
                  <img src={user?.photoURL} alt="" className="w-[200px]" />
                </div>
                <div className="flex justify-center items-center p-6">
                  <p className="text-xl font-semibold text-gray-500">{user?.email}</p>
                </div>
                <div className="flex justify-center items-center p-6">
                 <Link to="/utility/update"><button 
                 className="py-3 px-6 rounded-xl bg-textColor text-white">Update Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

