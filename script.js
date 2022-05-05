//toate intrebarile
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
      question: "Care este cea mai titrata echipă?",
      answers: {
        a: "Steaua",
        b: "CFR Cluj",
        c: "Dinamo",
        d: "Oțelul Galați"
      },
      correctAnswer: "a"
    },
    {
      question: "În ce ediție de campionat, din ultimele cinci, a marcat Steaua cele mai puține goluri, după primele șase etape?",
      answers: {
        a: "2017/2018",
        b: "2014",
        c: "2015",
        d: "2015/2016",
        e: "2014/2015"
      },
      correctAnswer: "d"
    },
    {
      question: "Ce fotbalist a marcat în Etapa a 6-a la debutul în Liga 1?",
      answers: {
        a: "Romario Moise",
        b: "Abang Anatole Bertrand",
        c: "Jo Santos",
      },
      correctAnswer: "c"
    },
    {
      question: "Câte meciuri în prima divizie a contabilizat Romario Benzar, la finalul partidei dintre Steaua si Astra?",
      answers: {
        a: "150",
        b: "50",
        c: "100",
        d: "69"
      },
      correctAnswer: "a"
    },
    {
      question: "Ce antrenor are cele mai multe meciuri în prima divizie?",
      answers: {
        a: "Mircea Lucescu",
        b: "Emeric Ienei",
        c: "Florin Halagian"
      },
      correctAnswer: "c"
    }
  ];
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
function buildQuiz(){//generam quiz
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
