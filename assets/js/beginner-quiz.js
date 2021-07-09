/*jshint esversion: 6 */

const question = document.querySelector("#beginnerqs");
const options = Array.from(document.querySelectorAll(".optionsbl"));
const questionTracker = document.querySelector('#trackqs');
const pointsTracker = document.querySelector('#points');
const directoryQuestionsMax = 5;
const individualPoints = 15;
const penaltyPoints = 5;

const startQuiz = () => {
    questionblCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    fetchNextQuestion();
};

/**
 * This presents new quetion to user once answering the current question. 
 * The questions are randomise using the Math.floor(Math.random()) method. 
 */
const fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionblCounter > directoryQuestionsMax) {
        localStorage.setItem("totalPoints", tally);//allows points to appear on the respective quiz page
        window.location.assign("https://solacoder005.github.io/ba-mi-soro/quiz-end.html"); //when user has completed all questions; they shall return to end page
    }

    questionblCounter++;
    questionTracker.innerHTML= questionblCounter + "/" + directoryQuestionsMax; //question tracker increases on the html page
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length); //this allows the reandom selection of answers
    liveQuestion = directoryQuestions[questionIndex];
    question.innerHTML= liveQuestion.question;

    options.forEach( option => {
        const number = option.dataset.number;
        option.innerHTML= liveQuestion['option' + number];
    });

    directoryQuestions.splice(questionIndex, 1);//removes the question that is used
    monitoringAnswers = true; //corrolates with initial variable value (above)
};

let liveQuestion = {};
let monitoringAnswers = false;
let tally = 0; 
let questionblCounter = 0;
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