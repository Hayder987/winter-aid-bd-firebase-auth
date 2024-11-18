import PropTypes from "prop-types";
import 'animate.css';
import { useNavigate } from "react-router-dom";


const Card = ({item}) => {
     const { image, title, description, division,id} = item || {}

     const navigate = useNavigate()

    return (
        <div className="p-4 border-spacing-2 shadow-md rounded-2xl 
           animate__animated hover:animate__fadeInDown">
            <h2 className="text-2xl font-bold text-center mb-3">{division}</h2>
            <img src={image} alt="" 
            className="w-full object-cover h-[350px] rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-500 mb-6">{description}</p>
            <button onClick={()=>navigate(`/details/${id}`)} className="bg-textColor text-white font-medium rounded-full py-3 px-8">Donate Now</button>
        </div>
    );
};

Card.propTypes ={
    item:PropTypes.object
}
export default Card;