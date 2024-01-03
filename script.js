const quizdate = [
    {
        question:"what is the capital  of India?",
        a: "Delhi",
        b: "mumbai",
        c: "chennai",
        d: "cochin",
        correct: 'a',
    },
    {
        question: "What does Html stands for?",
        a:"HyperText Markdown Language",
        b:"Hyperloop Machine Language",
        c:"HyperText Markup Language",
        d:"Hyperspace Text Markup Language",
        correct: "c",
    },
    {
        question:"What does CSS stands for?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheet",
        c:"Computer Style Sheets",
        d:"Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question:"Which language runs on browser?",
        a:"Javascript",
        b:"Python",
        c:"Java",
        d:"C",
        correct: "a",
    },
    {
        question: "Which year was Javascript launched?",
        a:"1996",
        b:"1994",
        c:"1995",
        d:"none of the year",
        correct:"c",
    },
    {
       question: "Inside Which  HTML element do  we put the Javascript?",
       a:"<scripting>",
       b:"<script>",
       c:"<p>",
       d:"<Javascript>",
       correct:"b",
    },
    {
       question:"Which tag is used to  underline text?",
       a:"<a>",
       b:"<u>",
       c:"<I>",
       d:"<b>",
       correct:"b",
    },
    {
       question:"which country has the largest Population?",
       a:"China",
       b:"India",
       c:"USA",
       d:"England",
       correct:"b",
    },
    {
       question:"Which type of input allows you to pick only one option in javascript?",
       a:"text",
       b:"Radio",
       c:"Submit",
       d:"email",
       correct:"b",   

    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEle = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentquiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswer()
    
    const currentquizData = quizdate[currentquiz]
    questionEle.innerText = currentquizData.question
    a_text.innerText = currentquizData.a
    b_text.innerText = currentquizData.b
    c_text.innerText = currentquizData.c
    d_text.innerText = currentquizData.d

}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer= getSelected()
    if(answer){
        if (answer === quizdate[currentquiz].correct){
            score++
        }
        currentquiz++

        if(currentquiz<quizdate.length){
            loadQuiz()
        }
        else{
          quiz.innerHTML= `
         <h2>You answered ${score}/${quizdate.length} questions correctly <h2>
         <button onclick = "location. reload()">Reload</button> 
       `
        }
    }
})

function reload(){
    location.reload()
}
