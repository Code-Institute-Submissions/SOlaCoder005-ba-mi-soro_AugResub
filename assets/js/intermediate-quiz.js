const question = document.getElementById("intermediateqs");
const options = Array.from(document.getElementsByClassName("optionsil"));
// console.log(options);

let liveQuestion = {}; //object
let monitoringAnswers = true; //creates a delay 
let tally = 0; 
let questionilCounter = 0;
let directoryQuestions = [];

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
    questionblCounter = 0;
    score = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    fetchNextQuestion();
};

fetchNextQuestion = () => {
    if (directoryQuestions.length === 0 || questionilCounter > directoryQuestionsMax) {
        return window.location.assign("/quiz-endil.html");
    }

    questionblCounter++;
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length);//this allow the reandom selection of answers
    liveQuestion = directoryQuestions[questionIndex];
    question.innerText = liveQuestion.question;

    options.forEach( option => {
        const number = option.dataset['number'];
        option.innerText = liveQuestion['option' + number];
    });

    directoryQuestions.splice(questionIndex, 1);//this removes the question that is used

    monitoringAnswers = true; //corrolates with initial variable value (above)
};

options.forEach(option => {
    option.addEventListener('click', e => {
    // console.log(e.target);  
    if(!monitoringAnswers) return;

    monitoringAnswers = false; 
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];
    fetchNextQuestion();

    });// this tracks which answer is clicked in the console
});




startQuiz();//to start game