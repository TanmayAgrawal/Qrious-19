$(document).ready(function () {
    $(".question").addClass("animated fadeInRightBig");
    $(".options").addClass("animated fadeInLeftBig");
    $(".lowbtn").addClass("animated fadeInLeftBig");
   $(function(){

       $(".options").on("click", function(){
         $(".options").removeClass("selected");
         $(this).addClass("selected");
       });

      });
   });
    var counter = question.question_number;
    document.getElementById('ques').innerHTML = question.question;
    document.getElementById('option1').innerHTML = question.option1;
    document.getElementById('option2').innerHTML = question.option2;
    document.getElementById('option3').innerHTML = question.option3;
    document.getElementById('option4').innerHTML = question.option4;

  function loadQuestion(){
       $(".options").removeClass("selected");
       counter = question.question_number;
       document.getElementById('ques').innerHTML = questions.question;
       document.getElementById('option1').innerHTML = question.option1;
       document.getElementById('option2').innerHTML = question.option2;
       document.getElementById('option3').innerHTML = question.option3;
       document.getElementById('option4').innerHTML = question.option4;
   }

  function SubmitOption() {
      $(".options").removeClass("selected");
      document.getElementById("next").click();
      var ans = document.getElementsByClassName("selected")[0].innerHTML;
      if(!ans) {
        document.getElementsByClassName('alert')[0].style.animation = 'showAlert 2s ease-in-out';
      }
      var data = {
        "question": counter,
        "answer": ans,
      };
      var req = new XMLHttpRequest();
      req.open("GET", '/questions', true);
      req.setRequestHeader("Content-Type", "application/json");
      req.onreadystatechange = function() {
        if(this.onreadystatechange == 4 && this.status ==200) {
          if(counter%5 === 0) {
            console.log('Next reality!');
            var url = window.location.href;
            // window.location.href = 
          }
          question = JSON.parse(this.responseText.question);
          score = JSON.parse(this.responseText.score);
          // append in html
          loadQuestion();
        } 
      }
      req.send(JSON.stringify(data));
  }
   

   {
    function openNav()
    {
       document.getElementById('nav').style.height = "100%";

    }
    function closeNav()
    {
       document.getElementById('nav').style.height = "0%";

    }

    function toggleSidebar(ref) {
   ref.classList.toggle('active');
   document.getElementById('sidebar').classList.toggle('active');

         }

 function toggleFullScreen() {
   if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
     if (document.documentElement.requestFullScreen) {
       document.documentElement.requestFullScreen();
     } else if (document.documentElement.mozRequestFullScreen) {
       document.documentElement.mozRequestFullScreen();
     } else if (document.documentElement.webkitRequestFullScreen) {
       document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
     }
   } else {
     if (document.cancelFullScreen) {
       document.cancelFullScreen();
     } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
     } else if (document.webkitCancelFullScreen) {
       document.webkitCancelFullScreen();
     }
   }
 }

 window.addEventListener('resize', function(){
  if(screen.width === window.innerWidth){
     $('.final').toggleClass('active');
     $('.close').toggleClass('active');
}
});


}
