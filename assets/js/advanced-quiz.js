//Commented-out code below tells JavaScript Checkers like JShint that source code uses 'ECMAScript 6 specific syntax (Hibbard, 2014)
/*jshint esversion: 6 */

const question = document.getElementById("advancedqs");
const options = Array.from(document.getElementsByClassName("optionsal"));
const questionTracker = document.getElementById('trackqs');
const pointsTracker = document.getElementById('points');

let liveQuestion = {};
//false value used so users can not pick answer before page loads
let monitoringAnswers = false;
let tally = 0; 
let questionalCounter = 0;
let directoryQuestions = [];
let fetchNextQuestion =  {};
let startQuiz = {};

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

const directoryQuestionsMax = 5;
const individualPoints = 15;
const penaltyPoints = 5;

startQuiz = () => {
    questionalCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    fetchNextQuestion();
};

fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionalCounter > directoryQuestionsMax) {
        return window.location.assign("/quiz-endal.html");
    }

    questionalCounter++;

    //question tracker increases on the html page
    questionTracker.innerText = questionalCounter + "/" + directoryQuestionsMax;

    //this allows the reandom selection of answers
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

startQuiz();//to start game


