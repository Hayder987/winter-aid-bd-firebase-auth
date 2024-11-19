import { useParams } from "react-router-dom";
import ForgetPassword from "../components/ForgetPassword";
import UpdateProfile from "../components/UpdateProfile";
import { Helmet } from "react-helmet";


const UtilitesComponents = () => {
    const {id} = useParams();
    return (
        <div>
            <Helmet>
                <title>Utilities || WinterAid BD</title>
            </Helmet>
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