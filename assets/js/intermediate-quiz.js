//Commented-out code below tells JavaScript Checkers like JShint that source code uses 'ECMAScript 6 specific syntax (Hibbard, 2014)
/*jshint esversion: 6 */

const question = document.getElementById("intermediateqs");
const options = Array.from(document.getElementsByClassName("optionsil"));

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

startQuiz = () => {
    questionilCounter = 0;
    tally = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    fetchNextQuestion();
};

fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionilCounter > directoryQuestionsMax) {
        return window.location.assign("/quiz-endil.html");
    }

    questionilCounter++;
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