import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone} from 'react-icons/fa';
import './Kontak.css';

const Kontak = () => {
  return (
    <>
    <div className='contact' id='contact'>
        <h1>Kontak Kami</h1>
        <div className='container-2'>
            <div className='contactInfo'>
                <div className='box'>
                    <div className='icon'>
                        <FaMapMarkerAlt/>
                    </div>
                    <div className='text'>
                        <h3>Alamat</h3>
                        <p>Jl. Graha Taman Blok Hc 11 no 1. Tangerang Selatan 1554</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <FaPhone/>
                    </div>
                    <div className='text'>
                        <h3>Telepon</h3>
                        <p>085921722974</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <FaEnvelope/>
                    </div>
                    <div className='text'>
                        <h3>Email</h3>
                        <p>fadhlyrobbani1986@gmail.com</p>
                    </div>
                </div> 
            </div>
            <div className='contactForm'>
                    <form action='#'>
                        <h2>Kirim Pesan</h2>
                        <div className='inputBox'>
                            <input type='text' name='name' required/>
                            <span>Nama Lengkap</span>
                        </div>
                        <div className='inputBox'>
                            <input type='text' name='email' required/>
                            <span>Email</span>
                        </div>
                        <div className='inputBox'>
                            <textarea type='text' name='message' required/>
                            <span>Pesan Anda....</span>
                        </div>
                        <div className='inputBox'>
                            <input type='submit' name='Submit' value='Kirim'/>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    </>
  );
}

export default Kontak






// import React from 'react';
// import './Kontak.css';

// const Kontak = () => {
//   return (
//   <>
//   <div className="contact" id="contact">
//        <h1>Kontak</h1>
//        <div className='container'>
//              <div className='form'>
//                     <h3>Alamat</h3>
//                     <p>Jl.Graha Estate Malang Blok LL 1 No.5 
//                         <br>Desa landungsari,Kecamatan Dau,Kabupaten Malang 65151</br>
//                     </p>
//                 </div>
//                 <div className='form'>
//                     <h3>Telepon</h3>
//                     <p>+62 859 2172 2974</p>
//                 </div>
//                 <div className='form'>
//                     <h3>Email</h3>
//                     <p>fadhlyrobbani1986@gmail.com</p>
//                 </div>
//         </div>
//     </div>
//      </>
//     );
// };

// export default Kontak;
