//------------------Donal Dempsey, student ID: 23122200 script----------------------

/*
The following script activates the links within the dropdown menu when it appears on
a smaller screen size, it also conects with the contact infop modal to display the 
contact info to the user
 */

//START DROP DOWN MENU SCRIPT
//Calls the dropdown menu
function navigateToPage() {
  var selectedValue = document.getElementById("pageDropdown").value;

  if (selectedValue.startsWith("#")) {
      // If it's a hash link, show the contact modal (displays the contact info modal)
      var modal = new bootstrap.Modal(document.getElementById('custom_modal_index'));
      modal.show();
  } else {
      // If it's a standard page, redirect to the selected page
      window.location.href = selectedValue;
  }
}
//END DROP DOWN MENU SCRIPT

/*
The following code creates a random number mini game located on the index page of our site.
The code creates a new random number on each play
confirms correct number range has been entered
sets the display parameters based on button click's
countsdown the attempts the user has made
validates the users guess against the generated random number
displays results and clues to the user
 */
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
  // Check if the user's guess is within the range of 1-10
  if (userGuess >= 1 && userGuess <= 10) {
    // Checks if the user has attempts left
    if (attemptsLeft > 0) {
      // Reduces users remaing guess' after each attempt
      attemptsLeft--;
      // Check's if the users guess is correct and displays the message if it is (will also call the endGame function if user is correct)
      if (userGuess === randomNumber) {
        document.getElementById('result').innerHTML = "SUCCESS! <br>" + randomNumber + " is the correct number!";
        endGame();
      } else {
        // works out and tells the user whether their guess is too high or too low (if the statement is true, too low is displayed otherwise, too high is displayed)
        message = userGuess < randomNumber ? 'too low!' : 'too high!';
        document.getElementById('result').innerHTML = "Incorrect guess! " + userGuess + " is " + message + "<br>You have " + attemptsLeft + " attempt(s) left: ";
      }

      // Updates the attempts display to show the user how many trys they have left
      document.getElementById('attempts').textContent = attemptsLeft;

      // Check's if the user is out of try's and displays the message if so (will also call the endGame function if user is out of trys)
      if (attemptsLeft == 0 && userGuess !== randomNumber) {
        document.getElementById('result').innerHTML = "Oh no! You're out of luck!<br>The correct number was: " + randomNumber;
        endGame();
      }
    }
  } else {
    // Display an error message if the user's guess is outside the range
    document.getElementById('result').innerHTML = "Please enter a number between 1 and 10.";
  }
}

// Shows the "Play Again" button after the game has finished
function endGame() {
  document.getElementById('left').style.display = 'none';
  document.getElementById('guess').style.display = 'none';
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

/*
The following code creates a DOM manipulation that displays text over images within carousels on our site
The code assigns event listners for mouseover and mouse out
sets display parameters based on which eventlistner is being activated
*/

//addEventListner allows me to specify the function to look out for a certain event within the html
//DOMContentLoaded ensures script will not run until after the html is fully loaded
document.addEventListener('DOMContentLoaded',function () {
  // query.SelectorAll targets all elements with the class 'carousel-item'
  var carouselItems = document.querySelectorAll('.carousel-item');
  // Loop's through each 'carousel-item' element
  carouselItems.forEach(function (carouselItem) {
    // Add's event listeners and allocates a function for each 'carousel-item' in this case, mouseover & mouseout
    carouselItem.addEventListener('mouseover',function () {
      showCaption(carouselItem);
    }); //closes addEventListner-mouseover & function

    carouselItem.addEventListener('mouseout',function () {
      hideCaption(carouselItem);
    }); //closes addEventListner-mouseout & function
  }); //closes forEach-function

  //Calls the fuction after it is detected by the eventlistener mouseover
  function showCaption(carouselItem) {
    // Find the 'carousel-caption' within the current 'carousel-item' and sets its display parameters
    var caption = carouselItem.querySelector('.carousel-caption');
    if (caption) {
      caption.style.display = 'block';
    }
  }
  //Calls the fuction after it is detected by the eventlistener mouseout
  function hideCaption(carouselItem) {
    // Finds the 'carousel-caption' within the current 'carousel-item' and sets its display parameters
    var caption = carouselItem.querySelector('.carousel-caption');
    if (caption) {
      caption.style.display = 'none';
    }
  }
}); //closes addEventListener-DOMContentLoaded & function 

//END OF TEXT OVER IMAGE SCRIPT

/*
The following code creates a countdown timer for our seasonal page.
The code creates a countdown timer set to christmas day
confirms the remaining time until christmas day
stores the timer within an id
updates the timer every second
displays a message on christmas day
resets the timer each year after christmas day
*/

//START OF SEASONAL COUNTDOWN TIMER

//some knowledge and some code obtained from https://www.w3schools.com/howto/howto_js_countdown.asp
document.addEventListener("DOMContentLoaded", function() {
  //Ensures that the countdown timer is only called by seasonal.html page
  if (document.URL.includes("/seasonal.html")) {
    // Set the countdown date to Christmas Day
    var countDownDate = getNextChristmasDate().getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Finds the distance between now and the end of the timer 
      var distance = countDownDate - now;

      //Calculates how many days are remaining, Math.floor rounds down to the nearest whole number to get the remaining full days
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      //Calculates the remaining millisecounds (after subtracting the days), converts the remaining millisecounds to hours Math.floor then rounds down to the nearest whole number to get the remaining full hours
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      //Calculates remaining millisecounds (after subtracting the days and hours), converts the remaining millisecounds to minutes, Math.floor then rounds down to the nearest whole number to get the remaining full minutes
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      //Calculates the remaining millisecounds (after subtracting days, hours and minutes), converts them in to seconds, Math.floor then rounds down to the nearest whole number to get the remaining full seconds
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the remaining time in the element with id="time"
      document.getElementById("time").innerHTML = days + " Days, " + hours + " Hours, "
        + minutes + " Minutes & " + seconds + " Seconds ";

      // If the countdown is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Christmas is here!";
      }
    },1000); //End of set intervial (1000 = 1 second) 

    // Function to get the next Christmas date and define end point of timer
    function getNextChristmasDate() {
      var today = new Date();
      var christmasDate = new Date(today.getFullYear(),11,25); // Month is 0-based so December is 11 not 12

      // If today is after Christmas, set the target date to next year
      if (today > christmasDate) {
        christmasDate.setFullYear(today.getFullYear() + 1);
      }

      return christmasDate;
    }
  }
});
//END OF COUNTDOWNTIMER FUNCTION

/*
The following code creates a DOM manipulation for the countdown timer on the seasonal page
The code sets display parameters based on button click
the code will hide/display certasin elements based on which button the user clicks
*/

//STRART OF DOM MANIPULATION TO DISPLAY AND HIDE THE COUNTDOWN TIMER
//Once the button is clicked, the change function is called, the following elements are called by their id and new display parameters are assigned
function change() {
  document.getElementById('timer').style.display = 'contents';
  document.getElementById('time').style.display = 'contents';
  document.getElementById('hide').style.display = 'block';
  document.getElementById('christmas').style.display = 'none';
  document.getElementById('count').style.display = 'none';

}
//Once the button is clicked, the back function is called, the following elements are called by their id and new display parameters are assigned
function back() {
  document.getElementById('timer').style.display = 'none';
  document.getElementById('time').style.display = 'none';
  document.getElementById('hide').style.display = 'none';
  document.getElementById('christmas').style.display = '';
  document.getElementById('count').style.display = 'block';
}
//END OF DOM MANIPULATION TO DISPLAY AND HIDE COUNTDOWN TIMER

//------------------End of Donal Dempsey, student ID: 23122200 script----------------------



/* ---------- Flaviu Vanca, Student ID: 22195092 ----------- */
//--------------------------------------------------------------------------------------------------------------------
/*  ********** FORM VALIDATION ********** */
/*  
  Syntax: target.addEventListener(type, listener);
  -The event listener is added to manipulate the elements
  -The method accepts 2 parameters. The first one is the type and second one is the listener, 
    but in our care we use an anonymous function. It is called an anonymous function because 
    its created on the spot and has no name, simmilar to anonymous classes in java :) .  
     
  */
document.addEventListener('DOMContentLoaded',function () {
  //Select the form
  var form = document.getElementById('form');

  //Add an event listener for the form submission.
  //This line of code is simmilar to the above one but it is used for the form
  form.addEventListener('submit',function (event) {
    //Prevent the default form submission
    event.preventDefault();

    //Validate the name field
    var nameInput = document.getElementById('name');//Select the HTML element by the ID or class then assign it to the var 
    //If the length of the name is less than 2 then display a message
    if (nameInput.value.length < 2) {
      alert('Enter a Name Composed from a Minimum of 2 Letters!');//Display message within the alert box
      return;//return is used to exit the function because it doesn' meets the requirements    
    }//End if statement

    //Validate the address field
    var address = document.getElementById('address');//Select the HTML element by the ID or class then assign it to the var
    if (address.value.length < 6) {//Check if the length of the address is lass than 6  
      alert('Enter an Address.');//Display message within the alert box
      return;//return is used to exit the function because it doesn' meets the requirements  
    }//End if statement

    //Validate the phone number field
    //Select the HTML element by the ID or class then assign it to the var
    var phoneInput = document.getElementById('phone_number');
    /*
      The patternn reads like this:
        - ^ (Caret) indicates the start of a string 
        - [0-9] indicates that the phone number should consist of digits from 0 to 9
        - {10,15} indicates that the ength of the phone number should be between 10 to 15 digits
        - $ indicates the end of the string
    */
    var phonePattern = /^[0-9]{10,15}$/;
    //Check if the pattern is matching against the value 
    if (!phonePattern.test(phoneInput.value)) {
      alert('Enter a Valid Phone Number Composed from 10-15 Digits!');//Display message within the alert box
      return;//return is used to exit the function because it doesn' meets the requirements  
    }//End if statement

    //Validate the email field if the field is not empty
    var emailInput = document.getElementById('email');//Select the HTML element by the ID or class then assign it to the var
    //Trim method removes empty spaces added by mistake then check if the string is not empty
    if (emailInput.value.trim() !== '') {
      /*
        -Store the email pattern. 
        -I used this email pattern for the CA. 
          It practically reads like this:
            1-There must be at least one character before @
            2-At least one character between @ and .
            3-At least one lower case letter after .  
      */
      var emailPattern = /.+@.+\.[a-z]+/;
      //Check if the pattern is matching against the value 
      if (!emailPattern.test(emailInput.value)) {
        alert('Enter a Valid Email Address!');//Display message within the alert box
        return;//return is used to exit the function because it doesn' meets the requirements  
      }//End inner if statement
    }//End if statement

    //Validate 'Select Cake' dropdown menu
    //Select the HTML element by the ID or class then assign it to the var
    var cakeSelect = document.getElementById('category');
    /*
      Because the first option in the cake dropdown selection is "Select Cake", I've added a strict check to validate if the value is empty. The form cannot be submited without any cake being selected. 
    */
    if (cakeSelect.value === '') {
      alert('Select a Cake Category!');//Display message within the alert box
      return;//return is used to exit the function because it doesn' meets the requirements  
    }//End if statement

    //Validate the selection of the terms and conditions chackbox 
    //Select the HTML element by the ID or class then assign it to the var
    var terms = document.getElementById('terms_conditions');
    if (!terms.checked) {//Check if the cjeckbox is selected and revert the boolean value using !
      alert('Please Read and Accept the Terms and Conditions!');//Display message within the alert box
      return;//return is used to exit the function because it doesn' meets the requirements  
    }//End if statement

    //Form validation message
    alert('Form Submitted Successfully!');

    //Reset the form by clearing all the fields
    form.reset();
  });
});

/*  ********** END OF FORM VALIDATION ********** */

//--------------------------------------------------------------------------------------------------------------------

/* ********** STYLE THE PREVIOUS AND NEXT SLIDE ICONS ********** */

document.addEventListener('DOMContentLoaded',function () {
  //Get the previous and next slide icons
  var prevIcon = document.querySelector('.carousel-control-prev-icon');
  var nextIcon = document.querySelector('.carousel-control-next-icon');

  //Styles for the previous slide icon
  prevIcon.style.width = '40px';
  prevIcon.style.height = '50px';
  prevIcon.style.borderRadius = '50px';
  prevIcon.style.backgroundColor = 'rgb(94, 94, 193)';

  //Add hover effect for the previous slide icon
  prevIcon.addEventListener('mouseover',function () {
    prevIcon.style.boxShadow = 'goldenrod 0px 0px 2px 2px';//Add box shadow
  });

  //Remove hover effect when not hovered
  prevIcon.addEventListener('mouseout',function () {
    prevIcon.style.boxShadow = 'none';//Remove the box shadow
  });

  //Styles for the next slide icon
  nextIcon.style.width = '40px';
  nextIcon.style.height = '50px';
  nextIcon.style.borderRadius = '50px';
  nextIcon.style.backgroundColor = 'rgb(94, 94, 193)';

  //Add hover effect for the next slide icon
  nextIcon.addEventListener('mouseover',function () {
    nextIcon.style.boxShadow = 'goldenrod 0px 0px 2px 2px';//Add box shadow
  });

  //Remove hover effect when not hovered
  nextIcon.addEventListener('mouseout',function () {
    nextIcon.style.boxShadow = 'none';//Remove the box shadow
  });

});

/* ********** END STYLE OF THE PREVIOUS AND NEXT SLIDE ICONS ********** */

//--------------------------------------------------------------------------------------------------------------------

/* ********** Event Listener to Display the Terms and Conditionas Modal ********** */

document.addEventListener('DOMContentLoaded', function () {
  //Retrieve the modal element
  var customModal = new bootstrap.Modal(document.getElementById('custom_modal'));
  //Add click event listener to the "Terms and Conditions" link to show the custom modal
  var termsAndConditionsLink = document.getElementById('terms_and_conditions_link');
  //Event listener with click type and anonymous function
  termsAndConditionsLink.addEventListener('click', function (event) {
    event.preventDefault();//Prevent the default behavior of the link
    customModal.show();//Display the Modal
  });
});
/* ********** END Event Listener to Display the Terms and Conditionas Modal ********** */

/* ********** Event Listener to Display the Contact Modal ********** */
 document.addEventListener('DOMContentLoaded', function () {
    //Select the element with the name contactinfo and then find the first anchor element in it.
    var contactLink = document.querySelector('.contactinfo a');
    //Retrieve the modal element
    var modal = new bootstrap.Modal(document.getElementById('custom_modal_index'));
    //Event listener with click type and anonymous function
    contactLink.addEventListener('click', function (event) {
      event.preventDefault();//Prevent the default behavior of the link
      modal.show();//Display the Modal
    });
  });
  
  /* ********** END Event Listener to Display the Contact Modal ********** */

  //--------------------------------------------------------------------------------------------------------------------