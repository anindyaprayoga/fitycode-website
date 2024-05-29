import React from 'react'
import Header from '../../Header'
import "./CourseLessonModul1.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from '../Quiz';
import '../Quiz.css'

const CourseLesson = () => {
    const codeString1 = 'type_name array_name[size];';
    const codeString2 = 'int numbers[5]; // Deklarasi array \'numbers\' dengan tipe data integer dan 5 elemen'
    const codeString3 = 'type_name array_name[size] = {value1, value2, ..., valueN};';
    const codeString4 = 'int numbers[5] = {10, 20, 30, 40, 50}; // Inisialisasi array \'numbers\' dengan nilai awal 10, 20, 30, 40, dan 50'
    const codeString5 = 'array_name[index]'
    const codeString6 = 'int numbers[5] = {10, 20, 30, 40, 50};printf("First element: %d\n", numbers[0]); // Mengakses dan menampilkan elemen pertama (index 0)printf("Third element: %d\n", numbers[2]); // Mengakses dan menampilkan elemen ketiga (index 2)'
    const codeString7 = 'int numbers[5] = {10, 20, 30, 40, 50};int sum = 0;for (int i = 0; i < 5; i++) {sum += numbers[i];}printf("Total sum: %d\n", sum); // Menghitung dan menampilkan jumlah elemen array'
    

    const quizQuestion = 'Manakah dari berikut ini yang bukan merupakan ciri-ciri array dalam bahasa pemrograman C?';
    const quizAnswers = ['Digunakan untuk menyimpan kumpulan data dengan tipe data yang sama.',
     'Elemen-elemennya diakses menggunakan indeks.',
      'Dapat diubah ukurannya setelah dideklarasikan.',
       'Memori yang dialokasikan untuk array bersifat statis.'];
    const quizCorrectAnswer = 'Dapat diubah ukurannya setelah dideklarasikan.';

  return (
    <>
    <Header />
    <div className='courselesson'>
        <div className='lesson'>
            <div className='lesson-title'>
                <h1>Array dalam Bahasa Pemrograman C</h1>
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
                Modul ini akan membahas tentang array dalam bahasa pemrograman C. Array adalah kumpulan elemen data dengan tipe data yang sama yang disimpan dalam memori secara berurutan. Array memungkinkan Anda untuk menyimpan dan mengakses data secara efisien.
                </p>
                <h3>Deklarasi Array</h3>
                <p>Deklarasi array digunakan untuk memberitahu compiler tentang tipe data, nama, dan jumlah elemen array. Format deklarasi array adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString1}
                </SyntaxHighlighter>
                <p>
                type_name: Tipe data elemen array.
                <br />array_name: Nama array.
                <br />size: Jumlah elemen array.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString2}
                </SyntaxHighlighter>
                <h3>Inisialisasi Array</h3>
                <p>Inisialisasi array digunakan untuk memberikan nilai awal kepada elemen array saat dideklarasikan. Format inisialisasi array adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString3}
                </SyntaxHighlighter>
                <p>type_name: Tipe data elemen array.
                    <br />array_name: Nama array.
                    <br />size: Jumlah elemen array.
                    <br />value: Nilai awal untuk elemen array.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString4}
                </SyntaxHighlighter>
                <h3>Mengakses Elemen Array</h3>
                <p>Untuk mengakses elemen array, Anda dapat menggunakan operator indeks. Formatnya adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString5}
                </SyntaxHighlighter>
                <p>array_name: Nama array.
                    <br />index: Indeks elemen array (dimulai dari 0).
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString6}
                </SyntaxHighlighter>
                <h3>Penggunaan Array</h3>
                <p>Array dapat digunakan untuk berbagai keperluan, seperti menyimpan data, menghitung nilai, dan mengolah data. Anda dapat menggunakan loop untuk mengakses dan memanipulasi elemen array secara efisien.</p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString7}
                </SyntaxHighlighter>
            </div>
            <Quiz question={quizQuestion} answers={quizAnswers} correctAnswer={quizCorrectAnswer} />
        </div>
        <footer>
            <div className='footer-title'>
                <h1>Array dalam Bahasa Pemrograman C</h1>
            </div>
            <a href="/CourseLessonModul8">
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