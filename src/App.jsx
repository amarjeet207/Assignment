import React, { useState } from "react";
import largeLogo from './assets/EZ-Works-Blue@2x.png'
import DataProcessing from './assets/Data-Processing.svg'
import AudioVisual from './assets/Audio-Visual-Production.svg'
import GraphicDesign from './assets/Graphic-Design.svg'
import PresentationDesign from './assets/Presentation-Design.svg'
import ResearchAnalytics from './assets/Research-Analytics.svg'
import TranslationServices from './assets/TranslationServices.svg'
import design from './assets/Design@4x@2x.png'
import audio from './assets/Audio@4x.png'
import translation from './assets/Translation@4x@2x.png'
import graphic  from './assets/Graphic@4x.png'
import  research from './assets/Research@4x@2x.png'
import  dataProcessing from './assets/DataProcessing@4x.png'
import axios from 'axios';


function App() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Empty Form Submission is not allowed. Please enter an email address.");
      return;
    }

   
      const response = await axios.post("https://test.ezworks.ai/api", {
        email: email,
      });

      if (response.status === 200) {
        setError(""); // Clear any previous error
        setEmail("Form Submitted"); // Update input field
      } else if (response.status === 422) {
        console.log("422 status received"); // Add this to debug
        setError("Unprocessable Entity. Please check the email address format.");
      } else {
        console.log("Other status received:", response.status);
      }
    
  };




  return (
    <div className="box-border m-0 p-10 flex xs:flex-col lg:flex-row gap-10 items-center h-screen w-screen">

      {/* Left Box */}
      <div className=" border-green-900 flex-1 ">
          <img src={largeLogo} className="h-[80px]" />
       <p className="mt-8 text-[32px] text-[#112949]">Suite Of Business Support Services</p>
       <p className="mt-8 text-[18px] text-[#112949] tracking-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
      
      <div className="mt-8 flex  xs:flex-col md:flex-row justify-between items-center gap-3">
          <input
            type="text"
            placeholder="Email Address"
            className="border-1 border-[#ABABAB] py-2 px-3 rounded-md outline-0 w-full flex-1"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        

        <button className="bg-[#EA7B2C] text-[#FFFFFF] rounded-md xs:w-40 lg:w-30 self-center py-2 px-3 cursor-pointer"
        onClick={handleFormSubmission} >Contact Me</button>
      </div>
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </div>
      
      {/*right-box  */}
      <div className=" border-red-600 flex  xs:flex-col md:flex-row flex-wrap gap-10  flex-1 ">

        <div className=" bg-[#112949] p-3 w-40 h-38 rounded-md">
          <div className="flex gap-3">
            <img src={design} className="w-8"/>
            <img src={PresentationDesign} className="w-26"/>
          </div>
          <p className="text-slate-50 text-sm mt-3">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
        </div>
        
        <div className=" bg-[#112949] p-3 w-40 h-38 rounded-md">
          <div className="flex gap-3">
            <img src={audio} className="w-8"/>
            <img src={AudioVisual} className="w-26"/>
          </div>
          <p className="text-slate-50 text-sm mt-3">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
        </div>

        <div className=" bg-[#112949] p-3 w-40 h-38 rounded-md">
          <div className="flex gap-3">
            <img src={translation} className="w-8"/>
            <img src={TranslationServices} className="w-26"/>
          </div>
          <p className="text-slate-50 text-sm mt-3">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
        </div>

        <div className=" bg-[#112949] p-3 w-40 h-38 rounded-md">
          <div className="flex gap-3">
            <img src={graphic} className="w-8"/>
            <img src={GraphicDesign} className="w-26"/>
          </div>
          <p className="text-slate-50 text-sm mt-3">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
        </div>

        <div className=" bg-[#112949] p-3 w-40 h-38 rounded-md">
          <div className="flex gap-3">
            <img src={research} className="w-8"/>
            <img src={ResearchAnalytics} className="w-26"/>
          </div>
          <p className="text-slate-50 text-sm mt-3">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
        </div>

        <div className=" bg-[#112949] p-3 w-40 h-38 rounded-md">
          <div className="flex gap-3">
            <img src={dataProcessing} className="w-8"/>
            <img src={DataProcessing} className="w-26"/>
          </div>
          <p className="text-slate-50 text-sm mt-3">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
