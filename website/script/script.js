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

//END OF TEXT OVER IMAGE SCRIPT

//START OF SEASONAL COUNTDOWN TIMER

//knowledge and code obtained from https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

function change() {
  document.getElementById('timer').style.display = 'contents';
  document.getElementById('time').style.display = 'contents';
  document.getElementById('hide').style.display = 'block';
  document.getElementById('christmas').style.display = 'none';
  document.getElementById('count').style.display = 'none';

}
function back(){
  document.getElementById('timer').style.display = 'none';
  document.getElementById('time').style.display = 'none';
  document.getElementById('hide').style.display = 'none';
  document.getElementById('christmas').style.display = '';
  document.getElementById('count').style.display = 'block';
}

/* 
  ---------- Flaviu Vanca, Student ID: 22195092 -----------
          -------Form Validation Script -------
*/

document.addEventListener('DOMContentLoaded', function () {
  // Select the form element
  var form = document.getElementById('form');

  // Add an event listener for the form submission
  form.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Validate the name field
      var nameInput = document.getElementById('name');
      if (nameInput.value.length < 2) {
          alert('Please enter a name with a minimum of 2 letters.');
          return;
      }//End if statement

      // Validate the email field if it is not empty
      var emailInput = document.getElementById('email');
      if (emailInput.value.trim() !== '') {
         var emailPattern = /.+@.+\.[a-z]+/;
          if (!emailPattern.test(emailInput.value)) {
              alert('Please enter a valid email address.');
              return;
          }
      }//End if statement

      //Validate the address field
      var address = document.getElementById('address');
      if(address.value.length < 6){
        alert('Please enter an address.');
        return;
      }//End if statement

      //Validate the phone number field
      var phoneInput = document.getElementById('phone_number');
      var phonePattern = /^[0-9]{10,15}$/;
      if (!phonePattern.test(phoneInput.value)) {
          alert('Please enter a valid phone number with 10 to 15 digits.');
          return;
      }//End if statement

      //Validate 'Select Cake' dropdown menu
      var cakeSelect = document.getElementById('category');
      if (cakeSelect.value === '') {
        alert('Please select a cake category.');//Display message within the alert box
        return;
      }//End if statement


      var terms = document.getElementById('terms_conditions');
      if(!terms.checked){
        alert('Please accept the Terms and Conditions');
        return;
      }//End if statement

      // Form validation message
      alert('Form submitted successfully!');

      form.reset();//Reset the form
  });
});
/*  ********** END OF FORM VALIDATION ********** */