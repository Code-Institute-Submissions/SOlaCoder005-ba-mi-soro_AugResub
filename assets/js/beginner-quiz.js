//Commented-out code below tells JavaScript Checkers like JShint that source code uses 'ECMAScript 6 specific syntax (Hibbard, 2014)
/*jshint esversion: 6 */

const question = document.getElementById("beginnerqs");
const options = Array.from(document.getElementsByClassName("optionsbl"));

let liveQuestion = {};
//false value used so users can not pick answer before page loads
let monitoringAnswers = false; 
let tally = 0; 
let questionblCounter = 0;
let directoryQuestions = [];
let fetchNextQuestion =  {};
let startQuiz = {};

let listOfQuestions = [
    {
        question:"Q: How do you say Good morning in Yoruba?",
        option1:"Ekaro",
        option2:"Ekasan",
        option3:"Ekale",
        option4:"Bawo ni",
        answer: 1
    },
    {
        question:"Q: How do you say 'Orange'(fruit) in Yoruba?",
        option1:"Ada",
        option2:"Sibi",
        option3:"Osan",
        option4:"Aja",
        answer: 3
    },
    {
        question:"Q: Yoruba is a tribe in which African country?",
        option1:"Ghana",
        option2:"South Africa",
        option3:"Nigeria",
        option4:"South Sudan",
        answer: 3
    },
    {
        question:"Q: How do you say Good afternoon in Yoruba?",
        option1:"Bawo ni",
        option2:"Ekasan",
        option3:"Dada ni",
        option4:"Ekale",
        answer: 4
    },
    {
        question:"Q: How do you say ‘Mother’ in Yoruba?",
        option1:"Aburo",
        option2:"Maami",
        option3:"Egbon",
        option4:"Baami",
        answer: 2
    }
];

const directoryQuestionsMax = 5;

startQuiz = () => {
    questionblCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    fetchNextQuestion();
};

fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionblCounter > directoryQuestionsMax) {
        return window.location.assign("/quiz-endbl.html");
    }

    questionblCounter++;
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length);//this allow the reandom selection of answers
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
    fetchNextQuestion();
    });
});

startQuiz();//to start game