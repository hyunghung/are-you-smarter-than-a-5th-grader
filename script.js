
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let highestScore = 10;
  let highestScorer = "Anthony";
  
  // Containers 
  var startContainer = document.getElementById("start-container");
  var quizContainer = document.getElementById("quiz-container");
  var endContainer = document.getElementById("end-container");

  // Buttons
  var startBtn = document.getElementById("start-btn");
  var nextBtn = document.getElementById("next-btn");
  var submitBtn = document.getElementById("submit-btn");

  //Number Elements
  var timerEl = document.getElementById("timer");
  var scoreEl = document.getElementById("score");
  var questionsLeftEl = document.getElementById("questions-left");
  var finalScoreEl = document.getElementById("final-score");
  var nameInput = document.getElementById("name-input");
  
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