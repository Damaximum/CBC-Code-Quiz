// Setting up the questions for the quiz
var myQuestions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed within _____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        question: 'Arrays in Javasctipt can be used to store ______.',
        choices: ['numbers and string', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'curly brackets',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['Javscript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
    {
        question: 'What is tag not part of the <head> tag in HTML?',
        choices: ['link', 'meta', 'header', 'title'],
        answer: 'header',
    },
    {
        question: 'What is used to decorate HTML content?',
        choices: ['Javascript', 'CSS', 'Java', 'Python'],
        answer: 'CSS',
    },
    {
        question: 'Which of these is not used to create a loop in Javascript?',
        choices: ['for', 'do again', 'while', 'for each'],
        answer: 'do again',
    },
    {
        question: 'What can you create a variable to be?',
        choices: ['value', 'array', 'object', 'all of the above'],
        answer: 'all of the above',
    },
];
// Timer Function
var timer = 75;
function setTime() {

    var timerInterval = setInterval(function() {
        timer--;
        timer.textContext = 'Time left: ' + timer;
        if (timer === 0) {
            clearInterval(timerInterval);

        }
    }, 1000);
};

