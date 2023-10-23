// import React, { useEffect, useState } from "react";
// import Loader from "react-loaders";
// import AnimatedLetters from "../AnimatedLetters";
// import "./index.scss";
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

// const Portfolio = () => { 
//     const [letterClass, setLetterClass] = useState('text-animate');
//     const [portfolio, setPortfolio] = useState([]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLetterClass('text-animate-hover');
//         }, 3000);

//         return () => {
//             clearTimeout(timer);
//         }
//     });

//     useEffect(() => {
//         getPortfolio();
//     }, []);

//     const getPortfolio = async () => {
//         const querySnapshot = await getDocs(collection(db, 'portfolio'));
//         setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
//     }

//     const renderPortfolio = (portfolio) => {
//         return (
//             <div className="images-containerproject5">
//                 {
//                     portfolio.map((port, idx) => {
//                         return (
//                             <div className="image-box" key={idx}>
//                                 <img 
//                                 src={port.image}
//                                 className="portfolio-image"
//                                 alt="portfolio" />
//                                 <div className="contenters">
//                                     <p className="title">{port.name}</p>
//                                     <h4 className="description">{port.description}</h4>
//                                     <button
//                                         className="btn"
//                                         onClick={() => window.open(port.url)}
//                                     >View</button>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         );
//     }


//     return (
//         <>
//             <div className="containerproject5 portfolio-page">
//                 <h1 className="page-title">
//                     <AnimatedLetters
//                         letterclassName={letterClass}
//                         strArray={"Portfolio".split("")}
//                         idx={15}
//                     />
//                 </h1>
//                 <div>{renderPortfolio(portfolio)}</div>
//             </div>
//             <Loader type="pacman" />
//         </>
//     );
// }

// export default Portfolio;

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import endpoints from '../constants/endpoints';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import Loader from 'react-loaders';

//   import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Project.css'
import Navb from './Navb';

// import { containerproject5, Col, Row } from 'react-bootstrap';
// import Fade from 'react-reveal';
// import FallbackSpinner from './FallbackSpinner';
// import Navb from './Navb';

const Project= () => {
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    useEffect(() => {
        fetch(endpoints.projects, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => 
        //   console.log(res)
          setData(res)
          )
          
          .catch((err) => err);
      }, []);
      

 
    
      return data ? (
        <>
    {<Navb/>}
    <div className="home">
        <div className="left">
            

<div class="typewriter">
  <h1>Project.</h1>
</div>


        </div>
        <div className="rightP">
          <div className="projectparrent">
        <Carousel activeIndex={index} onSelect={handleSelect}  prevLabel={null} nextLabel={null}>
            {data.projects.map((ele, index)=>(
                      <Carousel.Item style={{alignItems:"center", justifyContent:'space-around'}}>
                      {/* {/* <ExampleCarouselImage text="First slide" /> * */}
                      <div className='body1'>
                             <div className="containerproject">
                      <div className="card">
                          <div className="face face1">
                              <div className="content">
                                  <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" alt=''/>
                                  <h3>{ele.title}</h3>
                              </div>
                          </div>
                          <div className="face face2">
                              <div className="content">
                                  <p>
                                    {ele.bodyText}
                                  </p>
                                      <a href={ele.links[1].href}>Live</a>
                                      <a href={ele.links[0].href}>Github</a>

                              </div>
                          </div>
                      </div>
              
                  </div>
                            </div>
                      <Carousel.Caption>
                          
                        <h3 className='capt'>Project:{index+1}</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              
                      </Carousel.Caption>
                    </Carousel.Item>
            ))}


     
     
    </Carousel>
    </div>

        </div>
      
       </div>
       
        </>
    )  : 
    <Loader type="pacman" />;

}

export default Project;

