import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import endpoints from '../constants/endpoints';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import Loader from 'react-loaders';

//   import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/exp.scss'
import Navb from './Navb';

// import { container5, Col, Row } from 'react-bootstrap';
// import Fade from 'react-reveal';
// import FallbackSpinner from './FallbackSpinner';
// import Navb from './Navb';

const Experience= () => {
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    useEffect(() => {
        fetch(endpoints.experiences, {
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
  <h1>Experience.</h1>
</div>

</div>
        <div className="right" id="rightEx">
        <Carousel activeIndex={index} onSelect={handleSelect} prevLabel={null} nextLabel={null}>
        {/* {data.map((item) => (
        //   <li key={}>{item.text}</li>
        <p>me</p>
        ))} */}
            {data.experiences.map((ele, index)=>(
                      <Carousel.Item style={{alignItems:"center", justifyContent:'space-around'}}>
                      {/* {/* <ExampleCarouselImage text="First slide" /> * */}
                      <div className='expR'>
                                        <div className="blog-card">
                                            <div className="meta">
                                                <div className="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" }}></div>
                                                <ul className="details">
                                                    <li className="author">{ele.workType}</li>
                                                    <li className="date">{ele.dateText}</li>
                                                    {/* <li className="tags">
                                                        <ul>
                                                            <li><a href="#">Learn</a></li>
                                                            <li><a href="#">Code</a></li>
                                                            <li><a href="#">HTML</a></li>
                                                            <li><a href="#">CSS</a></li>
                                                        </ul>
                                                    </li> */}
                                                </ul>
                                            </div>
                                            <div className="description">
                                                <h1>{ele.subtitle}</h1>
                                                <h2>{ele.title}</h2>
                                                <p>{ele.workDescription}</p>
                                                <p className="read-more">
                                                    <a href={ele.link}>Link</a>
                                                </p>
                                            </div>
                                        </div>
                                    
                                    </div>
                      <Carousel.Caption>
                          
                        <h3 className='capt'>Experience: {index+1}</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              
                      </Carousel.Caption>
                    </Carousel.Item>
            ))}


     
     
    </Carousel>

        </div>
      
       </div>
        </>
    )  : 
    <Loader type="pacman" />;

}

export default Experience;

