/*****************************************************
 * Description:  Defines common javascript functions for client-side 
 * Version:   4.1   
*****************************************************/

function openHelp() {
    let alertMsg = 'Please contact your research administrator (hbala1@learn.athabascau.ca) for any of the following issues: ';
    alertMsg += '\n\n - If you are experiencing difficulty logging in or have not yet received login credentials';
    alertMsg += '\n\n - If you have any questions or concerns about participating in the research study';
    alertMsg += '\n\n - If you would like to withdraw from the study at any point';
    alert(alertMsg);
}

function tutorialButtonContinue() {
    if (document.getElementById('divSection0').style.display=='block') {
        document.getElementById('divSection0').style.display='none';
        document.getElementById('divSection1').style.display='block';
    } else if (document.getElementById('divSection1').style.display=='block') {
        document.getElementById('divSection1').style.display='none';
        document.getElementById('divSection2').style.display='block';
    } else if (document.getElementById('divSection2').style.display=='block') {
        document.getElementById('divSection2').style.display='none';
        document.getElementById('divSection3').style.display='block';
    } else if (document.getElementById('divSection3').style.display=='block') {
        document.getElementById('divSection3').style.display='none';
        document.getElementById('divSection4').style.display='block';
    } else if (document.getElementById('divSection4').style.display=='block') {
        document.getElementById('divSection4').style.display='none';
        document.getElementById('divSection5').style.display='block';
    } else if (document.getElementById('divSection5').style.display=='block') {
        document.getElementById('divSection5').style.display='none';
        document.getElementById('divSection6').style.display='block';
    } else if (document.getElementById('divSection6').style.display=='block') {
        document.getElementById('divSection6').style.display='none';
        document.getElementById('divSection7').style.display='block';
    } else if (document.getElementById('divSection7').style.display=='block') {
        document.getElementById('divSection7').style.display='none';
        document.getElementById('divSection8').style.display='block';
    } else if (document.getElementById('divSection8').style.display=='block') {
        document.getElementById('divSection8').style.display='none';
        document.getElementById('divSection9').style.display='block';
    } else if (document.getElementById('divSection9').style.display=='block') {
        document.getElementById('divSection9').style.display='none';
        document.getElementById('divSection10').style.display='block';
    } else if (document.getElementById('divSection10').style.display=='block') {
        // go to quiz 1
        window.location.replace("/quizzes/1");
    }
}

function tutorialButtonPrevious() {
    if (document.getElementById('divSection1').style.display=='block') {
        document.getElementById('divSection1').style.display='none';
        document.getElementById('divSection0').style.display='block';
    } else if (document.getElementById('divSection2').style.display=='block') {
        document.getElementById('divSection2').style.display='none';
        document.getElementById('divSection1').style.display='block';
    } else if (document.getElementById('divSection3').style.display=='block') {
        document.getElementById('divSection3').style.display='none';
        document.getElementById('divSection2').style.display='block';
    } else if (document.getElementById('divSection4').style.display=='block') {
        document.getElementById('divSection4').style.display='none';
        document.getElementById('divSection3').style.display='block';
    } else if (document.getElementById('divSection5').style.display=='block') {
        document.getElementById('divSection5').style.display='none';
        document.getElementById('divSection4').style.display='block';
    } else if (document.getElementById('divSection6').style.display=='block') {
        document.getElementById('divSection6').style.display='none';
        document.getElementById('divSection5').style.display='block';
    } else if (document.getElementById('divSection7').style.display=='block') {
        document.getElementById('divSection7').style.display='none';
        document.getElementById('divSection6').style.display='block';
    } else if (document.getElementById('divSection8').style.display=='block') {
        document.getElementById('divSection8').style.display='none';
        document.getElementById('divSection7').style.display='block';
    } else if (document.getElementById('divSection9').style.display=='block') {
        document.getElementById('divSection9').style.display='none';
        document.getElementById('divSection8').style.display='block';
    } else if (document.getElementById('divSection10').style.display=='block') {
        document.getElementById('divSection10').style.display='none';
        document.getElementById('divSection9').style.display='block';
    }
}

function tutorial2ButtonContinue() {
    if (document.getElementById('divSection0').style.display=='block') {
        document.getElementById('divSection0').style.display='none';
        document.getElementById('divSection1').style.display='block';
    } else if (document.getElementById('divSection1').style.display=='block') {
        document.getElementById('divSection1').style.display='none';
        document.getElementById('divSection2').style.display='block';
    } else if (document.getElementById('divSection2').style.display=='block') {
        document.getElementById('divSection2').style.display='none';
        document.getElementById('divSection3').style.display='block';
    } else if (document.getElementById('divSection3').style.display=='block') {
        document.getElementById('divSection3').style.display='none';
        document.getElementById('divSection4').style.display='block';
    } else if (document.getElementById('divSection4').style.display=='block') {
        document.getElementById('divSection4').style.display='none';
        document.getElementById('divSection5').style.display='block';
    } else if (document.getElementById('divSection5').style.display=='block') {
        document.getElementById('divSection5').style.display='none';
        document.getElementById('divSection6').style.display='block';
    } else if (document.getElementById('divSection6').style.display=='block') {
        document.getElementById('divSection6').style.display='none';
        document.getElementById('divSection7').style.display='block';
    } else if (document.getElementById('divSection7').style.display=='block') {
        document.getElementById('divSection7').style.display='none';
        document.getElementById('divSection8').style.display='block';
    } else if (document.getElementById('divSection8').style.display=='block') {
        document.getElementById('divSection8').style.display='none';
        document.getElementById('divSection9').style.display='block';
    } else if (document.getElementById('divSection9').style.display=='block') {
        // go to quiz 2
        window.location.replace("/quizzes/2");
    }
}

function tutorial2ButtonPrevious() {
    if (document.getElementById('divSection1').style.display=='block') {
        document.getElementById('divSection1').style.display='none';
        document.getElementById('divSection0').style.display='block';
    } else if (document.getElementById('divSection2').style.display=='block') {
        document.getElementById('divSection2').style.display='none';
        document.getElementById('divSection1').style.display='block';
    } else if (document.getElementById('divSection3').style.display=='block') {
        document.getElementById('divSection3').style.display='none';
        document.getElementById('divSection2').style.display='block';
    } else if (document.getElementById('divSection4').style.display=='block') {
        document.getElementById('divSection4').style.display='none';
        document.getElementById('divSection3').style.display='block';
    } else if (document.getElementById('divSection5').style.display=='block') {
        document.getElementById('divSection5').style.display='none';
        document.getElementById('divSection4').style.display='block';
    } else if (document.getElementById('divSection6').style.display=='block') {
        document.getElementById('divSection6').style.display='none';
        document.getElementById('divSection5').style.display='block';
    } else if (document.getElementById('divSection7').style.display=='block') {
        document.getElementById('divSection7').style.display='none';
        document.getElementById('divSection6').style.display='block';
    } else if (document.getElementById('divSection8').style.display=='block') {
        document.getElementById('divSection8').style.display='none';
        document.getElementById('divSection7').style.display='block';
    } else if (document.getElementById('divSection9').style.display=='block') {
        document.getElementById('divSection9').style.display='none';
        document.getElementById('divSection8').style.display='block';
    } 
}

function tutorial3ButtonContinue() {
    if (document.getElementById('divSection0').style.display=='block') {
        document.getElementById('divSection0').style.display='none';
        document.getElementById('divSection1').style.display='block';
    } else if (document.getElementById('divSection1').style.display=='block') {
        document.getElementById('divSection1').style.display='none';
        document.getElementById('divSection2').style.display='block';
    } else if (document.getElementById('divSection2').style.display=='block') {
        document.getElementById('divSection2').style.display='none';
        document.getElementById('divSection3').style.display='block';
    } else if (document.getElementById('divSection3').style.display=='block') {
        document.getElementById('divSection3').style.display='none';
        document.getElementById('divSection4').style.display='block';
    } else if (document.getElementById('divSection4').style.display=='block') {
        document.getElementById('divSection4').style.display='none';
        document.getElementById('divSection5').style.display='block';
    } else if (document.getElementById('divSection5').style.display=='block') {
        document.getElementById('divSection5').style.display='none';
        document.getElementById('divSection6').style.display='block';
    } else if (document.getElementById('divSection6').style.display=='block') {
        document.getElementById('divSection6').style.display='none';
        document.getElementById('divSection7').style.display='block';
    } else if (document.getElementById('divSection7').style.display=='block') {
        document.getElementById('divSection7').style.display='none';
        document.getElementById('divSection8').style.display='block';
    } else if (document.getElementById('divSection8').style.display=='block') {
        document.getElementById('divSection8').style.display='none';
        document.getElementById('divSection9').style.display='block';
    } else if (document.getElementById('divSection9').style.display=='block') {
        // go to quiz 2
        window.location.replace("/games");
    }
}
function tutorial3ButtonPrevious() {
    if (document.getElementById('divSection1').style.display=='block') {
        document.getElementById('divSection1').style.display='none';
        document.getElementById('divSection0').style.display='block';
    } else if (document.getElementById('divSection2').style.display=='block') {
        document.getElementById('divSection2').style.display='none';
        document.getElementById('divSection1').style.display='block';
    } else if (document.getElementById('divSection3').style.display=='block') {
        document.getElementById('divSection3').style.display='none';
        document.getElementById('divSection2').style.display='block';
    } else if (document.getElementById('divSection4').style.display=='block') {
        document.getElementById('divSection4').style.display='none';
        document.getElementById('divSection3').style.display='block';
    } else if (document.getElementById('divSection5').style.display=='block') {
        document.getElementById('divSection5').style.display='none';
        document.getElementById('divSection4').style.display='block';
    } else if (document.getElementById('divSection6').style.display=='block') {
        document.getElementById('divSection6').style.display='none';
        document.getElementById('divSection5').style.display='block';
    } else if (document.getElementById('divSection7').style.display=='block') {
        document.getElementById('divSection7').style.display='none';
        document.getElementById('divSection6').style.display='block';
    } else if (document.getElementById('divSection8').style.display=='block') {
        document.getElementById('divSection8').style.display='none';
        document.getElementById('divSection7').style.display='block';
    } else if (document.getElementById('divSection9').style.display=='block') {
        document.getElementById('divSection9').style.display='none';
        document.getElementById('divSection8').style.display='block';
    } 
}

function gameButtonPrevious() {

}
function gameButtonContinue() {
    window.location.replace("/games/1");
}
function game1ButtonPrevious() {
    window.location.replace("/games");
}
function game1ButtonContinue() {
    window.location.replace("/games/2");
}
function game2ButtonPrevious() {
    window.location.replace("/games/1");
}
function game2ButtonContinue() {
    window.location.replace("/games/3");
}
function game3ButtonPrevious() {
    window.location.replace("/games/2");
}
function game3ButtonContinue() {
    window.location.replace("/quizzes/2");
}

function game2RestartGame() {
    window.location.replace("/games/2")
}

function submitButtonQuiz1() {
    //window.location.replace("/tutorials/tutorial2");
    
}

function submitButtonQuiz2() {
    
}

function submitButtonTutorial() {
    
}
function submitButtonQuestionnaire() {
    let alertMsg = "This concludes the Prisoner’s Dilemma paradox learning module.";
    alertMsg += "\n\nThank you for your valuable time to provide your input for this research study.";
    alertMsg += "\n\nIf you have any follow-up questions, please contact the research administrator hbala1@learn.athabascau.ca"; 
    
    alert(alertMsg);
}

function startQuiz1Coundown() {
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {
    
      // Get today's date and time
      let now = new Date().getTime();
    
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("quiz1Timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("quiz1Timer").innerHTML = "EXPIRED";
      }
    }, 1000);

}

