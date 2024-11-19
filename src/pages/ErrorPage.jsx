import { BiSolidError } from "react-icons/bi";
import { Link, useRouteError } from "react-router-dom";
import 'animate.css';


const ErrorPage = () => {

    const {data,status, statusText} = useRouteError()
         
    return (
        <div className="flex justify-center items-center">
          <div className="p-2 md:p-12">
             <p className="mb-4 text-7xl text-red-500 flex justify-center
             animate__animated animate__flash animate__infinite
             "><BiSolidError /></p>
             <h1 className="text-5xl text-center font-extrabold mb-3">
                {status}
             </h1>
             <h2 className="text-4xl text-center font-bold mb-3">
                {statusText}
             </h2>
             <h3 className="text-4xl text-center font-bold">
                {data}
             </h3>
             <img src="https://i.ibb.co.com/nQqnRLf/page-Not-found.jpg" alt="" className="
             animate__animated animate__zoomIn animate__slow
             " />
             <div className="mt-6">
               <Link to="/"><button className="p-3 block mx-auto px-5 bg-textColor text-white rounded-xl">Back To Home</button></Link>
             </div>
          </div>
            
        </div>
    );
};

export default ErrorPage;