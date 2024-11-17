import { Link } from "react-router-dom";


const AboutUS = () => {
    return (
        <div>
            <div className="mb-20 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">About Us</h1>
            <p className="text-center lg:w-7/12 mb-6">Winter Aid BD is a non-profit organization dedicated to providing warmth and comfort to
                 vulnerable people across Bangladesh during the harsh winter months. Thousands of individuals, especially those 
                 in rural and low-income areas, struggle to stay warm without proper clothing. Our mission is to bridge that gap by 
                 connecting generous donors with volunteers to ensure that winter clothing reaches those
                 who need it most.</p>
                 <div className="">
                 <Link to="/help"><button className="bg-textColor text-white font-medium rounded-full py-3 px-8">Learn More</button></Link>
                 </div>
                 <img src="https://i.ibb.co.com/MkGHMsn/aboutus.jpg" alt="" className=" md:w-[90%] md:h-[650px]" />
            </div>
        </div>
    );
};

export default AboutUS;