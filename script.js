
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let highestScore = 10;
  let highestScorer = "Anthony";
  
  // Elements
  var startContainer = document.getElementById("start-container");
  var quizContainer = document.getElementById("quiz-container");
  var endContainer = document.getElementById("end-container");
  var startBtn = document.getElementById("start-btn");
  var nextBtn = document.getElementById("next-btn");
  var timerElement = document.getElementById("timer");
  var scoreElement = document.getElementById("score");
  var questionsLeftElement = document.getElementById("questions-left");
  var finalScoreElement = document.getElementById("final-score");
  var nameInput = document.getElementById("name-input");
  var submitBtn = document.getElementById("submit-btn");
  
  // Start Button
  startBtn.addEventListener("click", startQuiz);
  
  // Next Button
  nextBtn.addEventListener("click", () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      showNextQuestion();
    }
  });
  
  // Submit button click event
  submitBtn.addEventListener("click", submitScore);
  
  function startQuiz() {

  }
  
  function showNextQuestion() {

  }
  
  function checkAnswer() {

  }
  
  function endQuiz() {

  }
  
  function submitScore() {

  }
  
  function startTimer() {

  }