
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const qtyRef = useRef();
  const itemsRef = useRef()
  const [condition, setCondition] = useState(false)
  const [itemCondition, setItemCondition] = useState(false)
  
  useEffect(()=>{
      fetch("/campaindata.json")
      .then(res=> res.json())
      .then(data=> {
        const eachData = data.find(x=> x.id=== parseInt(id))
        setItem(eachData)
      })
  },[id])

const {title, image, description, status, contactInfo, division} = item || {};

const donateFormHandler =(e)=>{
   e.preventDefault()
   const item = e.target.item.value;
   const qty = e.target.qty.value;
   const address = e.target.address.value;
   const notes = e.target.notes.value;

  Swal.fire({
    position: "top-middle",
    icon: "success",
    title: "Thank you ! We will reach your destination soon",
    showConfirmButton: false,
    timer: 2000,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
  setCondition(false)
  setItemCondition(false)
  e.target.reset()

}

const quantityHandler =()=>{
  if(qtyRef.current.value==="above"){
    setCondition(true)
  }
  else{
    setCondition(false)
  }
   
}


const othersItemHandler=()=>{
  if(itemsRef.current.value==="others"){
    setItemCondition(true)
  }
  else{
    setCondition(false)
  }
}


  return (
    <div className="">
      <Helmet>
        <title>Donation Deatails || WinterAid BD</title>
      </Helmet>
        <h1 className="text-3xl font-bold mb-8 text-center">Donate For {title}</h1>
        <div
         style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
         className="min-h-[60vh] p-4 md:p-10 lg:p-16 mb-20 rounded-2xl">
           <div className="bg-white p-2 md:p-6 max-w-[650px] rounded-xl">
              <h2 className="mb-4 text-center text-xl font-semibold">status: {status}</h2>
              <h3 className="text-center mb-4">{description}</h3>
              <div className="flex justify-between text-gray-500 font-semibold mb-4">
                <p className="">Phone: {contactInfo?.phone}</p>
                <p className="">Email: {contactInfo?.email}</p>
              </div>
              <h3 className="text-xl text-center font-bold">{division}</h3>

              <form  onSubmit={donateFormHandler}>
              <div className="mt-6 border-t-2 py-6">
                <div className="flex gap-3 justify-center items-center">
                   <select onClick={othersItemHandler} ref={itemsRef} name="item" className="select select-bordered md:w-3/4 max-w-xs" >
                    <option >Item type</option>
                    <option value="blanket">Blanket</option>
                    <option value="jacket">Jacket</option>
                    <option value="sweater">Sweater</option>
                    <option value="both">Both</option>
                    <option value="others">Others</option>
                   </select>

                   <select onClick={quantityHandler} ref={qtyRef} name="qty" className="select select-bordered md:w-1/4 max-w-xs">
                    <option >Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="above">Above</option>
                   </select>
                   
                   <div className={`${condition? "flex" : "hidden"}`}>
                    <input type="text" name="qty" placeholder="Qty" className="input input-bordered w-[80px]"/>
                   </div>
                   

                </div>
                <div 
                className={`${itemCondition?"flex justify-center items-center":"hidden"} mt-4`} >
                  <input type="text" name="others" placeholder="Enter item name" className="input input-bordered w-full"/>
                </div>
                <div className="flex justify-center items-center mt-4" >
                  <input type="text" name="address" placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka" className="input input-bordered w-full" required/>
                </div>
                <div className="">
                  <textarea name="notes" className="textarea textarea-bordered w-full mt-4" rows={4} placeholder="Additional notes "></textarea>
                </div>
                <div className="mt-4">
                   <button  className="bg-textColor rounded-xl font-semibold block mx-auto py-3 px-6 text-white">Submit</button>
                </div>
              </div>
              </form>
           </div>
           
        </div>
      
    </div>
  );
};

export default DonationDetails;
