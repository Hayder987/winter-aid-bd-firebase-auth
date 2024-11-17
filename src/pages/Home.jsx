import AboutUS from "../components/AboutUS";
import Award from "../components/Award";
import Banner from "../components/Banner";
import Work from "../components/Work";


const Home = () => {
    return (
        <div className="animate__animated animate__slideInUp ">
            <Banner></Banner>
            <AboutUS></AboutUS>
            <Work></Work>
            <Award></Award>
        </div>
    );
};

export default Home;