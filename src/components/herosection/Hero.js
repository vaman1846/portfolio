import './Hero.scss';

import Typed from 'react-typed';
import pic1 from '../../pics/profile.png';
import Navbar from '../navbar/Navbar';


const Hero = () => {
    return(
       <section className="herosection">
        <Navbar/>

<section className='circle'>
       <div className='big'></div>
       <div className='mmed'></div>
       <div className='med'></div>
       <div className='msmall'></div>
       <div className='small'></div>
       <div className='vsmall'></div>
       </section>

<div className='details'>
        <img src={pic1} alt="main" />
        <p className='software'>Software Developer</p>
        
                   <Typed  style={{color:"white", fontSize:"xx-large"}}  
                     strings={["Hi, I'm Aman Vishwakarma",
                    'MERN DEVELOPER',
                    'Competetive Programmer/'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                </div>
                
                <div className="navba">
                <ul className='nav'>
                    <a href='#about'><li className="buttons">About</li></a>
                    <a href='#skills'><li className="buttons">Skills</li></a>
                    <a href='#project'><li className="buttons">Projects</li></a>
                    <a href='experience'><li className="buttons">Experince</li></a>
                </ul>
            </div>

       </section>
    )
}

export default Hero;