import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';


const Hero = () => {
  return ( 
    <div>
        <div className='wrap' id='hero'>
            <div className='content'>
                <h1> Jasa Penerjemah</h1>
                <p>Jasa Penerjemah Resmi dan Tersumpah</p>
                <div className='btn-group'>
                    <button>
                    <Link to='contact' className='color'>Hubungi Kami
                    </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
   
};

export default Hero;
