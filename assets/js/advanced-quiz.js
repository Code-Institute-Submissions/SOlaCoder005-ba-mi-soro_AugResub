const question = document.getElementById("advancedqs");
const options = Array.from(document.getElementsByClassName("optionsal"));
// console.log(options);

let liveQuestion = {}; //object
let monitoringAnswers = true; //creates a delay 
let tally = 0; 
let questionblCounter = 0;
let directoryQuestions = [];

let listOfQuestions = [
    {
        question:"Where did Ade go to in town?",
        option1:"Market",
        option2:"Church",
        option3:"Salon",
        option4:"Library",
        answer: 1
    },
    {
        question:"How many chickens and yams did Ade buy?",
        option1:"Twelve cheickens and four yams",
        option2:"Four chickens and nineteen yams",
        option3:"One chicken and 5 yams",
        option4:"Two chickens and three yams",
        answer: 4
    },
    {
    question:"How did grace say she was?",
    option1:"Grace said she was tierd",
    option2:"Grace said she was angry",
    option3:"Grace said she was fine",
    option4:"Grace said she was sleepy",
    answer: 3
    },
    {
    question:"Where was Ade going after the town, before she met Grace?",
    option1:"Ade was going to her friend's house",
    option2:"Ade was going home",
    option3:"Ade was going to the moon and back",
    option4:"Ade was going to school",
    answer:  2
    },
    {
    question:"What did Ade ask Grace when they met?",
    option1:"How old are you?",
    option2:"What's your name?",
    option3:"How are you?",
    option4:"Where are you going?",
    answer: 3
    }
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