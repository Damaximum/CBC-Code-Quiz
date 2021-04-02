// Calling up the various parts of the HTML
var highscore = document.querySelector('#highscore');
var scoredisplay = document.querySelector('#score');
var timerdisplay = document.querySelector('#timer');
var mainmenu = document.querySelector('#main-menu');
var start = document.querySelector('#start');
var gamecube = document.querySelector('#gamecube');
var questiondisplay = document.querySelector('#game-question');
var choicedisplay = document.querySelector('#game-choices');
var responsedisplay = document.querySelector('#game-response');
var endgame = document.querySelector('#endgame');
var intitials = document.querySelector('#initials');
var submit = document.querySelector('#submit');
var hiscoredisplay = document.querySelector('#display-scores');
var scoreDisplayList = document.querySelector('#highscorelist');
var back = document.querySelector('#back');
var clear = document.querySelector('#clear');

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
        question: 'Arrays in Javascript can be used to store ______.',
        choices: ['numbers and string', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['Javscript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
    {
        question: 'What tag is not part of the <head> tag in HTML?',
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
    }
];

var myQuestions2 = myQuestions;
var questionnum = 0;
var score = 0;
var highscorelist = JSON.parse(localStorage.getItem('highscore')) || [];


// Timer Function
var timer = 75;
function setTime() {

    var timerInterval = setInterval(function() {
        timer--;
        timerdisplay.innerHTML = timer;
        if (timer === 0) {
            clearInterval(timerInterval);
            timerdisplay.innerHTML = timer;
            hideAll();
            showEnd();
        }
    }, 1000);
};

// shuffles the array of questions via  Durstenfeld shuffle
function randomQ(myQuestions2) {
    var myQuestions2 = myQuestions;
    for (var i = myQuestions2.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = myQuestions2[i];
        myQuestions2[i] = myQuestions2[j];
        myQuestions2[j] = temp;
    };
    // console.log(myQuestions2)
    // console.log(myQuestions2.length)
    // console.log(myQuestions.length)
};

// displaying the questions for the quiz:
function buildQuiz() {
    // console.log('buildQuiz');
    if (questionnum < myQuestions2.length) {
        questiondisplay.innerHTML = '';
        choicedisplay.innerHTML = '';

        questiondisplay.textContent = myQuestions2[questionnum].question;

        // console.log(questionnum);

        for (var i = 0; i < myQuestions2[questionnum].choices.length; i++) {
            var choice = myQuestions2[questionnum].choices[i];

            var butt = document.createElement('button');
            butt.setAttribute('style', 'margin: 10px; display: block;');
            butt.textContent = choice;
            butt.setAttribute('data-index', i);

            choicedisplay.appendChild(butt);
        };
    } /* else {
        questiondisplay.innerHTML = '';
        choicedisplay.innerHTML = '';
    }*/;
};

// Checking for player input and checking if it is right.
choicedisplay.addEventListener('click', function(event) {
    event.preventDefault();
    var element = event.target;
    
    // console.log(element.textContent)
    // console.log(myQuestions2[questionnum].answer)

    if (element.matches('button')) {
        
        if (questionnum < myQuestions2.length) {
            if (element.textContent == myQuestions2[questionnum].answer) {
                score = score + 10;
                responsedisplay.innerHTML = 'Correct!';
            } else {
                score++;
                responsedisplay.innerHTML = 'Incorrect! -5s';
                if(timer <= 5) {
                    timer = timer - 5;
                
                };
            }; 
        };
        if (questionnum < myQuestions2.length) {
            questionnum++;
            updateScore();
            buildQuiz();
        } else {
            endGame();
        };      
    };
});

function endGame() {
    score = timer + score;
    timer = 1;
    hideAll();
    showEnd();
}

// function that updates and displays the score
function updateScore() {
    scoredisplay.innerHTML = '';
    scoredisplay.innerHTML = score;
};

// start button functionality.
start.addEventListener('click', function() {
    console.log('start');
    questionnum = 0;
    score = 0;
    timer = 75;
    updateScore();
    randomQ(myQuestions2);
    buildQuiz();
    responsedisplay.innerHTML = 'Begin!';
    setTime();
    hideAll();
    showQuiz();
});

// These functions are to show and hide the various "windows" for the game

function hideAll() {
    mainmenu.setAttribute('class', 'hidden');
    gamecube.setAttribute('class', 'hidden');
    endgame.setAttribute('class', 'hidden');
    hiscoredisplay.setAttribute('class', 'hidden');
};

function showMain() {
    mainmenu.setAttribute('class', 'shown');
};

function showQuiz() {
    gamecube.setAttribute('class', 'shown');
};

function showEnd() {
    endgame.setAttribute('class', 'shown');
    var finalscore = document.getElementById('scorefinal');
    finalscore.textContent = score;
};

function showScore() {
    hiscoredisplay.setAttribute('class', 'shown');
    hiScoreList();
};

// Submit button functionality at the end of game screen
submit.addEventListener('click', function() {
    var noType = document.getElementById('noType');

    if (initials.value === '') {
        noType.textContent = 'You must input your initials!';
    } else {
        highscorelist.push({
            name: initials.value,
            score: score
        }); 
        localStorage.setItem('highscore', JSON.stringify(highscorelist));

        hideAll();
        showScore();
    // highscorelist.sort(function(a, b) {
    //     return arseFloat(a.score) - parseFloat(b.score);
    // });
    };
    initials.value = '';
});


// high score page display functionality
function hiScoreList() {
    
    scoreDisplayList = '';

    for (var i = 0; i < highscorelist.length; i++) {

        var ol = document.createElement('ol');
        var li = document.createElement("li");
        var text = document.createTextNode(highscorelist[i].name + " ... " + highscorelist[i].score);

        li.appendChild(text);
        ol.appendChild(li);
        scoreDisplayList.appendChild(ol);

      }

    // highscorelist.forEach(element => {
    //     var scoretable = document.createElement('tr');
    //     var tablename = document.createElement('td');
    //     tablename.textContent = element.name;
    //     var tablescore = document.createElement('td');
    //     tablescore.textContent = element.score;

    //     scoretable.appendChild(tablename);
    //     scoretable.appendChild(tablescore);

    //     scoreList.appendChild(scoretable);      
    // });
};

// [go back] button functionality
back.addEventListener('click', function() {
    scoreDisplayList = '';
    hideAll();
    showMain();
});

// [clear highscore] functionality
clear.addEventListener('click', function() {
    scoreDisplayList = '';
    localStorage.clear('highscore');
    highscorelist = [];
    showScore();  
});

// [highscore] button functionality
highscore.addEventListener('click', function() {
    hideAll();
    showScore();
});

hideAll();
showMain();