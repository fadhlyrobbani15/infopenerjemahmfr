import React from 'react';
import './Document.css';

const Document = () => {
  return (
      <>
      <div id='dokumen'>
          <div className='container-dokumen'>
              <div className='main-col'>
                  <ul id='dokumens'>
                      <h1>Penerjemahan Dokumen</h1>
                      <p>Kami menerjemahkan dokumen dari berbagai bahasa untuk keperluan anda.</p>
                      <p className='p-dokumen' style={{ alignItems: 'center'}}>
                          Berikut adalah daftar harga yang kami tawarkan
                      </p>
                      <br></br>
                      <table>
                          <tr>
                              <th>No</th>
                              <th>Bahasa</th>
                              <th>Tersumpah</th>
                              <th>Non-Tersumpah</th>
                          </tr>
                          <tr>
                              <td>1</td>
                              <td>Arab</td>
                              <td>200.000/Halaman</td>
                              <td>150.000/Halaman</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Belanda</td>
                              <td>500.000/Halaman</td>
                              <td>250.000/Halaman</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>Inggris</td>
                              <td>75.000/Halaman</td>
                              <td>50.000/Halaman</td>
                          </tr>
                          <tr>
                              <td>4</td>
                              <td>Jepang</td>
                              <td>400.000/Halaman</td>
                              <td>250.000/Halaman</td>
                          </tr>
                          <tr>
                              <td>5</td>
                              <td>Jerman</td>
                              <td>350.000/Halaman</td>
                              <td>250.000/Halaman</td>
                          </tr>
                          <tr>
                              <td>6</td>
                              <td>Mandarin</td>
                              <td>400.000/Halaman</td>
                              <td>250.000/Halaman</td>
                          </tr>
                          <tr>
                              <td>7</td>
                              <td>Korea</td>
                              <td>500.000/Halaman</td>
                              <td>250.000/Halaman</td>
                          </tr>
                      </table>
                  </ul>
              </div>
          </div>
      </div>

      
      
      </>   
  );
}

export default Document