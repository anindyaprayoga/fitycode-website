import React from 'react'
import Header from '../../Header'
import "./CourseLessonModul1.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from '../Quiz';
import '../Quiz.css'

const CourseLesson = () => {
    const codeString1 = 'if (condition) {statement1;statement2;...} else {statement3;statement4;...}';
    const codeString2 = 'int age = 20;if (age >= 18) {printf("You are an adult.\n");} else {printf("You are a minor.\n");}'
    const codeString3 = 'switch (expression) {case value1:statement1;statement2;...break;case value2:statement3;statement4;...break;default:statement5;statement6;...}';
    const codeString4 = 'char grade = \'B\';switch (grade) {case \'A\':printf("Excellent!\n");break;case \'B\':printf("Good!\n");break;case \'C\':printf("Average.\n");break;default:printf("Invalid grade.\n");}'
    

    const quizQuestion = 'Pernyataan switch-case digunakan untuk mengeksekusi blok kode tertentu berdasarkan nilai variabel yang dibandingkan dengan beberapa nilai yang mungkin. Manakah dari pernyataan berikut yang tidak benar mengenai pernyataan switch-case?';
    const quizAnswers = ['Pernyataan switch-case hanya dapat digunakan untuk membandingkan nilai numerik.', 
        'Pernyataan switch-case dapat digunakan untuk membandingkan nilai string.', 'Pernyataan switch-case dapat digunakan untuk membandingkan nilai boolean.',
        'Pernyataan switch-case selalu memiliki blok kode default.', 'Pernyataan switch-case dapat digunakan untuk membandingkan nilai array.'
    ];
    const quizCorrectAnswer = 'Pernyataan switch-case selalu memiliki blok kode default.';

  return (
    <>
    <Header />
    <div className='courselesson'>
        <div className='lesson'>
            <div className='lesson-title'>
                <h1>Struktur Kontrol - Percabangan</h1>
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
                Modul ini akan membahas tentang struktur kontrol percabangan dalam bahasa pemrograman C. Struktur kontrol percabangan digunakan untuk mengeksekusi blok kode tertentu berdasarkan kondisi yang diberikan.
                </p>
                <h3>Pernyataan if-else()</h3>
                <p>Pernyataan if-else digunakan untuk mengeksekusi blok kode tertentu berdasarkan kondisi yang benar atau salah. Formatnya adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString1}
                </SyntaxHighlighter>
                <p>
                condition: Ekspresi yang menentukan apakah blok kode if akan dieksekusi.
                <br /> statement1: Blok kode yang akan dieksekusi jika condition benar.
                <br /> statement3: Blok kode yang akan dieksekusi jika condition salah.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString2}
                </SyntaxHighlighter>
                <h3>Pernyataan switch-case</h3>
                <p>Pernyataan switch-case digunakan untuk mengeksekusi blok kode tertentu berdasarkan nilai variabel yang dibandingkan dengan beberapa nilai yang mungkin. Formatnya adalah sebagai berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString3}
                </SyntaxHighlighter>
                <p>expression: Nilai variabel yang akan dibandingkan.
                <br /> value1: Nilai yang dibandingkan dengan expression.
                <br /> statement1: Blok kode yang akan dieksekusi jika expression sama dengan value1.
                <br />value2: Nilai yang dibandingkan dengan expression.
                <br /> statement3: Blok kode yang akan dieksekusi jika expression sama dengan value2.
                <br /> default: Blok kode yang akan dieksekusi jika tidak ada nilai yang cocok dengan expression.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>
            <Quiz question={quizQuestion} answers={quizAnswers} correctAnswer={quizCorrectAnswer} />
        </div>
        <footer>
            <div className='footer-title'>
                <h1>Struktur Kontrol - Percabangan</h1>
            </div>
            <a href="/CourseLessonModul5">
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