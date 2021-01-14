//////////////////////////////////////
//DOM//
//////////////////////////////////////
const countdownNumberEl = document.querySelector(".time");
const domAnswers = document.querySelectorAll(".answer");
const questionNum = document.querySelector(".question-num");
const questionNow = document.querySelector(".question");
const scoreDom = document.querySelector(".score");
const gameDom = document.querySelector(".game");
const endGameDom = document.querySelector(".end-game");

let questionNumber = 1;
//////////////////////////////////////
//class Game//
//////////////////////////////////////
class Game {
  constructor(question, score) {
    this.question = question;
    this.score = score;
  }
  createQuestion = (question) => {
    questionNow.innerHTML = question.question;
    questionNum.innerHTML = `Question ${questionNumber}`;

    questions.indexOf(question);
    for (let i = 0; i < domAnswers.length; i++) {
      domAnswers[i].innerHTML = `${parseInt(i) + 1}. ${question.answers[i]}`;
    }
    questionNumber < 5 ? questionNumber++ : questionNumber;
  };
  addPoint = () => {
    this.score++;
    scoreDom.innerHTML = this.score;
  };
}
//////////////////////////////////////
//class Question//
//////////////////////////////////////
class Question {
  constructor(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  correctAnswer = (answer) => {
    if (this.correct == answer) {
      game.addPoint();
      return "correct";
    } else {
      return "wrong";
    }
  };
}

//////////////////////////////////////
//Questions//
//////////////////////////////////////
const question1 = new Question(
  "The religious name for Mardi Gras is:",
  ["Shrove Tuesday", "Whitsunday", "PreLent", "mardi-Lalas"],
  0
);
const question2 = new Question(
  "This relatively small country features one of the largest Carnival celebrations in the world:",
  ["Jamaica", "Trinidad and Tobago", "Grenada", "Israel"],
  1
);
const question3 = new Question(
  "New Orleans and Mardi Gras are often associated with this type of music:",
  ["jazz", "French folk songs", "opera", "R&B"],
  0
);
const question4 = new Question(
  "The Mardi Gras colors are:",
  [
    "red white and blue representing the American flag",
    "white and gold the colors of the French imperial navy",
    "purple green and gold in honor of the Russian royal family",
    "Blue and White the colors of the israeli flag",
  ],
  2
);
const question5 = new Question(
  "Mardi Gras actually means:",
  ["Lets Party", "Spring Welcome", "Fat Tuesday", "Merry Times"],
  1
);

//////////////////////////////////////
//Game Core
//////////////////////////////////////
const questions = [question1, question2, question3, question4, question5];
const game = new Game(questions, 0);

let rand = Math.floor(Math.random() * questions.length);

//////////////////////////////////////
// Functions
//////////////////////////////////////
const createGame = () => {
  game.createQuestion(questions[rand]);
};

const endGame = () => {
  gameDom.classList.toggle("display-toggle", "game");
  gameDom.classList.remove("game");
  endGameDom.classList.toggle("display-toggle");
  endGameDom.classList.add("game");
  endGameDom.innerHTML = `<h2> Your Score <br> ${scoreDom.innerText}</h2>`;
};

const popQuestion = () => {
  questions.length != 1
    ? questions.splice(questions.indexOf(questions[rand]), 1)
    : setTimeout(endGame, 800);
};

const ifCorrect = (answer, target) => {
  target.classList.add(`${answer}-ans`);
  setTimeout(() => {
    target.classList.remove(`${answer}-ans`);
  }, 800);
};

const toggleAnswerClick = () => {
  for (e of domAnswers) {
    e.classList.toggle("disable-answer");
  }
  setTimeout(() => {
    for (e of domAnswers) {
      e.classList.toggle("disable-answer");
    }
  }, 800);
};

//////////////////////////////////////
//eventListeners//
//////////////////////////////////////
domAnswers.forEach((e) => {
  e.addEventListener("click", (el) => {
    const clickedAnswer = parseInt(el.target.innerHTML.charAt(0)) - 1;
    ifCorrect(questions[rand].correctAnswer(clickedAnswer), el.target);
    toggleAnswerClick();
    popQuestion();
    setTimeout(createGame, 800);
    rand = Math.floor(Math.random() * questions.length);
  });
});
//////////////////////////////////////
//functionCalls//
//////////////////////////////////////
createGame();
