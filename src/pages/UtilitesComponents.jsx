import { useParams } from "react-router-dom";
import ForgetPassword from "../components/ForgetPassword";
import UpdateProfile from "../components/UpdateProfile";


const UtilitesComponents = () => {
    const {id} = useParams();

    console.log(id)
    return (
        <div>
            {
              id==="password"&& <ForgetPassword></ForgetPassword>
            }
            {
                id ==="update" && <UpdateProfile></UpdateProfile>
            }
        </div>
    );
};

export default UtilitesComponents;