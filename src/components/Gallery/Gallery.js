import React from 'react'
import './Gallery.css';
import Gambar1 from '../images/3pic.jpeg';
import Gambar2 from '../images/4pic.jpeg';

const Gallery = () => {
  return (
    <>
    <section className='gallery' id='gallery'>
        <div className='global-headline'>
            <h2 className='sub-headline'>Gallery</h2>
        </div>
        <div className='container2'>
            <div className='gallery'>
                <img src={Gambar1} alt=''/>
            </div>
            <div className='gallery'>
                <img src={Gambar2} alt=''/>
            </div>
            <div className='gallery'>
                <img src={Gambar1} alt=''/>
            </div>
            <div className='gallery'>
                <img src={Gambar2} alt=''/>
            </div>
            <div className='gallery'>
                <img src={Gambar1} alt=''/>
            </div>
            <div className='gallery'>
                <img src={Gambar2} alt=''/>
            </div>
            <div className='gallery'>
                <img src={Gambar1} alt=''/>
            </div>
            <div className='gallery'>
                <img src={Gambar2} alt=''/>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Gallery