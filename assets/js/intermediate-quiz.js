/*jshint esversion: 6 */

const question = document.getElementById("intermediateqs");
const options = Array.from(document.getElementsByClassName("optionsil"));
const questionTracker = document.getElementById('trackqs');
const pointsTracker = document.getElementById('points');

const directoryQuestionsMax = 5;
const individualPoints = 15;
const penaltyPoints = 5;

let liveQuestion = {};
let monitoringAnswers = false; //false value used so users can not pick answer before page loads
let tally = 0; 
let questionilCounter = 0;
let directoryQuestions = [];
let fetchNextQuestion =  {};
let startQuiz = {};
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

startQuiz = () => {
    questionilCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    fetchNextQuestion();
};

fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionilCounter > directoryQuestionsMax) {
        localStorage.setItem("totalPoints", tally);//allows points to appear on the respective quiz page
        window.location.assign("https://solacoder005.github.io/ba-mi-soro/quiz-end.html");//when user has completed all questions; they shall return to end page
    }

    questionilCounter++;
    questionTracker.innerHTML = questionilCounter + "/" + directoryQuestionsMax;//question tracker increases on the html page
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length);//this allow the reandom selection of answers
    liveQuestion = directoryQuestions[questionIndex];
    question.innerHTML = liveQuestion.question;

    options.forEach( option => {
        const number = option.dataset.number;
        option.innerHTML = liveQuestion['option' + number];
    });

    directoryQuestions.splice(questionIndex, 1);//removes the question that is used
    monitoringAnswers = true;//corrolates with initial variable value (above)
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
    pointsTracker.innerHTML = tally;
};

pointsDecrease = num => {
    tally -= num;
    pointsTracker.innerHTML = tally;
};

startQuiz();

/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
    * J. Q. Quick, 2019 [https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx]
*/ 