import React from 'react'
import Header from '../../Header'
import "./CourseLessonModul1.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from '../Quiz';
import '../Quiz.css'

const CourseLesson = () => {
    const codeString1 = 'scanf(format_string, variable_address, ...);';
    const codeString2 = 'int age;scanf("%d", &age); // Membaca input bilangan bulat dan menyimpannya dalam variabel \'age\''
    const codeString3 = 'printf(format_string, argument1, argument2, ...);';
    const codeString4 = 'char name[20];\nprintf("Enter your name: ");\nscanf("%s", name);\nprintf("Hello, %s!\\n", name); // Menampilkan pesan "Hello, [nama]"'
    

    const quizQuestion = 'Manakah dari berikut ini yang digunakan untuk menampilkan informasi ke layar?';
    const quizAnswers = ['scanf()', 'printf()', 'getchar()', 'putchar()'];
    const quizCorrectAnswer = 'printf()';

  return (
    <>
    <Header />
    <div className='courselesson'>
        <div className='lesson'>
            <div className='lesson-title'>
                <h1>Input dan Output Data</h1>
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
                Modul ini akan membahas tentang input dan output data dalam bahasa pemrograman C. Input data digunakan untuk mendapatkan informasi dari pengguna atau sumber eksternal, sedangkan output data digunakan untuk menampilkan informasi ke layar, file, atau perangkat lain.
                </p>
                <h3>Fungsi Input scanf()</h3>
                <p>Fungsi scanf() digunakan untuk membaca input dari pengguna dan menyimpannya dalam variabel. Fungsi ini memiliki format berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString1}
                </SyntaxHighlighter>
                <p>
                format_string: Menentukan format data yang akan dibaca. <br />variable_address: Alamat variabel tempat data akan disimpan.
                </p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString2}
                </SyntaxHighlighter>
                <h3>Fungsi Output printf()</h3>
                <p>Fungsi printf() digunakan untuk menampilkan informasi ke layar. Fungsi ini memiliki format berikut:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString3}
                </SyntaxHighlighter>
                <p>format_string: Menentukan format data yang akan ditampilkan. <br /> argument: Nilai yang akan ditampilkan.</p>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>
            <Quiz question={quizQuestion} answers={quizAnswers} correctAnswer={quizCorrectAnswer} />
        </div>
        <footer>
            <div className='footer-title'>
                <h1>Input dan Output Data</h1>
            </div>
            <a href="/CourseLessonModul4">
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