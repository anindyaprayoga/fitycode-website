import React from 'react'
import Header from '../../Header'
import "./CourseLessonModul1.css"
import helloworldsnippet from "./Courses Assets/helloworldsnippet.jpg"
import gccsnippet from "./Courses Assets/gccsnippet.jpg"
import hellosnippet from "./Courses Assets/hellosnippet.jpg"
import helloworldoutputsnippet from "./Courses Assets/helloworldoutputsnippet.jpg"
import variablesnippet from "./Courses Assets/variablesnippet.jpg"
import deklarasivariabel from "./Courses Assets/deklarasivariabel.jpg"
import operator from "./Courses Assets/operator.jpg"

const CourseLesson = () => {
  return (
    <>
    <Header />
    <div className='courselesson'>
        <div className='lesson'>
            <div className='lesson-title'>
                <h1>Tipe Data dan Variabel</h1>
            </div>
            <div className='lesson-video'>
            {/* <iframe 
                width="870" 
                height="525" 
                src="#" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe> */}
            </div>
            <div className='lesson-text'>
                <p>
                Modul ini akan membahas tentang tipe data dan variabel dalam bahasa pemrograman C. Tipe data digunakan untuk menentukan jenis data yang dapat disimpan dalam variabel, sedangkan variabel digunakan untuk menyimpan nilai data.
                </p>
                <h3>Tipe Data Dasar</h3>
                <p>Bahasa pemrograman C menyediakan beberapa tipe data dasar untuk menyimpan berbagai jenis data:</p>
                <ul>
                    <li>int: Untuk menyimpan bilangan bulat (misalnya, 10, -200, 314)</li>
                    <li>float: Untuk menyimpan bilangan desimal (misalnya, 3.14, -15.2, 0.001)</li>
                    <li>char: Untuk menyimpan karakter tunggal (misalnya, 'a', 'Z', '$')C</li>
                    <li>double: Untuk menyimpan bilangan desimal presisi tinggi (mirip dengan float, tetapi dengan presisi lebih tinggi)</li>
                </ul>
                <h4>Contoh:</h4>
                <img src={variablesnippet} width={800}/>
                <h3>Deklarasi dan Inisialisasi Variabel</h3>
                <p>Sebelum menggunakan variabel, Anda harus mendeklarasikannya untuk memberitahu compiler tentang tipe datanya. Deklarasi variabel dapat dilakukan dengan menggunakan pernyataan var_type variable_name;.</p>
                <p>Inisialisasi variabel digunakan untuk memberikan nilai awal kepada variabel saat dideklarasikan. Inisialisasi variabel dapat dilakukan dengan menggunakan pernyataan var_type variable_name = value;.</p>
                <h4>Contoh:</h4>
                <img src={deklarasivariabel} width={600}/>
                <h3>Operasi Aritmatika dan Relasional</h3>
                <p>Bahasa pemrograman C menyediakan berbagai operator aritmatika dan relasional untuk melakukan operasi pada variabel:</p>
                <h4>Operator Aritmatika:</h4>
                <ul>
                    <li>+: Penjumlahan</li>
                    <li>-: Pengurangan</li>
                    <li>*: Perkalian</li>
                    <li>/: Pembagian</li>
                    <li>%: Sisa pembagian</li>
                </ul>
                <h4>Operator Relasional:</h4>
                <ol>
                    <li>==: Sama dengan</li>
                    <li>!=: Tidak sama dengan</li>
                    <li>&lt;: Kurang dari</li>
                    <li>&gt;: Lebih besar dari</li>
                    <li>&le;: Kurang dari atau sama dengan</li>
                    <li>&ge;: Lebih besar dari atau sama dengan</li>
                </ol>
                <h4>Contoh:</h4>
                <img src={operator} width={800}/>
                <h3>Latihan:</h3>
            </div>
        </div>
        <footer>
            <div className='footer-title'>
                <h1>Tipe Data dan Variabel</h1>
            </div>
            <a href="/CourseLessonModul3">
            <div className='next'>
                <h1>next</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="white" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"></path><path fill="white" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></path></svg>
            </div>
            </a>
        </footer>
    </div>
    </>
  )
}

export default CourseLesson