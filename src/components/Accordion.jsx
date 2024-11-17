

const Accordion = () => {
    return (
        <div>
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" defaultChecked />
             <div className="collapse-title text-xl font-medium">What is Winter Aid BD?</div>
             <div className="collapse-content">
               <p>Winter Aid BD is a platform dedicated to connecting donors with volunteers to provide warm clothes to those in need across Bangladesh during the harsh winter months.</p>
             </div>
           </div>
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" />
             <div className="collapse-title text-xl font-medium">What items can I donate?</div>
             <div className="collapse-content">
               <p>JacketsSweaters,Blankets, Scarves, Gloves and caps, We accept both new and gently used items that are clean and in good condition.</p>
             </div>
           </div>
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" />
             <div className="collapse-title text-xl font-medium">How do I donate clothes?</div>
             <div className="collapse-content">
               <p>You can donate clothes by dropping them off at our designated collection points in your area. Alternatively, you can fill out the Donation Form on our website, and our volunteers will arrange a pickup.</p>
             </div>
           </div> 
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" />
             <div className="collapse-title text-xl font-medium">Are used clothes accepted?</div>
             <div className="collapse-content">
               <p>Yes, we accept gently used clothes that are clean and in good condition. Please ensure that the items are free from stains or tears.</p>
             </div>
           </div> 
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" />
             <div className="collapse-title text-xl font-medium">Can I donate money instead of clothes?</div>
             <div className="collapse-content">
               <p>Yes, financial contributions are welcome. Your donations will be used to purchase essential winter supplies for those in need. You can donate through Bkash, Nagad, or direct bank transfer.</p>
             </div>
           </div> 
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" />
             <div className="collapse-title text-xl font-medium"> How can I volunteer with Winter Aid BD?</div>
             <div className="collapse-content">
               <p>You can join us as a volunteer by filling out the Volunteer Form on our website. Volunteers help with sorting clothes, managing collection points, and distributing donations to beneficiaries.</p>
             </div>
           </div> 
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" />
             <div className="collapse-title text-xl font-medium">Is there any deadline for donations?</div>
             <div className="collapse-content">
               <p>No, we accept donations throughout the winter season. However, donating earlier helps us distribute items to those in need faster.</p>
             </div>
           </div>
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" />
             <div className="collapse-title text-xl font-medium"> How can I track my donation?</div>
             <div className="collapse-content">
               <p>You will receive an email or text confirmation once your donation is processed. We also provide updates through our website and social media platforms about ongoing and completed campaigns.</p>
             </div>
           </div>
           <div className="collapse collapse-plus bg-base-200">
             <input type="radio" name="my-accordion-3" />
             <div className="collapse-title text-xl font-medium">Are there any charges for pickup services?</div>
             <div className="collapse-content">
               <p>No, our pickup service is completely free. Just fill out the Donation Form, and our team will coordinate with you for the pickup.</p>
             </div>
           </div>
        </div>
    ); 
};

export default Accordion;