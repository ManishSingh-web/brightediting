import React,{useState ,useRef} from 'react'
import { motion } from 'framer-motion';
import SuccessPopup from "../successpopup/SuccessPopup";


const ContactformRight = () => {
    const formRef = useRef(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        service: '',
        message: '',
        file_link: "",
        company: '',
        country: '',
      });
    
        
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formDataToSend = new FormData(e.target);

    formDataToSend.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    const result = await response.json();

    if (result.success) {
         setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        number: "",
        service: "",
        message: "",
        file_link:"",
        company: "",
        country: "",
      });

      if (formRef.current) {
        formRef.current.value = null;
      }
    } else {
      alert("Form submission failed try again");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
   setLoading(false);
};
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({
              ...prev,
              [name]: value,
            }));
          }
  return (
    <>
    <motion.div 
       initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
               }}
    className='flex flex-col items-center mt-10 font-sans w-120 px-10 py-10 rounded-2xl bg-gray-200 dark:bg-gray-900'>
      <h2 className='text-3xl font-bold mb-6 text-center max-sm:text-2xl '>Send us a message</h2>
      <form className='flex flex-col w-full max-w-lg mt-10 font-sans  ' onSubmit={handleSubmit}>

         {/* Spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
      />

      <input type="hidden" name="subject" value="New Photo Editing Inquiry"></input>
      <input type="hidden" name="from_name" value="Bright Editing"></input>
    
            <input type="text" placeholder='Full Name'
            name='name'
            style={{ fontFamily: "Poppins, sans-serif" }}
            required
            onChange={handleInputChange}
            value={formData.name}
            autoComplete='name'
             className=' rounded-md p-2 mb-4 w-full bg-gray-300 text-yellow-600  dark:bg-gray-600  outline-0  ' />

            <input type="email" placeholder='Email Address'
            name='email'
            style={{ fontFamily:"system-ui" }}
            required
            onChange={handleInputChange}
            value={formData.email}
            autoComplete='email'
             className=' rounded-md p-2 mb-4 w-full font-sans bg-gray-300   dark:bg-gray-600 text-yellow-600  outline-0 ' />

            <input type="tel" placeholder='Phone / WhatsApp Number'
            name='number'
            onChange={handleInputChange}
            value={formData.number} 
            style={{ fontFamily:"system-ui" }}
            required
            autoComplete='tel'
            className=' rounded-md p-2 mb-4 w-full bg-gray-300   dark:bg-gray-600 text-yellow-600  outline-0 ' />

            <input type="text" placeholder='Company Name / business'
            name='company'
            style={{ fontFamily:"system-ui" }}
            required
            onChange={handleInputChange}
            value={formData.company}
            autoComplete="organization"
             className=' rounded-md p-2 mb-4 w-full bg-gray-300 dark:bg-gray-600 text-yellow-600   outline-0 ' />

             <input type="text" placeholder='Country'
             name='country'
            style={{ fontFamily:"system-ui" }}
            required
            onChange={handleInputChange}
            value={formData.country}
            autoComplete="country-name"
             className=' rounded-md p-2 mb-4 w-full bg-gray-300   dark:bg-gray-600 text-yellow-600  outline-0 ' />

            <select value={formData.service} onChange={handleInputChange} 
            name="service" style={{ fontFamily:"system-ui" }}
            required
            className=' rounded-md p-2 mb-4 w-full dark:bg-gray-600 text-yellow-600  bg-gray-300    outline-0 '>
                  <option value="" disabled>Select plan</option>
                  <option value="basic">Basic Editing</option>
                  <option value="pro">Pro Editing</option>
                  <option value="bulk">bulk plan</option>
                  <option value="custom plan">custom plan</option>
            </select>

          <input type="url"
            name='file_link'
            style={{ fontFamily:"system-ui" }}
               value={formData.file_link}
               onChange={handleInputChange}
               placeholder="Paste file link"
             className='rounded-md p-2 mb-4 w-full hover:bg-gray-700 bg-gray-300  text-yellow-600  dark:bg-gray-600  outline-0 ' />

            <textarea placeholder='Message'
            name='message'
            onChange={handleInputChange}
            value={formData.message}
           style={{ fontFamily:"system-ui" }}
            className='rounded-md p-2 mb-4 w-full min-h-32 dark:bg-gray-600 bg-gray-300   text-yellow-600  outline-0 '></textarea>


            <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 transition-colors
          duration-300 text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-70">
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>

      Sending...
    </>
  ) : (
    "Send Message"
  )}
</button>
            </form>

    </motion.div>

    <SuccessPopup
  show={showSuccess}
  onClose={() => setShowSuccess(false)}
/>
       </>
  )
}

export default ContactformRight;
