import React from 'react'
import Header from '../../Header'
import "./CourseLessonModul1.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from '../Quiz';
import '../Quiz.css'

const CourseLesson = () => {
    const codeString1 = 'while (condition) {statement1;statement2;...}';
    const codeString2 = 'int count = 1;while (count <= 10) {printf("%d ", count);count++;}'
    const codeString3 = 'for (initialization; condition; increment) {statement1;statement2;...}';
    const codeString4 = 'for (int i = 0; i < 5; i++) {printf("Hello!\n");}'
    const codeString5 = 'do {statement1;statement2;...} while (condition);'
    const codeString6 = 'int count = 1;do {printf("%d ", count);count++;} while (count <= 10);'
    

    const quizQuestion = 'Manakah dari pernyataan berikut yang tidak benar mengenai struktur kontrol perulangan dalam bahasa pemrograman C?';
    const quizAnswers = ['Struktur kontrol perulangan digunakan untuk mengulang blok kode beberapa kali.',
     'Struktur kontrol perulangan dapat digunakan untuk mengeksekusi blok kode secara bersyarat.',
      'Struktur kontrol perulangan dapat membantu menghemat kode dan membuat program lebih efisien.',
       'Struktur kontrol perulangan hanya dapat digunakan untuk mengulang blok kode yang sama persis.',
        'Struktur kontrol perulangan dapat digunakan untuk mengulang blok kode dengan jumlah iterasi yang ditentukan.'];
    const quizCorrectAnswer = 'Struktur kontrol perulangan hanya dapat digunakan untuk mengulang blok kode yang sama persis.';

  return (
    <>
    <Header />
    <div className='courselesson'>
        <div className='lesson'>
            <div className='lesson-title'>
                <h1>Struktur Kontrol - Perulangan</h1>
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
                Modul ini akan membahas tentang struktur kontrol perulangan dalam bahasa pemrograman C. Struktur kontrol perulangan digunakan untuk mengulang blok kode beberapa kali.
                </p>
                <h3>Perulangan while</h3>
                <p>Perulangan while digunakan untuk mengulangi blok kode selama kondisi yang diberikan benar. Formatnya adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString1}
                </SyntaxHighlighter>
                <p>
                condition: Ekspresi yang menentukan apakah blok kode akan diulang.
                <br /> statement: Blok kode yang akan dieksekusi selama kondisi terpenuhi.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString2}
                </SyntaxHighlighter>
                <h3>Perulangan for</h3>
                <p>Perulangan for digunakan untuk mengulangi blok kode dengan jumlah iterasi yang ditentukan. Formatnya adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString3}
                </SyntaxHighlighter>
                <p>initialization: Menginisialisasi variabel kontrol sebelum perulangan dimulai.
                    <br />condition: Menentukan apakah blok kode akan diulang.
                    <br />increment: Memperbarui variabel kontrol setelah setiap iterasi.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString4}
                </SyntaxHighlighter>
                <h3>Perulangan do-while</h3>
                <p>Perulangan do-while mirip dengan perulangan while, tetapi blok kode dieksekusi minimal satu kali sebelum kondisi diperiksa. Formatnya adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString5}
                </SyntaxHighlighter>
                <p>condition: Ekspresi yang menentukan apakah blok kode akan diulang.</p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString6}
                </SyntaxHighlighter>
            </div>
            <Quiz question={quizQuestion} answers={quizAnswers} correctAnswer={quizCorrectAnswer} />
        </div>
        <footer>
            <div className='footer-title'>
                <h1>Struktur Kontrol - Perulangan</h1>
            </div>
            <a href="/CourseLessonModul6">
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