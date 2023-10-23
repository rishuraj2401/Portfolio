import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import endpoints from '../constants/endpoints';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import Loader from 'react-loaders';

//   import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/skill.css'
import Navb from './Navb';

// import { container5, Col, Row } from 'react-bootstrap';
// import Fade from 'react-reveal';
// import FallbackSpinner from './FallbackSpinner';
// import Navb from './Navb';

const Skills= () => {
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    useEffect(() => {
        fetch(endpoints.skills, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => err);
      }, []);
      

 
    
      return data ? (
        <>
    {<Navb/>}
    <div className="home">
        <div className="left">

<div class="typewriter">
  <h1>Skills.</h1>
</div>

</div>
        <div className="rightSk">
        <Carousel activeIndex={index} onSelect={handleSelect}  prevLabel={null} nextLabel={null} >
            {data.skills.map((ele, index)=>(
                      <Carousel.Item style={{alignItems:"center", justifyContent:'space-around'}}>
                      {/* {/* <ExampleCarouselImage text="First slide" /> * */}
                      <div className="skillparent">
                      <div className='skill'>
                                       {
                                        ele.items.map((E,I)=>(
                                          <div className="iconimg">
                                            <img src={E.icon} alt={E.title}/>
                                            
                                            <h5>{E.title}</h5>
                                          </div>
                                        ))
                                       }
                                    </div>
                      <Carousel.Caption>
                          
                        <h3 className='capt'>{ele.title}</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              
                      </Carousel.Caption>
                      </div>
                    </Carousel.Item>
            ))}


     
     
    </Carousel>

        </div>
      
       </div>
       
        </>
    )  : 
    <Loader type="pacman" />;

}

export default Skills;

