import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { Helmet } from "react-helmet";


const DonationCampaigns = () => {
    const data = useLoaderData();
    
    return (
        <div className="animate__animated animate__fadeInUp">
            <Helmet>
                <title>DonationCampaign || WinterAid BD</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center py-12">All Campaigns Running In BD</h1>
           <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12">
            {
                data.map(item=> <Card key={item.id} item={item} ></Card>)
            }
           </div>
        </div>
    );
};

export default DonationCampaigns;