import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import Navb from './Navb';
import './styles/about.css';
import Carousel from 'react-bootstrap/Carousel';


const About = () => {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <>
      {/* <h1>hi to me hello</h1> */}
      {<Navb />}
      <div className='home'>
        <div className="leftabt">


          <div class="typewriter" id='abttid'>
            <h1>About.</h1>
            <p>CSE, final year student at RGIPT, 
              I am passionate about becoming a software developer with a focus on full-stack development using MERN stack technologies. I have hands-on experience with MongoDB, ExpressJS, ReactJS, and NodeJS.
               {/* and I am always looking for ways to improve my skills and expand my knowledge. */}

{/* In addition to my interest in web development,  */}
I have also explored the field of machine learning and 
{/* am fascinated by its potential to revolutionize various industries. */}
 I have completed several projects using Python and various ML libraries.I am a quick learner and a dedicated problem solver,
  always eager to take on new challenges and projects. I am looking for opportunities to apply my skills and knowledge to make a positive impact in technical industry. 
  {/* If you are looking for a passionate and driven software developer with experience in MERN stack development and machine learning, please feel free to reach out to me. */}
</p>
               
          </div>   
        </div>
        <div className="rightA">
          <Carousel activeIndex={index} onSelect={handleSelect} prevLabel={null} nextLabel={null} >
            {data.education.map((ele, index) => (
              <Carousel.Item style={{ alignItems: "center", justifyContent: 'space-around' }}>
                {/* {/* <ExampleCarouselImage text="First slide" /> * */}
                <div className='aboutcon'>
                  <div className="edcard">
                    <div className="edcardhead">
                      <h1> {ele.cardTitle}</h1>
                    </div>
                    <div className="edcont">
                      <div className="edconhead">
                        <h2>{ele.cardSubtitle}</h2>
                        <h2>{ele.title}</h2>
                        <h2>{ele.cardDetailedText}</h2>
                      </div>


                    </div>
                  </div>

                </div>
                <Carousel.Caption>

                  <h3 className='capt'>Education</h3>
                  {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}

                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

        </div>

      </div>
    </>
  ) : <FallbackSpinner />;

}

export default About;
