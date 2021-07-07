/*jshint esversion: 6 */

const question = document.getElementById("beginnerqs");
const options = Array.from(document.getElementsByClassName("optionsbl"));
const questionTracker = document.getElementById('trackqs');
const pointsTracker = document.getElementById('points');

let liveQuestion = {};
//false value used so users can not pick answer before page loads
let monitoringAnswers = false; 
let tally = 0; 
let questionblCounter = 0;
let directoryQuestions = [];
let fetchNextQuestion =  {};
let startQuiz = {};
let tallyIncrease = {};
let tallyDecrease = {};

let listOfQuestions = [
    {
        question:"How do you say Good morning in Yoruba?",
        option1:"Ekaro",
        option2:"Ekasan",
        option3:"Ekale",
        option4:"Bawo ni",
        answer: 1
    },
    {
        question:"How do you say 'Orange'(fruit) in Yoruba?",
        option1:"Ada",
        option2:"Sibi",
        option3:"Osan",
        option4:"Aja",
        answer: 3
    },
    {
        question:"Yoruba is a tribe in which African country?",
        option1:"Ghana",
        option2:"South Africa",
        option3:"Nigeria",
        option4:"South Sudan",
        answer: 3
    },
    {
        question:"How do you say Good afternoon in Yoruba?",
        option1:"Bawo ni",
        option2:"Ekasan",
        option3:"Dada ni",
        option4:"Ekale",
        answer: 2
    },
    {
        question:"How do you say ‘Mother’ in Yoruba?",
        option1:"Aburo",
        option2:"Maami",
        option3:"Egbon",
        option4:"Baami",
        answer: 2
    }
];

const directoryQuestionsMax = 5;
const individualPoints = 15;
const penaltyPoints = 5;

startQuiz = () => {
    questionblCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    fetchNextQuestion();
};

fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionblCounter > directoryQuestionsMax) {
        //allows points to appear on the respective quiz page
        localStorage.setItem("totalPoints", tally);
        //when user has completed all questions; they shall return to end page
        window.location.assign("https://solacoder005.github.io/ba-mi-soro/quiz-end.html");
    }

    questionblCounter++;

    //question tracker increases on the html page
    questionTracker.innerHTML= questionblCounter + "/" + directoryQuestionsMax;

    //this allows the reandom selection of answers
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length);
    liveQuestion = directoryQuestions[questionIndex];
    question.innerHTML= liveQuestion.question;

    options.forEach( option => {

        //dot notation used to increase readability
        const number = option.dataset.number;
        option.innerHTML= liveQuestion['option' + number];
    });

    //removes the question that is used
    directoryQuestions.splice(questionIndex, 1);

    //corrolates with initial variable value (above)
    monitoringAnswers = true; 
};

options.forEach(option => {
    option.addEventListener('click', e => {
    if(!monitoringAnswers) return;

    // this tracks which answer is clicked in the console
    monitoringAnswers = false;
    const selectedOption = e.target;

    //dot notation used to increase readability
    const selectedAnswer = selectedOption.dataset.number;

    //using == rather than === as the data being pulled out are strings  
    const classToApply = 
        selectedAnswer == liveQuestion.answer ? "right" : "wrong";
        if (classToApply === "right") {
            tallyIncrease(individualPoints);
        } else {
            tallyDecrease(penaltyPoints);
        }

    //classList.add is shorthand for adding and removing classes to code
    selectedOption.parentElement.classList.add(classToApply);

    setTimeout(() => {
        selectedOption.parentElement.classList.remove(classToApply);
        fetchNextQuestion();
    }, 500);
    });
});

tallyIncrease = num => {
    tally += num;
    pointsTracker.innerHTML= tally;
};

tallyDecrease = num => {
    tally -= num;
    pointsTracker.innerHTML= tally;
};

startQuiz();

/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
    * J. Q. Quick, 2019 [https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx]
*/ 