import React from 'react'
import Header from '../../Header'
import "./CourseLessonModul1.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from '../Quiz';
import '../Quiz.css'

const CourseLesson = () => {
    const codeString1 = 'return_type function_name(parameter1, parameter2, ...);';
    const codeString2 = 'int addNumbers(int num1, int num2); // Deklarasi fungsi yang mengembalikan nilai integer dan menerima dua parameter integer'
    const codeString3 = 'return_type function_name(parameter1, parameter2, ...) {statement1;statement2;...return returnValue;}';
    const codeString4 = 'int addNumbers(int num1, int num2) {int sum = num1 + num2;return sum;}'
    const codeString5 = 'returnValue = function_name(argument1, argument2, ...);'
    const codeString6 = 'int result = addNumbers(10, 20); // Memanggil fungsi addNumbers dan menyimpan hasilnya dalam variabel \'result\'printf("The sum is: %d\n", result); // Menampilkan nilai yang dikembalikan oleh fungsi'
    

    const quizQuestion = 'Manakah dari berikut ini yang bukan merupakan bagian dari deklarasi fungsi?';
    const quizAnswers = ['Tipe data yang dikembalikan', 'Nama fungsi', 'Nilai yang dikembalikan', 'Parameter fungsi'];
    const quizCorrectAnswer = 'Nilai yang dikembalikan';

  return (
    <>
    <Header />
    <div className='courselesson'>
        <div className='lesson'>
            <div className='lesson-title'>
                <h1>Fungsi dalam Bahasa Pemrograman C</h1>
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
                Modul ini akan membahas tentang fungsi dalam bahasa pemrograman C. Fungsi adalah blok kode yang dapat digunakan untuk melakukan tugas tertentu dan dapat dipanggil dari berbagai bagian program. Fungsi membantu membuat program yang lebih terstruktur, modular, dan mudah dipelihara.
                </p>
                <h3>Deklarasi Fungsi</h3>
                <p>Deklarasi fungsi digunakan untuk memberitahu compiler tentang nama, tipe return, dan parameter fungsi. Format deklarasi fungsi adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString1}
                </SyntaxHighlighter>
                <p>
                return_type: Tipe data yang dikembalikan oleh fungsi.
                <br />function_name: Nama fungsi.
                <br />parameter: Tipe data dan variabel yang digunakan oleh fungsi.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString2}
                </SyntaxHighlighter>
                <h3>Definisi Fungsi</h3>
                <p>Definisi fungsi berisi implementasi kode dari fungsi yang telah dideklarasikan. Format definisi fungsi adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString3}
                </SyntaxHighlighter>
                <p>return_type: Tipe data yang dikembalikan oleh fungsi.
                    <br />function_name: Nama fungsi.
                    <br />parameter: Tipe data dan variabel yang digunakan oleh fungsi.
                    <br />statement: Pernyataan-pernyataan yang akan dieksekusi ketika fungsi dipanggil.
                    <br />returnValue: Nilai yang dikembalikan oleh fungsi.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString4}
                </SyntaxHighlighter>
                <h3>Memanggil Fungsi</h3>
                <p>Untuk menjalankan fungsi, Anda perlu memanggilnya dengan nama dan argumen yang sesuai. Format pemanggilan fungsi adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString5}
                </SyntaxHighlighter>
                <p>returnValue: Variabel untuk menyimpan nilai yang dikembalikan oleh fungsi.
                    <br />function_name: Nama fungsi yang ingin dipanggil.
                    <br />argument: Nilai yang diteruskan ke parameter fungsi.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString6}
                </SyntaxHighlighter>
            </div>
            <Quiz question={quizQuestion} answers={quizAnswers} correctAnswer={quizCorrectAnswer} />
        </div>
        <footer>
            <div className='footer-title'>
                <h1>Fungsi dalam Bahasa Pemrograman C</h1>
            </div>
            <a href="/CourseLessonModul7">
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