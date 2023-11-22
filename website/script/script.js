//------------------Donal Dempsey script----------------------
//START MINI GAME SCRIPT

//Declares variables 
var randomNumber;
var attemptsLeft;
var userGuess;
var message;

//function called by button press
function startGame() {
    // Hides the "play mini game" button
    document.getElementById('start').style.display = 'none';
            
    // Display's the game container on button push overwriting the css style 'none'
    document.getElementById('minigame').style.display = 'block';

    // Creates a random number between 1 and 10 and stores it in the var randomNumber
    randomNumber = Math.floor(Math.random() * 10) + 1;
    // Set's the number of attempts a user has to guess the number
    attemptsLeft = 3;
    // Display's message to user explaning the rules and the game
    document.getElementById('result').innerHTML = "I have randomly selected a number between 1-10<br>you have 3 attempts to guess it!";
    // Shows the user how many attempts they have left
    document.getElementById('attempts').textContent = attemptsLeft;
    }

// Function called when user enters their guess
function checkGuess() {
    // Get the user's guess from the input
    userGuess = parseInt(document.getElementById('guessInput').value);

    // Checks if the user has attempts left
    if (attemptsLeft > 0) {
    // Reduces users remaing guess' after each attempt
        attemptsLeft--;

        // Check's if the users guess is correct and displays the message if it is (will also call the endGame function if user is correct)
        if (userGuess === randomNumber) {
            document.getElementById('result').innerHTML = "SUCCESS! <br>" +randomNumber+ " is the correct number!";
            endGame();
        } 
        else {
            // works out and tells the user whether their guess is too high or too low (if the statement is true, too low is displayed otherwise, too high is displayed)
            message = userGuess < randomNumber ? 'too low!' : 'too high!';
            document.getElementById('result').innerHTML = "Incorrect guess! "+userGuess+ " is " +message+ "<br>You have " +attemptsLeft+ " attempt(s) left: " ;
        }

        // Updates the attempts display to show the user how many trys they have left
        document.getElementById('attempts').textContent = attemptsLeft;

        // Check's if the user is out of try's and displays the message if so (will also call the endGame function if user is out of trys)
        if (attemptsLeft == 0 && userGuess !== randomNumber) {
                document.getElementById('result').innerHTML ="Oh no! You're out of luck!<br>The correct number was: " +randomNumber;
                endGame();
        }
    }
}

// Shows the "Play Again" button after the game has finished
function endGame() {
    document.getElementById('enterGuess').style.display = 'none';
    document.getElementById('guessInput').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'inline';
}
        
// Resets all the game states so it can to be played again once the play again button is pressed
function playAgain() {
    document.getElementById('start').style.display = 'inline';
    document.getElementById('minigame').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'none';
    document.getElementById('enterGuess').style.display = 'inline';
    document.getElementById('guessInput').style.display = 'inline';
    document.getElementById('result').innerHTML = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
}

//END OF MINI GAME SCRIPT

//START OF TEXT OVER IMAGES SCRIPT

//addEventListner allows me to specify the function to look out for a certain event within the html
//DOMContentLoaded ensures script will not run until after the html is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // query.SelectorAll targets all elements with the class 'carousel-item'
    var carouselItems = document.querySelectorAll('.carousel-item');
    // Loop's through each 'carousel-item' element
    carouselItems.forEach(function(carouselItem) {
      // Add's event listeners and allocates a function for each 'carousel-item' in this case, mouseover & mouseout
      carouselItem.addEventListener('mouseover', function () {
        showCaption(carouselItem);
      }); //closes addEventListner-mouseover & function
  
      carouselItem.addEventListener('mouseout', function () {
        hideCaption(carouselItem);
      }); //closes addEventListner-mouseout & function
    }); //closes forEach-function

    //Calls the fuction after it is detected by the eventlisteners 
    function showCaption(carouselItem) {
      // Find the 'carousel-caption' within the current 'carousel-item'
      var caption = carouselItem.querySelector('.carousel-caption');
      if (caption) {
        caption.style.display = 'block';
      }
    }
  
    function hideCaption(carouselItem) {
      // Find the 'carousel-caption' within the current 'carousel-item'
      var caption = carouselItem.querySelector('.carousel-caption');
      if (caption) {
        caption.style.display = 'none';
      }
    }
  }); //closes addEventListener-DOMContentLoaded & function 


/* 
  ---------- Flaviu Vanca, Student ID: 22195092 -----------
          -------Form Validation Script -------
*/
document.addEventListener("DOMContentLoaded", function () {
  // Fetching the form and adding an event listener for submission
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
      // Preventing the default form submission
      event.preventDefault();

      // Fetching the values of the form fields
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone_number").value;

      // Validating the name field
      if (name.length < 3) {
          alert("Name must be at least 3 characters long");
          return;//exit the function if the condition is not met
      }

      // Validating the email field
      const emailPattern = /.+@.+\.[a-z]+/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address");
          return;//exit the function if the condition is not met
      }

      // Validating the phone number field
      const phonePattern = /^[0-9]{10,15}$/;
      if (!phonePattern.test(phone)) {
          alert("Phone number must be between 10 and 15 digits");
          return;//exit the function if the condition is not met
      }

      // Displaying a tip-like message
      alert("Form submitted successfully! 🎉");
  });
});
/*  ********** END OF FORM VALIDATION ********** */