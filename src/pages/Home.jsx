import { Helmet } from "react-helmet";
import AboutUS from "../components/AboutUS";
import Award from "../components/Award";
import Banner from "../components/Banner";
import DonationStatus from "../components/DonationStatus";
import Work from "../components/Work";
import { useEffect, useState } from "react";
import Sponsor from "../components/Sponsor";


const Home = () => {
   const [allData , setAllData] = useState([])
     useEffect(()=>{
       fetch("../sponsor.json")
       .then(res=> res.json())
       .then (data=> setAllData(data))
     },[])


    return (
        <div className="animate__animated animate__zoomIn ">
            <Helmet>
                <title>
                    Home || WinterAid BD
                </title>
            </Helmet>
            <Banner></Banner>
            <DonationStatus></DonationStatus>
            <AboutUS></AboutUS>
            <Work></Work>
            <Award></Award>
            <Sponsor allData={allData}></Sponsor>
            
        </div>
    );
};

export default Home;