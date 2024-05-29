import React from 'react'
import Header from '../../Header'
import "./CourseLessonModul1.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from '../Quiz';
import '../Quiz.css'

const CourseLesson = () => {
    const codeString1 = 'char str1[] = "Hello, World!";';
    const codeString2 = 'char *str2 = (char *) malloc(100);strcpy(str2, "This is a dynamic string.");'
    const codeString3 = 'strlen(): Menghitung panjang string.strcpy(): Menyalin string ke string lain.strcat(): Menggabungkan dua string.strcmp(): Membandingkan dua string.strtok(): Memisahkan string berdasarkan token.';
    const codeString4 = 'char str1[] = "Programming in C";char str2[20];int len = strlen(str1);printf("Length of str1: %d\n", len);strcpy(str2, str1);printf("str2 after copying: %s\n", str2);strcat(str2, " is fun!");printf("str2 after concatenation: %s\n", str2);int result = strcmp(str1, str2);if (result == 0) {printf("str1 and str2 are equal.\n");} else if (result < 0) {printf("str1 is less than str2.\n");} else {printf("str1 is greater than str2.\n");}char *token = strtok(str1, " ");while (token != NULL) {printf("%s\n", token);token = strtok(NULL, " ");}'
    const codeString5 = 'char name[50];printf("Enter your name: ");scanf("%s", name);printf("Hello, %s!\n", name);'
    const codeString6 = 'char message[] = "This is a message.";printf("%s\n", message);'
    

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
                <h1>String dalam Bahasa Pemrograman C</h1>
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
                Modul ini akan membahas tentang string dalam bahasa pemrograman C. String adalah urutan karakter yang direpresentasikan sebagai array char dalam bahasa C. String memungkinkan Anda untuk menyimpan, memanipulasi, dan menampilkan teks dalam program Anda.
                </p>
                <h3>Deklarasi dan Inisialisasi String</h3>
                <p>String dapat dideklarasikan dan diinisialisasi dengan berbagai cara. Berikut adalah beberapa contoh:
                Deklarasi dan inisialisasi dengan literal string:
                </p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString1}
                </SyntaxHighlighter>
                <p>
                Deklarasi dengan alokasi memori dinamis:
                </p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString2}
                </SyntaxHighlighter>
                <h3>Fungsi String Standar</h3>
                <p>Bahasa C menyediakan berbagai fungsi standar untuk memanipulasi string. Berikut adalah beberapa contoh:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString3}
                </SyntaxHighlighter>
                <h4>Contoh:</h4>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString4}
                </SyntaxHighlighter>
                <h3>Input dan Output String</h3>
                <p>Anda dapat menggunakan fungsi scanf() dan printf() untuk membaca dan menulis string dari dan ke konsol. Berikut adalah beberapa contoh:Membaca string dari konsol:</p>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString5}
                </SyntaxHighlighter>
                <h3>Menulis string ke konsol:</h3>
                <SyntaxHighlighter language="c" style={atomOneDark}>
                    {codeString6}
                </SyntaxHighlighter>
            </div>
            <Quiz question={quizQuestion} answers={quizAnswers} correctAnswer={quizCorrectAnswer} />
        </div>
        <footer>
            <div className='footer-title'>
                <h1>String dalam Bahasa Pemrograman C</h1>
            </div>
            <a href="#">
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