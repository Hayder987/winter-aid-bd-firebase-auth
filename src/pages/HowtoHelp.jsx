import Accordion from "../components/Accordion";
import HowIDonate from "../components/HowIDonate";


const HowtoHelp = () => {
    return (
        <div>
            <div className="flex justify-center items-center ">
              <h3 className="text-3xl font-bold text-center py-12">How You Can Help</h3>
              <img src="./help.gif" alt="" className="w-[100px]" />
            </div>
            <div className="flex flex-col gap-12 lg:flex-row">
                
                <div className="md:w-2/4 py-12">
                  <Accordion></Accordion>
                </div>
                <div className="md:w-2/4 py-12">
                    <HowIDonate></HowIDonate>
                </div>
            </div>
        </div>
    );
};

export default HowtoHelp;