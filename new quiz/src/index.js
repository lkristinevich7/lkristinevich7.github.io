let questions=[
    {
        question: 'What is HTML?',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        choiceA: 'Correct',
        choiceB: 'Wrong',
        choiceC: 'Wrong',
        choiceD: 'Wrong',
        correct: 'A'
    },
    {
        question: 'What is CSS?',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
        choiceA: 'Wrong',
        choiceB: 'Correct',
        choiceC: 'Wrong',
        choiceD: 'Wrong',
        correct: 'B'
    },
    {
        question: 'What is JS?',
        image: "https://dmitro.pro/wp-content/uploads/2018/03/js-logo.png",
        choiceA: 'Wrong',
        choiceB: 'Wrong',
        choiceC: 'Correct',
        choiceD: 'Wrong',
        correct: 'C'
    },

]

let start = document.getElementById('start')
let quiz = document.getElementById('quiz')
let image = document.getElementById('image')
let question = document.getElementById('question')
let choices = document.getElementById('choices')
let choiceA = document.getElementById('choiceA')
let choiceB = document.getElementById('choiceB')
let choiceC = document.getElementById('choiceC')
let choiceD = document.getElementById('choiceD')
let scoreDiv = document.getElementById('score')

let currentQuestion= 0;
let lastQuestion = questions.length - 1;
let score= 0;

function renderQuestions(){
    let q = questions[currentQuestion];
    question.innerText=q.question;
    image.innerHTML="<img src="+ q.image+ ">"
    choiceA.innerText=q.choiceA;
    choiceB.innerText=q.choiceB;
    choiceC.innerText=q.choiceC;
    choiceD.innerText=q.choiceD;   
}

start.addEventListener('click', startQuiz)
function startQuiz(){
    start.style.display="none"
    renderQuestions()
    quiz.style.display="block"
}

choiceA.addEventListener('click', function(){ checkAnswer("A")})
choiceB.addEventListener('click', function(){ checkAnswer("B")})
choiceC.addEventListener('click', function(){ checkAnswer("C")})
choiceD.addEventListener('click', function(){ checkAnswer("D")})

function checkAnswer(answer){
    if(answer==questions[currentQuestion].correct){
        answerIsRight()
        score++
    }else{
        answerIsWrong()
    }

    if(currentQuestion<lastQuestion){
        currentQuestion++
        renderQuestions()

    }else{
        renderScore()
    }
    
}

function answerIsRight(){
    document.body.style.backgroundColor=('lightgreen')}

function answerIsWrong(){
    document.body.style.backgroundColor=('darkred')
}

function renderScore(){
    document.body.style.backgroundColor=('white')
    scoreDiv.style.display="block"
    let newScore= Math.floor(100*score/questions.length)+"%"
    scoreDiv.innerHTML="<p>Your score is "+newScore+"</p>"
    scoreDiv.innerHTML+="<button>Retake test</button>"
    
    document.querySelector('button').addEventListener('click', retakeQuiz)

}

function retakeQuiz(){
    scoreDiv.style.display="none"
    quiz.style.display="none"
    currentQuestion= 0;
    score=0
    start.style.display="block"
}