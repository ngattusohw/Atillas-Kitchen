function getThatDate(){

     var today = new Date();
     var dd = today.getDate();
     var mm = today.getMonth()+1; //January is 0!
     var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  } 

  if(mm<10) {
      mm='0'+mm
  } 

  today = mm+'/'+dd+'/'+yyyy;
  document.getElementById('ofTheDay').innerHTML="Food of the Day for " + today +": ";
};

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

