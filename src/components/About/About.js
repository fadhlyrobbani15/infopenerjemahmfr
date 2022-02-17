import React from 'react';
import './About.css';
import Showcase from '../images/1pic.jpeg';

const About = () => {
  return(
    <>
    <section className='section' id='about'>
    <div className='container-a'>
        <div className='image-about'>
            <img src= {Showcase} alt=''/>
        </div>
        <div className='aboutus'>
            <h1>Tentang Kami</h1>
            <p>Terimakasih telah mengunjungi kami di Information Translation Center. Kami merupakan Biro jasa penyediaan jasa info penerjemah tersumpah resmi dan jasa legalisasi dokumen. Layanan jasa kami sebagai berikut: Penerjemah Bahasa inggris, Jerman, Arab Saudi, Belanda, Prancis, Korea, Rusia, Portugis, Mandarin, Spanyol, Italia, Indonesia. Jasa penerjemah kami tersumpah resmi, menjamin hasil terjemahan kami dapat dilegalisasi di Departemen Hukum dan HAM, Departemen Luar Negeri, dan Kedutaan di Indonesia. Kami menerjemahkan segala jenis dokumen legal, medical, technical, financial dan dokumen-dokumen lainnya seperti Ijazah, Raport, Transkrip Nilai, Akte Kelahiran, Kartu Keluarga, Kartu Tanda Penduduk, Pasport, Surat Keterangan, dll.</p>
        </div>
    </div>

    </section>
    </>

  ); 
  
};

export default About;
