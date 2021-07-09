/*jshint esversion: 6 */

const question = document.querySelector("#intermediateqs");
const options = Array.from(document.querySelectorAll(".optionsil"));
const questionTracker = document.querySelector('#trackqs');
const pointsTracker = document.querySelector('#points');
const directoryQuestionsMax = 5;
const individualPoints = 15;
const penaltyPoints = 5;

const startQuiz = () => {
    questionCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    fetchNextQuestion();
};

/**
 * This presents new quetion to user once answering the current question. 
 * The questions are randomise using the Math.floor(Math.random()) method. 
 */
 const fetchNextQuestion = () => {
     if (directoryQuestions.length === 0 || questionCounter > directoryQuestionsMax) {
        localStorage.setItem("totalPoints", tally); 
        window.location.assign("https://solacoder005.github.io/ba-mi-soro/quiz-end.html");
     }

     questionCounter++;
     questionTracker.innerHTML = questionCounter + "/" + directoryQuestionsMax;

     let questionIndex;
     questionIndex = Math.floor(Math.random() * directoryQuestions.length);
     liveQuestion = directoryQuestions[questionIndex];
     question.innerHTML = liveQuestion.question;

     options.forEach( option => {
         const number = option.dataset.number;
         option.innerHTML = liveQuestion['option' + number];
     });

     directoryQuestions.splice(questionIndex, 1);
     monitoringAnswers = true;
};

let liveQuestion = {};
let monitoringAnswers = false;
let tally = 0; 
let questionCounter = 0;
let directoryQuestions = [];
let pointsIncrease = {};
let pointsDecrease = {};

let listOfQuestions = [
    {
        question:"Question: 'Mo ti ra  ________ '",//I have bought an orange.
        option1:"Osan",
        option2:"Maami",
        option3:"Oja",
        option4:"Aburo",
        answer: 1
    },
    {
        question:"Question: 'Mo fe lo  ________ '", //I want to sleep.
        option1:"Sun",
        option2:"Ejo",
        option3:"Bawo ni",
        option4:"Ra Ra",
        answer: 1
    },
    {
        question:"Question: 'Se o ti  ________ '",//Have you eaten?
        option1:"Awo",
        option2:"Tabili",
        option3:"Oja",
        option4:"Jeun",
        answer: 4
    },
    {
        question:"Question: '  ________ ni mi'",//I am a boy.
        option1:"Aja",
        option2:"Okunrin",
        option3:"Oko ayokele",
        option4:"Igi",
        answer: 2
    },
    {
        question:"Question: 'Mefa, meje, mejo, mesan ati  ________ '",//six, seven, eight, nine and ten.
        option1:"Aadota",
        option2:"Meji",
        option3:"Mewa",
        option4:"Baami",
        answer: 3
    }//bonus question
];

options.forEach(option => {
    option.addEventListener('click', e => { 
    if(!monitoringAnswers) return;

    monitoringAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset.number; 
    const classToApply = 
        selectedAnswer == liveQuestion.answer ? "right" : "wrong"; 
        if (classToApply === "right") {
            pointsIncrease(individualPoints);
        } else {
            pointsDecrease(penaltyPoints);
        }

    selectedOption.parentElement.classList.add(classToApply); 

    setTimeout(() => {
        selectedOption.parentElement.classList.remove(classToApply);
        fetchNextQuestion();
    }, 500);
    });
});

pointsIncrease = num => {
    tally += num;
    pointsTracker.innerHTML = tally;
};

pointsDecrease = num => {
    tally -= num;
    pointsTracker.innerHTML = tally;
};

startQuiz();