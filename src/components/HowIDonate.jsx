import { FaArrowDownLong } from "react-icons/fa6";


const HowIDonate = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="">
                <div className="border-2 p-4">
                    <p className="text-center"> Choose the items you wish to donate.</p>
                </div>
                <div className="flex justify-center items-center">
                   <p className="py-6 text-xl"><FaArrowDownLong /></p>
                </div>
                <div className="border-2 p-4">
                    <p className="text-center"> Find your nearest donation center below and drop off your items.</p>
                </div>
                <div className="border-2 p-4 mt-4">
                    <p className="text-center"> Drop off your donations or request a pickup.</p>
                </div>
                <div className="flex justify-center items-center">
                   <p className="py-6 text-xl"><FaArrowDownLong /></p>
                </div>
                <div className="border-2 p-4">
                    <p className="text-center"> Receive Confirmation.</p>
                </div>
                <div className="border-2 p-4 mt-4">
                    <p className="text-center"> Drop off your donations or request a pickup.After donating, you will receive a confirmation email or text. 
                        We will also provide updates on how your donations are helping the community.</p>
                </div>
            </div>
        </div>
    );
};

export default HowIDonate;