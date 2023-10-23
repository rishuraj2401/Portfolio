import React from 'react';
import Navb from './Navb';
import { useState } from 'react';
import { useEffect } from 'react';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import  './styles/home.css'


const Home = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
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
  <h1 id='myname'>Rishu Raj Sinha.</h1>
  <div className="codingprofile">
    <a href='https://leetcode.com/rishuraj2401/' target=' '><h5>Leetcode</h5></a>
    <a href='https://codeforces.com/profile/rishuraj2401' target=' '><h5>CodeForces</h5></a>
    <a href='https://www.codechef.com/users/rishuraj_2401' target=' '><h5>CodeChef</h5></a>
    <a href='https://github.com/rishuraj2401' target=' '><h5>Github</h5></a>
    <a href='https://www.linkedin.com/in/rrs2401/' target=' '><h5>Linkedin</h5></a>
    <a href='mailto:rishuraj2401sinha@gmail.com' target=' '><h5>Email Id</h5></a>


  </div>


</div>


        {/* <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['R', 'I', 'S', 'H', 'U', ' ', 'R', 'A', 'J' ]}
              idx={15}
            />
          </h1> */}
        </div>
        <div className="rightH">
          {/* <div className="righttext"> <div class="hover-text">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
    </div></div> */}
    <div className="profilephoto">
      <div className="profilebg"></div>
    </div>
    <div className="ab">
      
            <ul>
              <li>Qualified IIT-JEE Advanced 2020, ranking in the top 2%.</li>
              <li>ONGC Scholar: ONGC MERITORIOUS SCHOLARSHIP 2020-21</li>
              <li> Facebook Hacker cup 2022: Advanced to Round 1, rank: 5009th</li>
              <li>Solved 400+ problem on codechef, codeforces, leetcode, geeksforgeeks</li>
              <li>Head of Team Zorin , Science and technical council RGIPT</li>
              <li>Designing Head at Cultural Council RGIPT</li>

      
            </ul>
          {/* </div> */}
    </div>

        </div>

      
       </div>



        {/* <h1>hi to me hello</h1>
       
        {<Navb/>}
        <div className='home'>
         {/* {<Ani/>} 
            <div className="homepadding">
             <div className="homeR">
             
    <Fade>
      <div style={styles.mainContainer}>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
      </div>
    </Fade>
  

             </div>
             <div className="homeL">
             <div className="blob1" style={{position:"absolute", zIndex:"0"}}>
          <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      id="blobSvg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(233, 100, 67)' }}></stop>
          <stop offset="100%" style={{ stopColor: 'rgb(144, 78, 149)' }}></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient)"
      >
        <animate
          attributeName="d"
          values="
          M434.5,293.5Q431,337,396.5,364Q362,391,324.5,402Q287,413,246,430Q205,447,176.5,412.5Q148,378,124,350Q100,322,61.5,286Q23,250,47,207Q71,164,106.5,139Q142,114,179,107Q216,100,251,95.5Q286,91,329,94Q372,97,419.5,121Q467,145,452.5,197.5Q438,250,434.5,293.5Z;
            M396.5,284Q392,318,371,347Q350,376,321.5,406.5Q293,437,245,460.5Q197,484,152.5,456Q108,428,95.5,379.5Q83,331,57,290.5Q31,250,37,200Q43,150,89,128Q135,106,167,67Q199,28,242,62.5Q285,97,331,94Q377,91,400.5,128.5Q424,166,412.5,208Q401,250,396.5,284Z;
            M428.5,296.5Q443,343,403.5,367.5Q364,392,332,431Q300,470,255.5,444.5Q211,419,181.5,395.5Q152,372,90.5,364Q29,356,61.5,303Q94,250,94,212.5Q94,175,122.5,150.5Q151,126,183,111Q215,96,256.5,67.5Q298,39,342.5,59Q387,79,403,123.5Q419,168,416.5,209Q414,250,428.5,296.5Z;
          "
          dur="9000ms"
          repeatCount="indefinite"
        />
      </path>
    </svg>

             </div>
            </div>
            
            
        </div> */}
        </>
    )  : <FallbackSpinner />;
}

export default Home;
