

const Work = () => {
    return (
        <div className="mb-28">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">How We Work</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 flex flex-col justify-center items-center">
                    <img src="https://i.ibb.co.com/hD9mf4v/Schedule-a-Pickup.jpg" alt="" 
                    className="mb-3 object-cover h-[300px]" />
                    <h3 className="text-2xl font-semibold mb-3 text-center">Schedule a Pickup</h3>
                    <p className="text-gray-500 text-center">Enter the pickup location, and schedule a pickup. *convenience fee applicable.
                    You can also choose to go for the drop off option in case you want 
                    to drop the donations yourself.</p>
                </div>
                <div className="p-4 flex flex-col justify-center items-center">
                    <img src="https://i.ibb.co.com/8grqcmd/Donate-at-your-Doorstep.webp" alt="" 
                    className="mb-3 object-cover h-[300px]" />
                    <h3 className="text-2xl font-semibold mb-3 text-center">Donate at your Doorstep</h3>
                    <p className="text-gray-500 text-center">We will come to your doorstep to pick up the donations in the chosen slot
                        and deliver them to the NGO where they can be given a new life.</p>
                </div>
                <div className="p-4 flex flex-col justify-center items-center">
                    <img src="https://i.ibb.co.com/QJzzNhY/360-F-519111981-p309-Nt-Nf-ZGd-Lonm8-V88eip-Ns5-Pw65o-Jl.jpg" alt="" 
                    className="mb-3 object-cover h-[300px]" />
                    <h3 className="text-2xl font-semibold mb-3 text-center">Get Rewards</h3>
                    <p className="text-gray-500 text-center">Our brand partners provide our donors gifts* as a “gesture of thanks” for making a difference.
                    Be ready to get surprised!</p>
                </div>
            </div>
        </div>
    );
};

export default Work;