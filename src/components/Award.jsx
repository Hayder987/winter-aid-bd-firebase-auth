

const Award = () => {
    return (
        <div className="my-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-14">The Journey Of The Rewards</h1>
            <div className="flex flex-col justify-center items-center gap-8 lg:flex-row">
               <div className="lg:w-6/12">
                    <h1 className="flex flex-col text-5xl font-semibold mb-6">
                        <span className="text-textColor">AWARDS AND</span>
                        <span className="text-gray-500">RECOGINATION</span>
                    </h1>
                    <h3 className="text-2xl font-bold">
                        Acknowledging Efforts, Celebrating Success, Awards That Reflect Our Values
                    </h3>
                    <p className="">
                    Acknowledging Efforts means taking the time to recognize the hard work 
                    and dedication that individuals invest in their tasks. Often, the effort 
                    put forth is just as significant as the outcome. By acknowledging this, 
                    we reinforce the idea that every contribution matters. It reminds people 
                    that their journey, no matter how challenging, is valued and appreciated.
                     This act of acknowledgment is crucial in creating an environment where 
                     people feel seen, heard, and motivated to keep striving for greatness. 
                     Recognition doesn’t always have to be grand—it can be as simple as a 
                     kind word, a thank-you note, or a moment of public acknowledgment. 
                     Small gestures can go a long way in making individuals feel valued for 
                     their work.
                    </p>
               </div>
               <div className="lg:6/12 p-2 lg:py-12">
                 <img src="https://i.ibb.co.com/LNGyXRj/EEPC-Award.webp" alt="" />
               </div>
            </div>
        </div>
    );
};

export default Award;