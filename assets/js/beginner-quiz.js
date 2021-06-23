const question = document.getElementById("beginnerqs");
const options = Array.from(document.getElementsByClassName("optionsbl"));
// console.log(options);

let liveQuestion = {}; //object
let monitoringAnswers = true; //creates a delay 
let tally = 0; 
let questionblCounter = 0;
let directoryQuestions = [];

let listOfQuestions = [
    {
        question:"fgvgftgtbg",
        option1:"test",
        option2:"test",
        option3:"test",
        option4:"test",
        answer: 1
    },
    {
        question:"fgvgftgtbg",
        option1:"test",
        option2:"test",
        option3:"test",
        option4:"test",
        answer: 3
    },
    {
        question:"fgvgftgtbg",
        option1:"test",
        option2:"test",
        option3:"test",
        option4:"test",
        answer: 4
    },
    {
        question:"fgvgftgtbg",
        option1:"test",
        option2:"test",
        option3:"test",
        option4:"test",
        answer: 2
    },
];

startQuiz = () => {
    questionblCounter = 0;
    score = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionblCounter++;
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length);//this allow the reandom selection of answers
    liveQuestion = directoryQuestions[questionIndex];
    question.innerText = liveQuestion.question;

    options.forEach( option => {
        const number = option.dataset['number'];
        option.innerText = liveQuestion['option' + number];
    })
}




startQuiz();//to start game