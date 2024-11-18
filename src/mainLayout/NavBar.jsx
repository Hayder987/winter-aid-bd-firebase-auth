import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthProvider";
import { toast } from "react-toastify";


const NavBar = () => {
    const {user, logOutUser} = useContext(AuthContext)


    const signOutHandler = ()=>{
        logOutUser()
        .then(()=>{
            toast.info("Log Out SuccessFully!")
        })
    }

    return (
        <div className=" flex justify-between items-center py-2 md:py-5 text-textColor
           animate__animated animate__fadeInDown
        ">
            <div className="flex justify-center items-center gap-3">
                <Link to="/donation"><div className="">
                  <img src="./logo4.gif" alt="" className="w-[100px]" />
                </div></Link>
                <h1 className="text-xl md:text-2xl font-bold">
                    <span className="text-red-500">W</span>inter 
                    <span className="text-green-700">A</span>id BD</h1>
            </div>
            {/* NavLink */}
            <div className="hidden md:flex">
                <ul className="flex gap-8 font-medium">
                    <NavLink to="/"><li className="">Home</li></NavLink>
                    <NavLink to="/donation"><li className="">Donation Campaigns</li></NavLink>
                    <NavLink to="/help"><li className="">How to Help</li></NavLink>
                    <NavLink to="/dashboard"><li className="">Dashboard</li></NavLink>
                </ul>
            </div>
            <div className="">
                {
                    user? <div className="flex justify-center items-center gap-4">
                        <img src= {user?.photoURL} alt="User" className="w-10 h-10 rounded-full" />
                        <Link to="/login"><button onClick={signOutHandler} className="bg-textColor text-white py-2 px-4 rounded-full">Logout</button></Link>
                    </div>:
                    <Link to="/login"><button className="bg-textColor text-white py-2 px-4 rounded-full">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;