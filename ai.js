// Get the elements from the document
const questionForm = document.getElementById("question-form");
const questionInput = document.getElementById("question-input");
const answerContainer = document.getElementById("answer-container");
const answerText = document.getElementById("answer-text");
const domain = "openai.com";
// Add an event listener to the form
questionForm.addEventListener("submit", function(event) {
    // Prevent the default behavior of the form
    event.preventDefault();
    
    // Get the question from the input
    const question = questionInput.value;

    // Clear the input
    questionInput.value = "";

    // Check if the question is empty
    if (question.trim() === "") {
        // Display an error message
        answerText.textContent = "Please enter a question.";
        return;
    }

    // Display a loading message
    answerText.textContent = "Loading...";

    // Call a function to get the answer from an API
    getAnswer(question);
});

// Define a function to get the answer from an API
function getAnswer(question) {
    
   // Use fetch to send a request to the API endpoint with the question as a parameter
   fetch(`https://api.example.com/answer?question=${question}`)
   .then(response => response.json()) // Parse the response as JSON
   .then(data => { // Get the data from the response
       // Check if the data has an answer property
       if (data.answer) {
           // Display the answer
           answerText.textContent = data.answer;
       } else {
           // Display a message that no answer was found
           answerText.textContent = "Sorry, I could not find an answer to your question.";
       }
   })
   .catch(error => { // Handle any errors
       // Display an error message
       answerText.textContent = "Something went wrong. Please try again later.";
   });
}
