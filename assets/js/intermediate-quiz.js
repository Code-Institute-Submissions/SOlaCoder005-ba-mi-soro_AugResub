/*jshint esversion: 6 */

const question = document.getElementById("intermediateqs");
const options = Array.from(document.getElementsByClassName("optionsil"));
const questionTracker = document.getElementById('trackqs');
const pointsTracker = document.getElementById('points');

let liveQuestion = {};
//false value used so users can not pick answer before page loads
let monitoringAnswers = false;
let tally = 0; 
let questionilCounter = 0;
let directoryQuestions = [];
let fetchNextQuestion =  {};
let startQuiz = {};

let listOfQuestions = [
    {
        question:"'Mo ti ra  ________ '",//I have bought an orange.
        option1:"Osan",
        option2:"Maami",
        option3:"Oja",
        option4:"Aburo",
        answer: 1
    },
    {
        question:"'Mo fe lo  ________ '", //I want to sleep.
        option1:"Sun",
        option2:"Ejo",
        option3:"Bawo ni",
        option4:"Ra Ra",
        answer: 1
    },
    {
        question:"'Se o ti  ________ '",//Have you eaten?
        option1:"Awo",
        option2:"Tabili",
        option3:"Oja",
        option4:"Jeun",
        answer: 4
    },
    {
        question:"'  ________ ni mi'",//I am a boy.
        option1:"Aja",
        option2:"Okunrin",
        option3:"Oko ayokele",
        option4:"Igi",
        answer: 2
    },
    {
        question:"'Mefa, meje, mejo, mesan ati  ________ '",//six, seven, eight, nine and ten.
        option1:"Aadota",
        option2:"Meji",
        option3:"Mewa",
        option4:"Baami",
        answer: 3
    }//bonus question
];

const directoryQuestionsMax = 5;
const individualPoints = 15;
const penaltyPoints = 5;

startQuiz = () => {
    questionilCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    fetchNextQuestion();
};

fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionilCounter > directoryQuestionsMax) {

        //allows points to appear on the respective quiz page
        localStorage.setItem("totalPoints", tally);

        //when user has completed all questions; they shall return to end page
        return window.location.assign("/quizEnd.html", tally);
    }

    questionilCounter++;

    //question tracker increases on the html page
    questionTracker.innerText = questionilCounter + "/" + directoryQuestionsMax;

    //this allow the reandom selection of answers
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length);
    liveQuestion = directoryQuestions[questionIndex];
    question.innerText = liveQuestion.question;

    options.forEach( option => {

        //dot notation used to increase readability
        const number = option.dataset.number;
        option.innerText = liveQuestion['option' + number];
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
        };

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
    pointsTracker.innerText = tally;
};

tallyDecrease = num => {
    tally -= num;
    pointsTracker.innerText = tally;
};

startQuiz();

/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
        * J. Q. Quick, 2019 [https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx]
*/ 