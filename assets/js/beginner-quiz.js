/*jshint esversion: 6 */

const question = document.querySelector("#beginnerqs");
const options = Array.from(document.querySelectorAll(".optionsbl"));
const questionTracker = document.querySelector('#trackqs');
const pointsTracker = document.querySelector('#points');
const directoryQuestionsMax = 5;
const individualPoints = 15;
const penaltyPoints = 5;

const startQuiz = () => {
    questionCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    fetchNextQuestion();
};

const fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionCounter > directoryQuestionsMax) {
        localStorage.setItem("totalPoints", tally);
        window.location.assign("https://solacoder005.github.io/ba-mi-soro/quiz-end.html");
    }

    questionCounter++;
    questionTracker.innerHTML= questionCounter + "/" + directoryQuestionsMax;

    let questionIndex;
    questionIndex = Math.floor(Math.random() * directoryQuestions.length);
    liveQuestion = directoryQuestions[questionIndex];
    question.innerHTML= liveQuestion.question;

    options.forEach( option => {
        const number = option.dataset.number;
        option.innerHTML= liveQuestion['option' + number];
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
        question:"Question: How do you say 'Good Morning' in Yoruba?",
        option1:"Ekaro",
        option2:"Ekasan",
        option3:"Ekale",
        option4:"Bawo ni",
        answer: 1
    },
    {
        question:"Question: How do you say 'Orange'(fruit) in Yoruba?",
        option1:"Ada",
        option2:"Sibi",
        option3:"Osan",
        option4:"Aja",
        answer: 3
    },
    {
        question:"Question: Yoruba is a tribe in which African country?",
        option1:"Ghana",
        option2:"South Africa",
        option3:"Nigeria",
        option4:"South Sudan",
        answer: 3
    },
    {
        question:"Question: How do you say Good afternoon in Yoruba?",
        option1:"Bawo ni",
        option2:"Ekasan",
        option3:"Dada ni",
        option4:"Ekale",
        answer: 2
    },
    {
        question:"Question: How do you say ‘Mother’ in Yoruba?",
        option1:"Aburo",
        option2:"Maami",
        option3:"Egbon",
        option4:"Baami",
        answer: 2
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
    pointsTracker.innerHTML= tally;
};

pointsDecrease = num => {
    tally -= num;
    pointsTracker.innerHTML= tally;
};

startQuiz();