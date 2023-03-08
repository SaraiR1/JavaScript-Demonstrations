
// CONTACT ME PAGE 

// password regular expression to check for strong, medium, and weak
let pwRequired = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/;
let pwMedium = /(?=.*[a-z])(?=.*[A-Z])(?=(.*[0-9]){2,})(?=.*[^A-Za-z0-9])(?=.{7,})/;
let pwStrong = /(?=.*[a-z])(?=.*[A-Z])(?=(.*[0-9]){2,})(?=(.*[^A-Za-z0-9]){3,})(?=.{8,})/;
let password = document.getElementById('password');


function validateForm (contactForm) {
    
    let isValid = true;
    let output = '';

    //NAME VALIDATION
    if(contactForm.firstName.value.length < 2) {

        isValid = false;
        output += 'Please enter your first name \n';
        contactForm.firstName.focus();

    }

    if(contactForm.lastName.value.length < 2) {

        isValid = false;
        output += 'Please enter your last name \n';
        contactForm.lastName.focus();

    }

    
    //EMAIL VALIDATION
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailReg.test(contactForm.email.value) == false) {

        isValid = false;
        output += 'Please enter a valid email address\n';
        contactForm.email.focus();

    }

    //PASSWORD VALIDATION

    if (pwRequired.test(contactForm.password.value) == false) {
        isValid = false;
        output += 'Password must be: \n - At least 6 characters long contain \n - Have at least one lower case letter and one upper case letter \n - Contain at least two numbers \n - Contain at least one special character\n';

    } 

    // COMMENTS VALIDATION

    if (contactForm.comments.value.length > 500) {
        isValid = false;
        output += 'Please be in the range!\n';
    }


    if (!isValid) {
        alert(output);
    }

    return isValid;
}

// Password strength checker 
function strengthMeter () {
    
    if (pwStrong.test(document.contact.password.value) == true) {
        document.contact.strength.value = 'Strong';
        document.contact.strength.style.backgroundColor = "green";
        document.contact.strength.style.display = "block";
    } else if (pwMedium.test(document.contact.password.value) == true) {
        document.contact.strength.value = 'Medium';
        document.contact.strength.style.backgroundColor = "blue";
    } else {
        document.contact.strength.value = 'Weak';
        document.contact.strength.style.backgroundColor = "red";
        document.contact.strength.style.display = "block";
    }
    
}

// Gets the number of characters the user typed in the comments box
function updateCommentCount() {
    document.contact.characters.value = document.contact.comments.value.length + "/500";

  }

  /* END OF CONTACT PAGE */
  
  //HOME PAGE

  function storage() {
    

    // Prompts user for name if there is no local storage for the clients name
    if(localStorage.getItem('clientName') == null) {

        cName = prompt('Welcome to my e-Portfolio! Please enter your name: ')
        localStorage.setItem('clientName', cName);
        document.write('Hi ' + localStorage.getItem('clientName') + ", I am a web developer committed to creating amazing websites for all my clients!")

    } else {

        document.write('Hi ' + localStorage.getItem('clientName') + ", I am a web developer committed to creating amazing websites for all my clients!")

    }
    // stores the number of visits 
    var numVisits = localStorage.getItem("visits");
    if (!numVisits) {
        numVisits = 0;
      }
      numVisits++; 

      localStorage.setItem("visits", numVisits);
      document.write("<br> <br> The number of times you visited this web page is: " + numVisits);


  }

  function remove() {
    localStorage.removeItem('clientName');
    localStorage.removeItem('visits');
  }

  //END OF HOME PAGE

  // GALLERY PAGE

  let slideNum = 0;
  let time = null;
  const slides = document.getElementsByClassName("myImages");
 
  function displayGal(truFal) {
    
    if(truFal == true) {
        
        slideNum++
        if(slideNum > slides.length) {
            slideNum = 1
          }
        for(let x = 0; x < slides.length; x++) {
          slides[x].style.display = "none";
        }
        slides[slideNum - 1].style.display = "block";

    } else {
        if(slideNum > slides.length) {
            slideNum = 1
          }
        for(let x = 0; x < slides.length; x++) {
          slides[x].style.display = "none";
        }
        slides[slideNum].style.display = "block";

    }
    
    }


 function nextSlides(btn) {
    
    if(btn == false) {
        slideNum--;
        if(slideNum < 0) {
            slideNum = slides.length -1;
        }
        displayGal(false); 

  } else if(btn == true) {
    displayGal(true);
  }

}

function gal() {
    displayGal();
    myInt = setInterval(function(){
        displayGal(true);
    }, 5000)
}

// END OF JS FILE

