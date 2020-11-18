// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);

//global variables 
let score;
// Event Function
function markQuiz() {
    // Initialize Score
    score = 0;

    // Mark questions
    markQuestion1()
    markQuestion2()
    markQuestion3()
    markQuestion4()

    // Display Quiz Results
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = Math.round(score / 4 * 100);


}

//key cocneots of a function is to defin and invoke and organize code

//define and invoke - local variable ( the let answewr variabel only exists in thsi function have to eclare anew one in another function)
//global variables are visible verywhere, and local variables are found only in that function.
function markQuestion1() {
    // Check Question 1
    let answer = document.getElementById('answer1').value;
    answer = answer.toLowerCase();

    let result1El = document.getElementById('result1');
    if (answer == 'canada') {
        result1El.innerHTML = 'Correct';
        result1El.style.color = 'green';
        score++;
    } else {
        result1El.innerHTML = 'Incorrect';
        result1El.style.color = 'red';
    }
}

function markQuestion2() {
    let answer = document.getElementById('answer2').value;
    answer = answer.toLowerCase();

    let result2El = document.getElementById('result2');
    if (answer == 'cardinal') {
        result2El.innerHTML = 'Correct';
        result2El.style.color = 'green';
        score++;
    } else {
        result2El.innerHTML = 'Incorrect';
        result2El.style.color = 'red';
    }


}

function markQuestion3() {
    let answer = document.getElementById('answer3').value;
    answer = answer.toLowerCase();

    let result3El = document.getElementById('result3');
    if (answer == 'tai lung') {
        result3El.innerHTML = 'Correct';
        result3El.style.color = 'green';
        score++;
    } else {
        result3El.innerHTML = 'Incorrect';
        result3El.style.color = 'red';
    }

}

function markQuestion4() {
    let answer = document.getElementById('answer4').value;
    answer = answer.toLowerCase();

    let result4El = document.getElementById('result4');
    if (answer == 'pickleball') {
        result4El.innerHTML = 'Correct';
        result4El.style.color = 'green';
        score++;
    } else {
        result4El.innerHTML = 'Incorrect';
        result4El.style.color = 'red';
    }

}