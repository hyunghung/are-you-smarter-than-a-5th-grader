// Questions 
const questions = [
    {
      question: "What is 2 + 2?",
      answer: [
        {
          text: "4",
          isCorrect: true
        },
        {
          text: "5",
          isCorrect: false
        },
        {
          text: "6",
          isCorrect: false
        },
        {
          text: "7",
          isCorrect: false
        }
      ]
    }
  ]
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
  var answerBtn = document.querySelectorAll(".answer-btn");

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

  //start of the quiz
  function startQuiz() {
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    startBtn.disabled = true;
    nextBtn.disabled = false;
    startTimer();
    showNextQuestion();
  }
  
  function showNextQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsLeftEl.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      let button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      answerBtn.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
      answerBtn.removeChild(answerBtn.firstChild);
    }
  }
  function checkAnswer() {
    let currentQuestion = questions[currentQuestionIndex];
    let answer = currentQuestion.answers[0];
    if (answer.isCorrect) {
      score++;
    }
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    endContainer.style.display = "block";
    finalScoreElement.textContent = score;
  
    if (score > highestScore) {
      highestScore = score;
      highScoreElement.textContent = `${highestScore} - ${highestScorer}`;
    }
  
    highScoreContainer.style.display = "block";
  }

  
  function submitScore() {

  }
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
  
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }