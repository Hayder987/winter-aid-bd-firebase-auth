import AboutUS from "../components/AboutUS";
import Award from "../components/Award";
import Banner from "../components/Banner";
import DonationStatus from "../components/DonationStatus";
import Work from "../components/Work";


const Home = () => {
    return (
        <div className="animate__animated animate__zoomIn ">
            <Banner></Banner>
            <DonationStatus></DonationStatus>
            <AboutUS></AboutUS>
            <Work></Work>
            <Award></Award>
            
        </div>
    );
};

export default Home;