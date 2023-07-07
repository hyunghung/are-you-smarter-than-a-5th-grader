// Questions 
const questions = [
    {
      question: "What is the fastest bird?",
      answers: [
        {
          text: "Ostrich",
          isCorrect: true
        },
        {
          text: "Sparrow",
          isCorrect: false
        },
        {
          text: "Eagle",
          isCorrect: false
        },
        {
          text: "Woodpecker",
          isCorrect: false
        } 
      ]
    },
    {
      question: "Which planet is cloeser to the sun?",
      answers: [
        {
          text: "Venus",
          isCorrect: false
        },
        {
          text: "Earth",
          isCorrect: false
        },
        {
          text: "Jupiter",
          isCorrect: false
        },
        {
          text: "Mercury",
          isCorrect: true
        } 
      ]
    },
    {
        question: "A heptagon is a shape with how many sides?",
        answers: [
          {
            text: "5",
            isCorrect: false
          },
          {
            text: "7",
            isCorrect: true
          },
          {
            text: "8",
            isCorrect: false
          },
          {
            text: "6",
            isCorrect: false
          } 
        ]
      },
      {
        question: "How long is one regular term for a U.S. Representative?",
        answers: [
          {
            text: "2 years",
            isCorrect: true
          },
          {
            text: "5 years",
            isCorrect: false
          },
          {
            text: "3 years",
            isCorrect: false
          },
          {
            text: "4 years",
            isCorrect: false
          } 
        ]
      },
      {
        question: "Which of the following states is NOT on the Gulf of Mexico?",
        answers: [
          {
            text: "Texas",
            isCorrect: false
          },
          {
            text: "Florida",
            isCorrect: false
          },
          {
            text: "Georgia",
            isCorrect: true
          },
          {
            text: "Alabama",
            isCorrect: false
          } 
        ]
      },
      {
        question: "What is the lowest prime number?",
        answers: [
          {
            text: "1",
            isCorrect: false
          },
          {
            text: "2",
            isCorrect: false
          },
          {
            text: "3 ",
            isCorrect: true
          },
          {
            text: "5",
            isCorrect: false
          } 
        ]
      },
      {
        question: "What is the largest South American country by area?",
        answers: [
          {
            text: "Brazil",
            isCorrect: true
          },
          {
            text: "Mexico",
            isCorrect: false
          },
          {
            text: "Peru",
            isCorrect: false
          },
          {
            text: "Chile",
            isCorrect: false
          } 
        ]
      },
      {
        question: "Which one of the following states is NOT part of the Four Corners?",
        answers: [
          {
            text: "Utah",
            isCorrect: false
          },
          {
            text: "Nevada",
            isCorrect: true
          },
          {
            text: "Arizona",
            isCorrect: false
          },
          {
            text: "Colorado",
            isCorrect: false
          } 
        ]
      },
      {
        question: "Who was the first person to step foot on the moon?",
        answers: [
          {
            text: "Neil Armstrong",
            isCorrect: true
          },
          {
            text: "Edwin 'Buzz' Aldrin",
            isCorrect: false
          },
          {
            text: "Alan Shepard",
            isCorrect: false
          },
          {
            text: "John Glenn",
            isCorrect: false
          } 
        ]
      },
      {
        question: "Carefully' is an example of what type of word?",
        answers: [
          {
            text: "Noun",
            isCorrect: false
          },
          {
            text: "Adjective",
            isCorrect: false
          },
          {
            text: "Verb",
            isCorrect: false
          },
          {
            text: "Adverb",
            isCorrect: true
          } 
        ]
      },
  ];
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
  var answerBtn = document.getElementById("answer-btn");

  //Elements
  var timerEl = document.getElementById("timer");
  var scoreEl = document.getElementById("score");
  var questionsLeftEl = document.getElementById("questions-left");
  var finalScoreEl = document.getElementById("final-score");
  var nameInput = document.getElementById("name-input");
  var answerFeedbackEl = document.getElementById("answer-feedback");
  
  // Start Button
  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
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
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      answerBtn.appendChild(button);
      if (answer.isCorrect) {
        button.dataset.isCorrect = answer.isCorrect;
      }
      button.addEventListener("click", checkAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
      answerBtn.removeChild(answerBtn.firstChild);
    }
  }
  function checkAnswer(element) {
    const selectedBtn = element.target;
    const ifCorrect = selectedBtn.dataset.isCorrect === "true";
    if (ifCorrect) {
        score++;
        scoreEl.textContent = score;
        answerFeedbackEl.textContent = "Correct!"
        selectedBtn.disabled = true;
        nextBtn.style.display = "block";
    } else {
        answerFeedbackEl.textContent = "Wrong!";
        selectedBtn.disabled = true;
        nextBtn.style.display = "block";
    }
    questionsLeftElement.textContent = questions.length - (currentQuestionIndex + 1);
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