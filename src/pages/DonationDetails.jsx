
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null)
  
  useEffect(()=>{
      fetch("/campaindata.json")
      .then(res=> res.json())
      .then(data=> {
        const eachData = data.find(x=> x.id=== parseInt(id))
        setItem(eachData)
      })
  },[id])



  return (
    <div>
      
    </div>
  );
};

export default DonationDetails;
