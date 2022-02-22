import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='footer-content'>
            <h3>Jasa Penerjemah</h3>
            <p>Menjaga Kepercayaan Pelanggan Dengan Kualitas Layanan Terbaik</p>
        </div>
        <div className='footer-bottom'>
            <p>copyright &copy;2022 | Jasa Penerjemah</p>
            <a href="https://www.instagram.com/mufadhlyrobbani_4/" rel="noreferrer" class="footer-link"><i class="fab fa-instagram 5X"></i></a>
            <a href="https://www.facebook.com/muhammadfadhly.robbani/" class="footer-link"><i class="fab fa-facebook" rel="noreferrer" ></i></a>
            <a href="https://wa.me/6285921722974" rel="noreferrer" class="footer-link"><i class="fab fa-whatsapp"></i></a>
        </div>
    </footer>
    </>

  );
};

export default Footer;
