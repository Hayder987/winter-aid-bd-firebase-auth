import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const DonationCampaigns = () => {
    const data = useLoaderData();
    
    return (
        <div>
           <div className="">
            {
                data.map(item=> <Card key={item.id} item={item} ></Card>)
            }
           </div>
        </div>
    );
};

export default DonationCampaigns;