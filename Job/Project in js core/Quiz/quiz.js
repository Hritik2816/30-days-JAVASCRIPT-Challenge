
let score = 0;
let questionNumber = 0;
let started = false;

const h2 = document.querySelector("h2");
const startQuizButton = document.querySelector(".startQuiz");
const h3 = document.querySelector("h3");
const optionsContainer = document.querySelector(".options");

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Madrid", "Berlin", "Rome"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Spain?",
    answers: ["Madrid", "Paris", "Berlin", "Rome"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Italy?",
    answers: ["Rome", "Paris", "Madrid", "Berlin"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Portugal?",
    answers: ["Lisbon", "Paris", "Madrid", "Berlin"],
    correctAnswer: 0,
  },
];

startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
  if (!started) {
    started = true;
    questionNumber = 0;
    score = 0;
    nextQuestion();
    console.log("Quiz started");
  } else {
    console.log("Quiz already started");
  }
}

function nextQuestion() {
  if (questionNumber < questions.length) {
    h2.innerHTML = `Question ${questionNumber + 1}`;
    h3.innerHTML = questions[questionNumber].question;
    displayAnswerButtons();
  } else {
    h2.innerHTML = "Quiz finished";
    h3.innerHTML = `Your score is ${score}/${questions.length}`;
    startQuizButton.innerHTML = "Restart Quiz";
    started = false;
  }
}

function displayAnswerButtons() {
  optionsContainer.innerHTML = ""; // Clear previous options

  const options = questions[questionNumber].answers;
  const correctAnswer = questions[questionNumber].correctAnswer;

  options.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer");
    button.addEventListener("click", () => checkAnswer(index, correctAnswer));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex, correctAnswer) {
  if (selectedIndex === correctAnswer) {
    score++;
  }
  questionNumber++;
  if (questionNumber < questions.length) {
    nextQuestion();
  } else {
    h2.innerHTML = "Quiz finished";
    h3.innerHTML = `Your score is ${score}/${questions.length}`;
    startQuizButton.innerHTML = "Restart Quiz";
    // optionsContainer.remove();
    started = false;

  }
}