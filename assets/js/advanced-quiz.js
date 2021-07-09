/*jshint esversion: 6 */

const question = document.querySelector("#advancedqs");
const options = Array.from(document.querySelectorAll(".optionsal"));
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
let tally = 0;let questionCounter = 0;
let directoryQuestions = [];
let pointsIncrease = {};
let pointsDecrease = {};

let listOfQuestions = [
    {
        question:"Question: Where did Ade go to in town?",
        option1:"Market",
        option2:"Church",
        option3:"Salon",
        option4:"Library",
        answer: 1
    },
    {
        question:"Question: How many chickens and yams did Ade buy?",
        option1:"Twelve chickens and four yams",
        option2:"Four chickens and nineteen yams",
        option3:"One chicken and 5 yams",
        option4:"Two chickens and three yams",
        answer: 4
    },
    {
        question:"Question: How did grace say she was?",
        option1:"Grace said she was tierd",
        option2:"Grace said she was angry",
        option3:"Grace said she was fine",
        option4:"Grace said she was sleepy",
        answer: 3
    },
    {
        question:"Question: Where was Ade going after the town, before she met Grace?",
        option1:"Ade was going to her friend's house",
        option2:"Ade was going home",
        option3:"Ade was going to the moon and back",
        option4:"Ade was going to school",
        answer:  2
    },
    {
        question:"Question: What did Ade ask Grace when they met?",
        option1:"How old are you?",
        option2:"What's your name?",
        option3:"How are you?",
        option4:"Where are you going?",
        answer: 3
    }
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