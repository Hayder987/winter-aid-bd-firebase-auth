import { Helmet } from "react-helmet";
import Accordion from "../components/Accordion";
import HowIDonate from "../components/HowIDonate";

const HowtoHelp = () => {
    return (
        <div>
            <Helmet>
                <title>Help || WinterAid BD</title>
            </Helmet>
            <div className="flex justify-center items-center ">
              <h3 className="text-3xl font-bold text-center py-12">How You Can Help</h3>
              <img src="./help.gif" alt="" className="w-[100px]" />
            </div>
            <div className="flex flex-col gap-12 lg:flex-row animate__animated animate__fadeInDownBig animate__fast">
                
                <div className="lg:w-2/4 py-12 animate__animated animate__fadeInLeft animate__slow">
                  <Accordion></Accordion>
                </div>
                <div className="lg:w-2/4 py-12 animate__animated animate__fadeInRight animate__slow">
                    <HowIDonate></HowIDonate>
                </div>
            </div>
        </div>
    );
};

export default HowtoHelp;