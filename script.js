const questions = [
  { question: "What is the capital of France?", answers: ["Paris", "London", "Rome", "Berlin"], correct: "Paris" },
  { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars" },
  { question: "Who wrote 'Romeo and Juliet'?", answers: ["Shakespeare", "Tolstoy", "Hemingway", "Twain"], correct: "Shakespeare" },
  { question: "What is the largest mammal?", answers: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correct: "Blue Whale" },
  { question: "What is the chemical symbol for water?", answers: ["O2", "H2O", "CO2", "HO"], correct: "H2O" },
  { question: "Who painted the Mona Lisa?", answers: ["Van Gogh", "Da Vinci", "Picasso", "Monet"], correct: "Da Vinci" },
  { question: "What is the smallest planet in our solar system?", answers: ["Mercury", "Mars", "Venus", "Jupiter"], correct: "Mercury" },
  { question: "In what country is the Great Barrier Reef located?", answers: ["Australia", "USA", "Brazil", "China"], correct: "Australia" },
  { question: "What year did World War II end?", answers: ["1945", "1918", "1939", "1963"], correct: "1945" },
  { question: "What is the powerhouse of the cell?", answers: ["Nucleus", "Mitochondria", "Ribosome", "Golgi"], correct: "Mitochondria" },
  { question: "How many continents are there?", answers: ["5", "6", "7", "8"], correct: "7" },
  { question: "What is the longest river in the world?", answers: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: "Nile" },
  { question: "Who invented the telephone?", answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"], correct: "Alexander Graham Bell" },
  { question: "Which element has the chemical symbol 'O'?", answers: ["Gold", "Oxygen", "Silver", "Iron"], correct: "Oxygen" },
  { question: "What planet is closest to the sun?", answers: ["Venus", "Earth", "Mercury", "Mars"], correct: "Mercury" },
  { question: "Which ocean is the largest?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: "Pacific" },
  { question: "What is the square root of 64?", answers: ["6", "7", "8", "9"], correct: "8" },
  { question: "In which country is the Eiffel Tower located?", answers: ["Italy", "France", "Spain", "Germany"], correct: "France" },
  { question: "Who discovered penicillin?", answers: ["Marie Curie", "Albert Einstein", "Alexander Fleming", "Isaac Newton"], correct: "Alexander Fleming" },
  { question: "What is the boiling point of water in Celsius?", answers: ["90", "100", "110", "120"], correct: "100" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function startQuiz() {
  displayQuestion(questions[currentQuestionIndex]);
}

function displayQuestion(questionObj) {
  questionElement.innerText = questionObj.question;
  answerButtons.forEach((button, index) => {
    button.innerText = questionObj.answers[index];
    button.onclick = () => selectAnswer(button, questionObj.correct);
  });
  nextButton.style.display = "none";
}

function selectAnswer(button, correctAnswer) {
  const isCorrect = button.innerText === correctAnswer;
  if (isCorrect) {
    button.style.backgroundColor = "#2ECC71";
    score++;
  } else {
    button.style.backgroundColor = "#E74C3C";
  }
  scoreElement.innerText = score;
  answerButtons.forEach(btn => btn.disabled = true);
  nextButton.style.display = "block";
}

function resetState() {
  answerButtons.forEach(button => {
    button.style.backgroundColor = "#4B0082";
    button.disabled = false;
  });
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    resetState();
    displayQuestion(questions[currentQuestionIndex]);
  } else {
    displayResults();
  }
});

function displayResults() {
  questionElement.innerText = `Quiz Completed! Your Score: ${score} / ${questions.length}`;
  answerButtons.forEach(button => button.style.display = "none");
  nextButton.style.display = "none";
}

startQuiz();
