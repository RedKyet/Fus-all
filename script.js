const myQuestions = [
    {
      question: "Câte titluri naționale are Steaua în palmares?",
      answers: {
        a: "17",
        b: "3",
        c: "26"
      },
      correctAnswer: "c"
    },
    {
      question: "Care este unica echipă din Moldova ce a câștigat un titlu național",
      answers: {
        a: "Dacia Unirea Brăila",
        b: "Oțelul Galați",
        c: "FC Botoșani"
      },
      correctAnswer: "b"
    },
    {
      question: "În ce dată s-a",
      answers: {
        a: "1",
        b: "1",
        c: "1",
        d: "1"
      },
      correctAnswer: "d"
    }
  ];
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
function buildQuiz(){
  const output = [];
   myQuestions.forEach(
     (currentQuestion, questionNumber) => {
      const answers = [];
       for(letter in currentQuestion.answers){
         answers.push(
           `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }
function showResults(){
   const answerContainers = quizContainer.querySelectorAll('.answers');
   let numCorrect = 0;
   myQuestions.forEach( (currentQuestion, questionNumber) => {
     const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
     const userAnswer = (answerContainer.querySelector(selector) || {}).value;
     if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = '#88D498';
      }
      else{
        answerContainers[questionNumber].style.color = '#DE541E';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} din ${myQuestions.length}`;
  }

  buildQuiz();

  submitButton.addEventListener('click', showResults);
