// const questions = [
//     {
//         question: 'Inside which HTML element do we put the JavaScript?',
//         option1: 'script',
//         option2: 'javascrip',
//         option3: 'js',
//         correctOption: 'option1', // References the correct option by its key
//     },
//     {
//         question: 'Where is the correct place to insert a JavaScript?',
//         option2: 'The body section',
//         option3: 'Both the head and "body" section are correct',
//         correctOption: 'option3', // References the correct option by its key
//     },
//     {
//         question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
//         option1: 'scripr href=xxx.js',
//         option2: 'scripr name=xxx.js',
//         option3: 'scripr src=xxx.js',
//         option4: '<script src="xxx.js">', // Added a fourth option
//         correctOption: 'option4', // References the correct option by its key
//     }
// ];


// var index = 0
// var score = 0
// var nextBtn = document.getElementById("Next")
// var questionBox = document.getElementById("questionBox")
// var options = document.getElementsByName("option")


// var firstObj = questions[index]
// questionBox.innerHTML = `<p>${questions[index].question}</p>


// <label>
//     <input type="radio"   name="option" value="${questions[index].option1}" >
//     ${questions[index].option1}
// </label>
// <br>
// <label>
//     <input type="radio" name="option" value="${questions[index].option2}" >
//           ${questions[index].option2}
// </label>
// <br>
// <label>
//     <input type="radio" name="option" value="${questions[index].option3}" >
//      ${questions[index].option3}
// </label>`

// selectingOptions()


// function showQuestions() {



//     nextBtn.disabled = true
//     index++;
//     if (!questions[index]) {
//         questionBox.innerHTML = `quiz completed ${score}`
//         nextBtn.style.display = "none"
//     }
//     else {
//         questionBox.innerHTML = `<p>${questions[index].question}</p>


//         <label>
//             <input type="radio"   name="option" value="${questions[index].option1}" >
//             ${questions[index].option1}
//         </label>
//         <br>
//         <label>
//             <input type="radio" name="option" value="${questions[index].option2}" >
//                   ${questions[index].option2}
//         </label>
//         <br>
//         <label>
//             <input type="radio" name="option" value="${questions[index].option3}" >
//              ${questions[index].option3}
//         </label>

// `



//         // enabling next Btn

//         selectingOptions()

//     }
// }



// function next() {
//     for (var i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             if (options[i].value === questions[index].correctOption) {
//                 score++
//                 console.log(score);

//             }

//         }

//     }

//     showQuestions();

// }


// function selectingOptions() {
//     for (var i = 0; i < options.length; i++) {



//         options[i].addEventListener("click", function () {
//             nextBtn.disabled = false
//         })

//     }
// }




// const questions = [
//     {
//         question: 'Inside which HTML element do we put the JavaScript?',
//         option1: 'script',
//         option2: 'javascrip',
//         option3: 'js',
//         correctOption: 'option1',
//     },
//     {
//         question: 'Where is the correct place to insert a JavaScript?',
//         option2: 'The body section',
//         option3: 'Both the head and "body" section are correct',
//         correctOption: 'option3',
//     },
//     {
//         question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
//         option1: 'scripr href=xxx.js',
//         option2: 'scripr name=xxx.js',
//         option3: 'scripr src=xxx.js',
//         option4: 'script src="xxx.js',
//         correctOption: 'option4',
//     }
// ];

// let index = 0;
// let score = 0;
// const nextBtn = document.getElementById("Next");
// const prevBtn = document.getElementById("Previous");
// const questionBox = document.getElementById("questionBox");

// function showQuestions() {
//     if (index >= questions.length) {
//         questionBox.innerHTML = `Quiz completed. Your score is ${score}`;
//         nextBtn.style.display = "none";
//         prevBtn.style.display = "none";
//         return;
//     }

//     const currentQuestion = questions[index];
//     let optionsHTML = '';

//     Object.keys(currentQuestion).forEach(key => {
//         if (key.startsWith('option')) {
//             optionsHTML += `
//                 <label>
//                     <input type="radio" name="option" value="${key}">
//                     ${currentQuestion[key]}
//                 </label><br>
//             `;
//         }
//     });

//     questionBox.innerHTML = `<p>${currentQuestion.question}</p>${optionsHTML}`;
//     selectingOptions();

//     nextBtn.disabled = index >= questions.length - 1;
//     prevBtn.style.display = index > 0 ? "inline" : "none";
// }

// function next() {
//     const options = document.getElementsByName("option");
//     let selectedOption = null;

 

//     index++;
//     showQuestions();
// }

// function previous() {
//     if (index > 0) {
//         index--;
//         showQuestions();
//     }
// }

// function selectingOptions() {
//     const options = document.getElementsByName("option");
//     for (const option of options) {
//         option.addEventListener("click", function () {
//             nextBtn.disabled = false;
//         });
//     }
// }

// // Initialize the quiz
// showQuestions();









// const questions = [
//     {
//         question: 'Inside which HTML element do we put the JavaScript?',
//         option1: 'script',
//         option2: 'javascript',
//         option3: 'js',
//         correctOption: 'option1',
//     },
//     {
//         question: 'Where is the correct place to insert a JavaScript?',
//         option2: 'The body section',
//         option3: 'Both the head and "body" section are correct',
//         correctOption: 'option3',
//     },
//     {
//         question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
//         option1: 'script href=xxx.js',
//         option2: 'script name=xxx.js',
//         option3: 'script src=xxx.js',
//         option4: 'script src="xxx.js',
//         correctOption: 'option4',
//     },
//     // New Questions Below
//     {
//         question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
//         option1: 'if =! 5 then',
//         option2: 'if(i != 5)',
//         option3: 'if i <> 5',
//         option4: 'if(i <> 5)',
//         correctOption: 'option2',
//     },
//     {
//         question: 'How does a WHILE loop start?',
//         option1: 'while i = 1 to 10',
//         option2: 'while (i <= 10; i++)',
//         option3: 'while(i <= 10)',
//         correctOption: 'option3',
//     },
//     {
//         question: 'How does a FOR loop start?',
//         option1: 'for (i = 0; i <= 5; i++)',
//         option2: 'for (i <= 5; i++)',
//         option3: 'for i = 1 to 5',
//         option4: 'for (i = 0; i <= 5; i++)',
//         correctOption: 'option1',
//     },
//     {
//         question: 'How can you add a comment in JavaScript?',
//         option1: '//This is a comment',
//         option2: "'This is a comment",
//         option3: 'This is a comment--',
//         correctOption: 'option1',
//     },
//     {
//         question: 'What is the correct way to write a JavaScript array?',
//         option1: 'let colors = "red", "green", "blue"',
//         option2: 'let colors = (1:"red", 2:"green", 3:"blue")',
//         option3: 'let colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
//         option4: 'let colors = ["red", "green", "blue"]',
//         correctOption: 'option4',
//     },
//     {
//         question: 'How do you round the number 7.25, to the nearest integer?',
//         option1: 'round(7.25)',
//         option2: 'rnd(7.25)',
//         option3: 'Math.rnd(7.25)',
//         option4: 'Math.round(7.25)',
//         correctOption: 'option4',
//     },
//     {
//         question: 'How do you find the number with the highest value of x and y?',
//         option1: 'ceil(x, y)',
//         option2: 'top(x, y)',
//         option3: 'Math.ceil(x ,y)',
//         option4: 'Math.max(x, y)',
//         correctOption: 'option4',
//     },
//     {
//         question: 'What is the correct JavaScript syntax for opening a new window called "w2"?',
//         option1: 'w2 = window.open("http://www.w3schools.com");',
//         option2: 'w2 = window.new("http://www.w3schools.com");',
//         correctOption: 'option1',
//     },
//     {
//         question: 'JavaScript is the same as Java.',
//         option1: 'True',
//         option2: 'False',
//         correctOption: 'option2',
//     },
//     {
//         question: "How can you detect the client's browser name?",
//         option1: 'client.navName',
//         option2: 'browser.name',
//         option3: 'navigator.appName',
//         correctOption: 'option3',
//     },
//     {
//         question: 'Which event occurs when the user clicks on an HTML element?',
//         option1: 'onclick',
//         option2: 'onmouseclick',
//         option3: 'onchange',
//         option4: 'onmouseover',
//         correctOption: 'option1',
//     },
//     {
//         question: 'How do you declare a JavaScript letiable?',
//         option1: 'v carName;',
//         option2: 'letiable carName;',
//         option3: 'let carName;',
//         correctOption: 'option3',
//     }
// ];

// // Existing quiz logic remains unchanged
// let index = 0;
// let score = 0;
// const passingScore = 10; // Set the passing score to 10 correct answers
// const nextBtn = document.getElementById("Next");
// const prevBtn = document.getElementById("Previous");
// const questionBox = document.getElementById("questionBox");

// function showQuestions() {
//     if (index >= questions.length) {
//                 // Check if the user passed or failed the quiz
//                 if (score >= passingScore) {
//                     questionBox.innerHTML = `Quiz completed. Your score is ${score}. Congratulations! You passed the quiz.`;
//                 } else {
//                     questionBox.innerHTML = `Quiz completed. Your score is ${score}. Sorry, you failed the quiz.`;
//                 }
//         // questionBox.innerHTML = `Quiz completed. Your score is ${score}`;
//         nextBtn.style.display = "none";
//         prevBtn.style.display = "none";
//         return;
//     }

//     const currentQuestion = questions[index];
//     let optionsHTML = '';

//     Object.keys(currentQuestion).forEach(key => {
//         if (key.startsWith('option')) {
//             optionsHTML += `
//                 <label>
//                     <input type="radio" name="option" value="${key}">
//                     ${currentQuestion[key]}
//                 </label><br>
//             `;
//         }
//     });

//     // questionBox.innerHTML = `<p>${currentQuestion.question}</p>${optionsHTML}`;
//     // selectingOptions();
//   // Display the question with the question number
//       questionBox.innerHTML = `<p>Question ${index + 1}: ${currentQuestion.question}</p>${optionsHTML}`;
//           // Disable Next button until an option is selected
//     nextBtn.disabled = true;
//       selectingOptions();


//     nextBtn.disabled = index >= questions.length - 1;
//     prevBtn.style.display = index > 0 ? "inline" : "none";
// }

// function next() {
//     const options = document.getElementsByName("option");
//     let selectedOption = null;

//     for (const option of options) {
//         if (option.checked) {
//             selectedOption = option.value;
//             break;
//         }
//     }

//     // If no option is selected, do not proceed
//  // If no option is selected, show SweetAlert
//  if (!selectedOption) {
//     swal({
//         title: "Oops!",
//         text: "Please select an option before proceeding.",
//         icon: "warning",
//         button: "OK",
//     });
//     return;
// }

//     if (selectedOption && selectedOption === questions[index].correctOption) {
//         score++;
//     }

//     index++;
//     showQuestions();
// }

// function previous() {
//     if (index > 0) {
//         index--;
//         showQuestions();
//     }
// }

// function selectingOptions() {
//     const options = document.getElementsByName("option");
//     for (const option of options) {
//         option.addEventListener("click", function () {
//             nextBtn.disabled = false;
//         });
//     }
// }

// // Initialize the quiz


const questions = [
    {
        question: 'What is the holy book of Islam?',
        option1: 'Quran',
        option2: 'Hadith',
        option3: 'Tafseer',
        correctOption: 'option1',
    },
    {
        question: 'Who is the last Prophet of Islam?',
        option1: 'Moses',
        option2: 'Jesus',
        option3: 'Muhammad',
        correctOption: 'option3',
    },
    {
        question: 'In which city is the Kaaba located?',
        option1: 'Medina',
        option2: 'Mecca',
        option3: 'Jerusalem',
        correctOption: 'option2',
    },
    {
        question: 'What is the name of the annual pilgrimage to Mecca?',
        option1: 'Zakat',
        option2: 'Hajj',
        option3: 'Sawm',
        correctOption: 'option2',
    },
    {
        question: 'Which month is observed as Ramadan in Islam?',
        option1: 'Shawwal',
        option2: 'Dhu al-Hijjah',
        option3: 'Ramadan',
        correctOption: 'option3',
    },
    {
        question: 'What is the direction Muslims face during prayer?',
        option1: 'East',
        option2: 'West',
        option3: 'Kaaba',
        correctOption: 'option3',
    },
    {
        question: 'Which of the following is a pillar of Islam?',
        option1: 'Shahada',
        option2: 'Tawheed',
        option3: 'Ihsan',
        correctOption: 'option1',
    },
    {
        question: 'What is the term for charitable giving in Islam?',
        option1: 'Sawm',
        option2: 'Hajj',
        option3: 'Zakat',
        correctOption: 'option3',
    },
    {
        question: 'Who was the first caliph of Islam?',
        option1: 'Ali ibn Abi Talib',
        option2: 'Abu Bakr',
        option3: 'Umar ibn al-Khattab',
        correctOption: 'option2',
    },
    {
        question: 'Which country is known as the birthplace of the Quaid-e-Azam?',
        option1: 'India',
        option2: 'Pakistan',
        option3: 'Bangladesh',
        correctOption: 'option1',
    },
    {
        question: 'What is the national language of Pakistan?',
        option1: 'Urdu',
        option2: 'English',
        option3: 'Punjabi',
        correctOption: 'option1',
    },
    {
        question: 'Which city is known as the City of Lights in Pakistan?',
        option1: 'Karachi',
        option2: 'Lahore',
        option3: 'Islamabad',
        correctOption: 'option1',
    },
    {
        question: 'What is the capital city of Pakistan?',
        option1: 'Karachi',
        option2: 'Islamabad',
        option3: 'Lahore',
        correctOption: 'option2',
    },
    {
        question: 'Which day is celebrated as Pakistan Day?',
        option1: '14 August',
        option2: '23 March',
        option3: '1 March',
        correctOption: 'option2',
    },
    {
        question: 'What is the national flower of Pakistan?',
        option1: 'Jasmine',
        option2: 'Rose',
        option3: 'Sunflower',
        correctOption: 'option1',
    },
    {
        question: 'What is the significance of Eid al-Fitr?',
        option1: 'End of Ramadan',
        option2: 'End of Hajj',
        option3: 'Start of Ramadan',
        correctOption: 'option1',
    }];

let index = 0;
let score = 0;
const passingScore = 10; // Set the passing score to 10 correct answers
const nextBtn = document.getElementById("Next");
const prevBtn = document.getElementById("Previous");
const questionBox = document.getElementById("questionBox");

// function showQuestions() {
//     if (index >= questions.length) {
//         if (score >= passingScore) {
//             questionBox.innerHTML = `Quiz completed. Your score is ${score}. Congratulations! You passed the quiz.`;
//         } else {
//             questionBox.innerHTML = `Quiz completed. Your score is ${score}. Sorry, you failed the quiz.`;
//         }
//         nextBtn.style.display = "none";
//         prevBtn.style.display = "none";
//         return;
//     }
function showQuestions() {
    if (index >= questions.length) {
        // Check if the user passed or failed the quiz
        if (score >= passingScore) {
            // SweetAlert for passing the quiz
            Swal.fire({
                title: 'Congratulations!',
                text: `Quiz completed. Your score is ${score}. You passed the quiz!`,
                icon: 'success', // Success icon
                confirmButtonText: 'Awesome!'
            }).then(() => {
                // Update the questionBox after alert is closed
                questionBox.innerHTML = `Quiz completed. Your score is ${score}. Congratulations! You passed the quiz.`;
            });
        } else {
            // SweetAlert for failing the quiz
            Swal.fire({
                title: 'Failed!',
                text: `Quiz completed. Your score is ${score}. Sorry, you failed the quiz.`,
                icon: 'error', // Error icon
                confirmButtonText: 'Try Again'
            }).then(() => {
                // Update the questionBox after alert is closed
                questionBox.innerHTML = `Quiz completed. Your score is ${score}. Sorry, you failed the quiz.`;
            });
        }
        
        // Hide the buttons after quiz completion
        nextBtn.style.display = "none";
        prevBtn.style.display = "none";
        return;
    }

    const currentQuestion = questions[index];
    let optionsHTML = '';

    Object.keys(currentQuestion).forEach(key => {
        if (key.startsWith('option')) {
            optionsHTML += `
                <label>
                    <input type="radio" name="option" value="${key}">
                    ${currentQuestion[key]}
                </label><br>
            `;
        }
    });

    questionBox.innerHTML = `<p>Question ${index + 1}: ${currentQuestion.question}</p>${optionsHTML}`;
    // nextBtn.disabled = true;
    selectingOptions();

    prevBtn.style.display = index > 0 ? "inline" : "none";
}

function next() {
    const options = document.getElementsByName("option");
    let selectedOption = null;

    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    // If no option is selected, show SweetAlert
    if (!selectedOption) {
        Swal.fire({
            title: 'Please select an option',
            text: 'You need to select an option before proceeding to the next question.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (selectedOption === questions[index].correctOption) {
        score++;
    }

    index++;
    showQuestions();
}

function previous() {
    if (index > 0) {
        index--;
        showQuestions();
    }
}

function selectingOptions() {
    const options = document.getElementsByName("option");
    for (const option of options) {
        option.addEventListener("click", function () {
            nextBtn.disabled = false;
        });
    }
}

document.getElementById("startQuizBtn").onclick = function() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestions();
};
