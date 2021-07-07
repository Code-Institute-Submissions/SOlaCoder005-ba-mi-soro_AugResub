/*jshint esversion: 6 */

const question = document.getElementById("beginnerqs");
const options = Array.from(document.getElementsByClassName("optionsbl"));
const questionTracker = document.getElementById('trackqs');
const pointsTracker = document.getElementById('points');

const directoryQuestionsMax = 5;
const individualPoints = 15;
const penaltyPoints = 5;

let liveQuestion = {};
let monitoringAnswers = false; //false value used so users can not pick answer before page loads
let tally = 0; 
let questionblCounter = 0;
let directoryQuestions = [];
let fetchNextQuestion =  {};
let startQuiz = {};
let pointsIncrease = {};
let pointsDecrease = {};

let listOfQuestions = [
    {
        question:"Question: How do you say Good morning in Yoruba?",
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

startQuiz = () => {
    questionblCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    fetchNextQuestion();
};

fetchNextQuestion = () => {
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

options.forEach(option => {
    option.addEventListener('click', e => {
    if(!monitoringAnswers) return;

    monitoringAnswers = false; // this tracks which answer is clicked in the console
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset.number;
    const classToApply = 
        selectedAnswer == liveQuestion.answer ? "right" : "wrong"; //using == rather than === as the data being pulled out are strings  
        if (classToApply === "right") {
            pointsIncrease(individualPoints);
        } else {
            pointsDecrease(penaltyPoints);
        }

    selectedOption.parentElement.classList.add(classToApply); //classList.add is shorthand for adding and removing classes to statements

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

/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
    * J. Q. Quick, 2019 [https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx]
*/ 