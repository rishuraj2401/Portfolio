import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import Navb from './Navb';
import './styles/about.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Rishu_Raj from './image/Rishu_Raj.pdf';
import './styles/resume.css';


const Resume = () => {
    const [data, setData] = useState(null);
    const [viewPdf, setV]=useState(Rishu_Raj)
   
    useEffect(() => {
        fetch(endpoints.education, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => err);
      }, []);
    
    const newplugin = defaultLayoutPlugin()
      return data ? (
        <>
        {/* <h1>hi to me hello</h1> */}
        {<Navb/>}
        <div className='home'>
           <div className="left">
          

<div class="typewriter">
  <h1>Resume.</h1>
</div>




           </div>
           <div className="right">
            <div className="pdf-container">
           {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">  */}
           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
           {viewPdf && <> <Viewer fileUrl={viewPdf} plugins={[newplugin]}/> </>} {!viewPdf && <>No PDF</>} </Worker> I
           </div>
           </div>
        </div>
        </>
    )  : <FallbackSpinner />;

}

export default Resume;
