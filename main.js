// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);

//global variables 

// Event Function
function markQuiz() {
    // Initialize Score
    let score = 0;

    // Mark questions
    score += markQuestion(1, "canada")
    score += markQuestion(2, "cardinal")
    score += markQuestion(3, "tai lung")
    score += markQuestion(4, "pickleball")

    // Display Quiz Results
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = Math.round(score / 4 * 100);


}

//key cocneots of a function is to defin and invoke and organize code and make it more efficent
//PARAMETERS AND ARGUMENTS - DATA INTO A FUNCTION 
//RETURN VALUES - RETURN DATA FROM A FUNCTION

//define and invoke - local variable ( the let answewr variabel only exists in thsi function have to eclare anew one in another function)
//global variables are visible verywhere, and local variables are found only in that function.

function markQuestion(qNum, correctAnswer) {
    let userAnswer = document.getElementById('answer' + qNum).value;
    userAnswer = userAnswer.toLowerCase();

    let resultEl = document.getElementById('result' + qNum);
    if (userAnswer === correctAnswer) {
        resultEl.innerHTML = 'Correct';
        resultEl.style.color = 'green';
        return 1;
    } else {
        resultEl.innerHTML = 'Incorrect';
        resultEl.style.color = 'red';
        return 0; // you need to speficy return zero because if you dont, ut will return undefined and that will mess up your code.
    }

}

