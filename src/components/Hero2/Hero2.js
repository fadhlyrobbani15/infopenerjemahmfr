import React from 'react';
import './Hero2.css'
import  gambar1 from '../../components/images/1pic.jpeg';

const Hero2 = () => {
  return (
      <>
      <section>
      <div className='col-md-5 col-lg-6 order-1 order-md-2 text-center'>
          <img src={gambar1} className='img-thumbnail' alt=''/>
          <h1 className='aboutus'>Tentang Kami</h1>
          <p>Terimakasih telah mengunjungi kami di Information Translation Center. Kami merupakan Biro jasa penyediaan jasa info penerjemah tersumpah resmi dan jasa legalisasi dokumen. Layanan jasa kami sebagai berikut: Penerjemah Bahasa inggris, Jerman, Arab Saudi, Belanda, Prancis, Korea, Rusia, Portugis, Mandarin, Spanyol, Italia, Indonesia. Jasa penerjemah kami tersumpah resmi, menjamin hasil terjemahan kami dapat dilegalisasi di Departemen Hukum dan HAM, Departemen Luar Negeri, dan Kedutaan di Indonesia. Kami menerjemahkan segala jenis dokumen legal, medical, technical, financial dan dokumen-dokumen lainnya seperti Ijazah, Raport, Transkrip Nilai, Akte Kelahiran, Kartu Keluarga, Kartu Tanda Penduduk, Pasport, Surat Keterangan, dll.</p>
      </div>

      </section>
      </>

  );
};

export default Hero2;
