const questions = [
    {
        question: "Manakah dari angka-angka berikut yang merupakan kelanjutan yang tepat dari deret 1, 4, 9, 16, 25, ...?",
        options: ["30", "32", "36", "40"],
        answer: "36"
    },
    {
        question: "Jika semua 'blop' adalah 'glorp', dan semua 'glorp' adalah 'klorp', maka mana pernyataan berikut yang benar?",
        options: ["Semua 'klorp' adalah 'blop'", "Sebagian 'blop' bukan 'klorp'", "Semua 'blop' adalah 'klorp'", "Semua 'glorp' adalah 'blop'"],
        answer: "Semua 'blop' adalah 'klorp'"
    },
    {
        question: "Manakah gambar yang tidak sesuai dengan yang lainnya? (Bayangkan ada 4 gambar bangun datar: segitiga, lingkaran, persegi, dan trapesium.)",
        options: ["Segitiga", "Lingkaran", "Persegi", "Trapesium"],
        answer: "Lingkaran"
    },
    {
        question: "Jika 5 + 3 = 28, 9 + 1 = 810, dan 8 + 6 = 214, maka 7 + 5 = ?",
        options: ["212", "12", "2012", "122"],
        answer: "212"
    },
    {
        question: "Manakah dari kata-kata berikut yang tidak memiliki kesamaan dengan yang lain?",
        options: ["Kucing", "Anjing", "Singa", "Gajah"],
        answer: "Gajah"
    },
    {
        question: "Sebuah kereta berangkat dari kota A pada pukul 08.00 pagi dan tiba di kota B pada pukul 12.00 siang. Jarak antara kota A dan B adalah 200 km. Berapa kecepatan rata-rata kereta tersebut?",
        options: ["40 km/jam", "50 km/jam", "60 km/jam", "80 km/jam"],
        answer: "50 km/jam"
    },
    {
        question: "Jika 'Pohon' adalah 'Hutan', maka 'Ikan' adalah ...",
        options: ["Air", "Sungai", "Lautan", "Perairan"],
        answer: "Lautan"
    },
    {
        question: "Manakah dari pecahan berikut yang terkecil?",
        options: ["1/2", "2/3", "3/4", "1/4"],
        answer: "1/4"
    },
    {
        question: "Jika 'MAKAN' menjadi 'AKANM', maka 'MINUM' akan menjadi ...",
        options: ["MINMU", "INUMM", "NUIMM", "INMUM"],
        answer: "INUMM"
    },
    {
        question: "Berapa sudut yang dibentuk oleh jarum jam dan jarum menit pada pukul 03.00?",
        options: ["0°", "30°", "60°", "90°"],
        answer: "90°"
    },
    {
        question: "Manakah angka yang tidak sesuai dengan yang lainnya?",
        options: ["3", "5", "7", "9"],
        answer: "9"
    },
    {
        question: "Jika 'A:B' adalah 'C:D', maka 'E:F' adalah ...",
        options: ["G:H", "F:E", "G:I", "D:C"],
        answer: "G:H"
    },
    {
        question: "Manakah dari pilihan berikut yang memiliki hubungan yang sama dengan 'Sepatu:Kaki'?",
        options: ["Sarung tangan:Tangan", "Topi:Kepala", "Kaos kaki:Kaki", "Gelang:Tangan"],
        answer: "Sarung tangan:Tangan"
    },
    {
        question: "Berapa jumlah hari dalam 3 tahun? (Abaikan tahun kabisat.)",
        options: ["1095", "1096", "1097", "1098"],
        answer: "1095"
    },
    {
        question: "Jika 6, 12, 18, 24, ..., manakah angka yang merupakan kelanjutan dari deret tersebut?",
        options: ["28", "30", "32", "36"],
        answer: "30"
    },
    {
        question: "Jika 'Merah' adalah 'Berhenti', maka 'Hijau' adalah ...",
        options: ["Lambat", "Jalan", "Siap", "Laju"],
        answer: "Jalan"
    },
    {
        question: "Jika 10% dari sebuah angka adalah 20, berapakah angka tersebut?",
        options: ["200", "100", "20", "10"],
        answer: "200"
    },
    {
        question: "Manakah dari angka berikut yang merupakan kelanjutan yang tepat dari deret 2, 3, 5, 7, 11, ...?",
        options: ["12", "13", "14", "15"],
        answer: "13"
    },
    {
        question: "Jika 'Bunga' adalah 'Taman', maka 'Buku' adalah ...",
        options: ["Perpustakaan", "Rak", "Halaman", "Sekolah"],
        answer: "Perpustakaan"
    },
    {
        question: "Sebuah kotak berisi 10 bola merah, 5 bola biru, dan 5 bola hijau. Berapa peluang untuk mengambil bola merah?",
        options: ["1/2", "1/4", "1/3", "1/5"],
        answer: "1/2"
    }
];

const essayQuestions = [
    {
        question: "Jelaskan mengapa angka 1, 4, 9, 16, dan 25 disebut sebagai deret kuadrat."
    },
    {
        question: "Jika sebuah koin dilempar 10 kali dan hasilnya selalu kepala, menurut Anda berapa peluang hasilnya akan kepala pada lemparan ke-11? Jelaskan alasannya."
    },
    {
        question: "Jelaskan pola dari deret huruf berikut dan tentukan huruf selanjutnya: A, D, G, J, ..."
    },
    {
        question: "Sebuah kolam renang memiliki dimensi panjang 10 meter, lebar 5 meter, dan kedalaman 2 meter. Berapa volume air yang dibutuhkan untuk mengisi kolam tersebut hingga penuh?"
    },
    {
        question: "Jika Anda memiliki 3 apel, dan Anda mengambil 2, berapa apel yang Anda miliki sekarang?"
    },
    {
        question: "Apa perbedaan antara penalaran deduktif dan induktif? Berikan contoh singkat untuk masing-masing."
    },
    {
        question: "Sebutkan tiga kata yang memiliki arti berlawanan dengan kata 'dingin' dan jelaskan mengapa."
    },
    {
        question: "Jika 'Ayah' adalah 'Laki-laki' dan 'Ibu' adalah 'Perempuan', maka 'Kakek' adalah ...? Jelaskan alasannya."
    },
    {
        question: "Jelaskan bagaimana jam pasir bekerja sebagai alat pengukur waktu."
    },
    {
        question: "Bayangkan Anda berada di sebuah ruangan gelap gulita dengan sebuah lilin dan korek api. Apa yang akan Anda nyalakan terlebih dahulu? Jelaskan."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let essayAnswers = {};

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results-container');
const scoreSpan = document.getElementById('score');
const percentageSpan = document.getElementById('percentage');
const essayContainer = document.getElementById('essay-container');
const essayQuestionsContainer = document.getElementById('essay-questions');
const submitEssayButton = document.getElementById('submit-essay-button');
const finalResultsContainer = document.getElementById('final-results-container');
const restartFinalButton = document.getElementById('restart-final-button');

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        optionsContainer.appendChild(button);
        
        button.addEventListener('click', () => selectOption(button, option));
    });
}

function resetState() {
    while(optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    nextButton.style.display = 'none';
    selectedOption = null;
}

function selectOption(button, option) {
    if (selectedOption) {
        return;
    }
    
    selectedOption = option;
    const options = document.querySelectorAll('.option-button');
    options.forEach(opt => {
        if (opt === button) {
            opt.classList.add('selected');
        }
    });

    checkAnswer();
}

function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-button');

    options.forEach(opt => {
        if (opt.textContent === currentQuestion.answer) {
            opt.classList.add('correct');
        }
        if (opt.textContent === selectedOption && opt.textContent !== currentQuestion.answer) {
            opt.classList.add('incorrect');
        }
    });
    
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    
    nextButton.style.display = 'block';
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    scoreSpan.textContent = score;

    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    percentageSpan.textContent = `${percentage}%`;

    const continueButton = document.createElement('button');
    continueButton.textContent = 'Lanjut ke Soal Esai';
    continueButton.classList.add('button');
    resultsContainer.appendChild(continueButton);

    continueButton.addEventListener('click', () => {
        resultsContainer.style.display = 'none';
        showEssayQuestions();
    });
}

function showEssayQuestions() {
    essayContainer.style.display = 'block';
    essayQuestionsContainer.innerHTML = '';
    essayQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('essay-item');
        questionDiv.innerHTML = `
            <p><strong>${index + 1}. ${q.question}</strong></p>
            <textarea id="essay-${index}" rows="4" placeholder="Tulis jawaban Anda di sini..."></textarea>
        `;
        essayQuestionsContainer.appendChild(questionDiv);
    });
}

function downloadEssayAnswers() {
    let textContent = "Jawaban Tes IQ Esai:\n\n";

    for (const question in essayAnswers) {
        textContent += `Pertanyaan: ${question}\n`;
        textContent += `Jawaban: ${essayAnswers[question]}\n\n`;
    }

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jawaban_esai_tes_iq.txt';
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

submitEssayButton.addEventListener('click', () => {
    essayQuestions.forEach((q, index) => {
        const textarea = document.getElementById(`essay-${index}`);
        essayAnswers[q.question] = textarea.value;
    });
    
    downloadEssayAnswers();
    
    essayContainer.style.display = 'none';
    finalResultsContainer.style.display = 'block';
});

restartFinalButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    essayAnswers = {};
    finalResultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
});

showQuestion();