
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/getInfo", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        var json = JSON.parse(xhttp.responseText);
        answered_questions = json.answered_questions;
      }
    };
  
    xhttp.send();
  
    if(answered_questions === 20) {
      // redirect to leaderboard
    } else if(answered_questions%5 === 0 && answered_questions !== 20) {
      // redirect to roulette
    } else {
      var ques = new XMLHttpRequest();
      ques.open("GET", "/questions", true);
      ques.setRequestHeader("Content-Type", "application/json");
      ques.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          question = this.responseText;
        }
      };
      ques.send();
      // redirect to respective reality using answered_question%5
    }

    if (reality == 0) {
      window.location.href = ("url");
    }
    else if (reality == 1) {
      window.location.href = ("url");
    }
    else if (reality == 2) {
      window.location.href = ("url");
    }
    else if (reality == 3) {
      window.location.href = ("url");
    }
    else if (reality == 4) {
      window.location.href = ("url");
    }
    
  