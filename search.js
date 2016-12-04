



window.onload = function () {
    document.getElementById('searcher').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      console.log("Enter Pressed");
      location.href = document.getElementById('searcher').value + ".html";
    }
  }
};

