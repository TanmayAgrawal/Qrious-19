 var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/getInfo", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        var json = JSON.parse(this.responseText);
        reality = json.currentreality;

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