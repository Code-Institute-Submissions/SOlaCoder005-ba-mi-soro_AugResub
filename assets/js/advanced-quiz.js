/*jshint esversion: 6 */

const question = document.getElementById("advancedqs");
const options = Array.from(document.getElementsByClassName("optionsal"));
const questionTracker = document.getElementById('trackqs');
const pointsTracker = document.getElementById('points');
const directoryQuestionsMax = 5;
const individualPoints = 15; 
const penaltyPoints = 5;

let liveQuestion = {};
let monitoringAnswers = false; //false value used so users can not pick answer before page loads
let tally = 0; 
let questionalCounter = 0;
let directoryQuestions = [];
let fetchNextQuestion =  {};
let startQuiz = {};
let tallyIncrease = {};
let tallyDecrease = {};

let listOfQuestions = [
    {
        question:"Q: Where did Ade go to in town?",
        option1:"Market",
        option2:"Church",
        option3:"Salon",
        option4:"Library",
        answer: 1
    },
    {
        question:"Q: How many chickens and yams did Ade buy?",
        option1:"Twelve chickens and four yams",
        option2:"Four chickens and nineteen yams",
        option3:"One chicken and 5 yams",
        option4:"Two chickens and three yams",
        answer: 4
    },
    {
        question:"Q: How did grace say she was?",
        option1:"Grace said she was tierd",
        option2:"Grace said she was angry",
        option3:"Grace said she was fine",
        option4:"Grace said she was sleepy",
        answer: 3
    },
    {
        question:"Q: Where was Ade going after the town, before she met Grace?",
        option1:"Ade was going to her friend's house",
        option2:"Ade was going home",
        option3:"Ade was going to the moon and back",
        option4:"Ade was going to school",
        answer:  2
    },
    {
        question:"Q: What did Ade ask Grace when they met?",
        option1:"How old are you?",
        option2:"What's your name?",
        option3:"How are you?",
        option4:"Where are you going?",
        answer: 3
    }
];

startQuiz = () => {
    questionalCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    fetchNextQuestion();
};

fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionalCounter > directoryQuestionsMax) {
       localStorage.setItem("totalPoints", tally); //allows points to appear on the respective quiz page
       window.location.assign("https://solacoder005.github.io/ba-mi-soro/quiz-end.html");//when user has completed all questions; they shall return to end page
    }

    questionalCounter++;
    questionTracker.innerHTML = questionalCounter + "/" + directoryQuestionsMax; //question tracker increases on the html page
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length); //this allows the reandom selection of answers
    liveQuestion = directoryQuestions[questionIndex];
    question.innerHTML = liveQuestion.question;

    options.forEach( option => {
        const number = option.dataset.number;
        option.innerHTML = liveQuestion['option' + number];
    });

    directoryQuestions.splice(questionIndex, 1); //removes the question that is used
    monitoringAnswers = true; //corrolates with initial variable value (above)
};

options.forEach(option => {
    option.addEventListener('click', e => {  
    if(!monitoringAnswers) return;

    monitoringAnswers = false;// this tracks which answer is clicked in the console

    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset.number;
    const classToApply = 
        selectedAnswer == liveQuestion.answer ? "right" : "wrong"; //using == rather than === as the data being pulled out are strings  
        if (classToApply === "right") {
            tallyIncrease(individualPoints);
        } else {
            tallyDecrease(penaltyPoints);
        };

    selectedOption.parentElement.classList.add(classToApply); //classList.add is shorthand for adding and removing classes to code

    setTimeout(() => {
        selectedOption.parentElement.classList.remove(classToApply);
        fetchNextQuestion();
    }, 500);
    });
});

tallyIncrease = num => {
    tally += num;
    pointsTracker.innerHTML = tally;
};

tallyDecrease = num => {
    tally -= num;
    pointsTracker.innerHTML = tally;
};

startQuiz();



/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
    * J. Q. Quick, 2019 [https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx]
*/ 


