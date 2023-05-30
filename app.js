const quizData = [
  {
    question: "Who is the current VC of Uniben?",
    a: "Prof Oshodin Bola",
    b: "Prof Orumwense Faraday",
    c: "Prof Lilian Salami",
    d: "Bar Nurudeen Asunogie",
    correct: "c",
  },
  {
    question: "Who is the current HOD of Computer Engineering in Uniben?",
    a: "Dr. Bameyi Isco",
    b: "Dr. Iruansi",
    c: "Dr. Ogboide",
    d: "Dr. Ogbebo",
    correct: "b",
  },
  {
    question: "Who is the current HOD of Production Engineering in Uniben?",
    a: "Dr Iredia",
    b: "Dr Francis",
    c: "Dr Francis-Akilaki",
    d: "Dr Eboigbe",
    correct: "a"
  },
  {
    question: "What is the name of Uniben library?",
    a: "John Haris Library",
    b: "John bosco's Library",
    c: "Main Bowl Library",
    d: "Main Gate Library",
    correct: "a",
  },
  {
    question: "Who among the following is the CEO of UBA?",
    a: "Dr Jim Ovia",
    b: "Dr Tony Elumelu",
    c: "Dr Aigboje Imokhuede",
    d: "Dr John Momoh",
    correct: "b",
  },
  {
    question: "Who among the following is the CEO of DAAR Communications?",
    a: "Dr John Momoh",
    b: "Dr Mehdi Hassan",
    c: "Dr Partrick Iriase",
    d: "Dr Raymond Dokpesi",
    correct: "d",
  },
  {
    question: "What is the most used programming language in 2019",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Joe Biden",
    c: "Ivan Saldano",
    d: "Mihal Andrel",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamgorginis",
    correct: "a",
  },
  {
    question: "What year was Javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Who won the Uniben Marathon 2023",
    a: "Uduanokhai",
    b: "Adamu",
    c: "Honour",
    d: "Alaran",
    correct: "b",
  },
  {
    question: "What is the title of the king of Auchi?",
    a: "Aidonogie of Auchi",
    b: "Edaiken of Auchi",
    c: "Otaru of Auchi",
    d: "Ogieneni of Auchi",
    correct: "c",
  },
  {
    question: "How many chapters are in the Noble Qur'an?",
    a: "111",
    b: "112",
    c: "113",
    d: "114",
    correct: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score} out of ${quizData.length} 
      questions.</h2> 
      <button onClick="location.reload()">Reload</button>`;
    }
  }
});
