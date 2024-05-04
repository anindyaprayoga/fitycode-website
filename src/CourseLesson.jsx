import React from 'react'
import Header from './Header'
import "./CourseLesson.css"
import helloworldsnippet from "./assets/helloworldsnippet.jpg"
import gccsnippet from "./assets/gccsnippet.jpg"
import hellosnippet from "./assets/hellosnippet.jpg"
import helloworldoutputsnippet from "./assets/helloworldoutputsnippet.jpg"

const CourseLesson = () => {
  return (
    <>
    <Header />
    <div className='courselesson'>
        <div className='lesson'>
            <div className='lesson-title'>
                <h1>starting the journey with "Hello World"</h1>
            </div>
            <div className='lesson-video'>
            <iframe 
                width="870" 
                height="525" 
                src="https://www.youtube.com/embed/DmUBaa7UKaA?si=Oc5-vyHfh4SqQnK7&amp;controls=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            </div>
            <div className='lesson-text'>
                <h3>Selamat datang di dunia pemrograman C!</h3>
                <p>
                    Dalam sesi ini, kita akan memulai perjalanan 
                    belajar bahasa pemrograman C dengan program klasik "Hello, World!". 
                    Program ini mungkin terlihat sederhana, tetapi merupakan langkah 
                    penting untuk memahami dasar-dasar pemrograman C.
                </p>
                <h3>Apa yang akan kita pelajari?</h3>
                <ul>
                    <li>Struktur dasar program C</li>
                    <li>Cara mendeklarasikan variabel</li>
                    <li>Menulis dan menjalankan kode C</li>
                    <li>Mencetak teks ke konsol</li>
                </ul>
                <h3>Persiapan</h3>
                <p>Sebelum memulai, pastikan Anda memiliki:</p>
                <ul>
                    <li>
                        Editor teks: Anda dapat menggunakan editor teks apa pun, seperti Notepad++ atau Sublime Text.
                    </li>
                    <li>
                        Kompilator C: Anda dapat mengunduh kompilator C gratis seperti MinGW atau GCC.
                    </li>
                </ul>
                <h3>Langkah-langkah</h3>
                <ol>
                    <li>Buka editor teks Anda dan buat file baru.</li>
                    <li>Ketik kode berikut ke dalam file:</li>
                    <img src={helloworldsnippet} alt="" width={264}/>
                    <li>Simpan file dengan ekstensi .c, misalnya hello.c.</li>
                    <li>Buka jendela command prompt atau terminal.</li>
                    <li>Arahkan ke direktori tempat Anda menyimpan file hello.c.</li>
                    <li>Jalankan kompilator C dengan perintah berikut:</li>
                    <img src={hellosnippet} alt="" width={164} />
                    <li>Anda akan melihat output berikut di konsol:</li>
                    <img src={helloworldoutputsnippet} alt="" width={186}/>
                </ol>
                <h3>Penjelasan kode:</h3>
                <ul>
                    <li>#include &lt;stdio.h&gt;: Baris ini menyertakan file header stdio.h, yang berisi fungsi-fungsi untuk input dan output.</li>
                    <li>int main(): Ini adalah fungsi utama program. Di sinilah kode program Anda akan dieksekusi.</li>
                    <li>printf("Hello, World!\n");: Baris ini menggunakan fungsi printf untuk mencetak teks "Hello, World!" ke konsol.</li>
                    <li>\n: Karakter newline (\n) digunakan untuk memulai baris baru.</li>
                    <li>return 0;: Baris ini memberitahu sistem operasi bahwa program telah selesai dengan sukses.</li>
                </ul>
                <h3>Selamat!</h3>
                <p>Anda telah berhasil menyelesaikan program C pertama Anda!</p>
                <h3>Tips</h3>
                <ul>
                    <li>Cobalah bereksperimen dengan program "Hello, World!" Anda. Ubah teks yang dicetak, coba format teks yang berbeda, atau tambahkan variabel untuk menyimpan pesan yang berbeda.</li>
                    <li>Pastikan untuk memahami setiap baris kode sebelum melanjutkan ke langkah berikutnya.</li>
                    <li>Gunakan debugger untuk membantu Anda menemukan dan memperbaiki kesalahan dalam kode Anda.</li>
                    <li>Ada banyak sumber daya online yang tersedia untuk membantu Anda belajar pemrograman C. Jangan ragu untuk mencari bantuan jika Anda membutuhkannya.</li>
                </ul>
                <p>Setelah Anda menguasai dasar-dasar "Hello, World!", Anda dapat melanjutkan untuk mempelajari topik yang lebih kompleks dalam pemrograman C, seperti variabel, tipe data, operator, kontrol aliran, fungsi, dan struktur data.</p>
            </div>
        </div>
        <footer>
            <div className='footer-title'>
                <h1>starting the journey with "Hello World"</h1>
            </div>
            <div className='next'>
                <h1>next</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="white" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"></path><path fill="white" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></path></svg>
            </div>
        </footer>
    </div>
    </>
  )
}

export default CourseLesson