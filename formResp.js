


function callBack(){



	var x = document.getElementById("form");
    var text = "";
    var i;
    var name = x.elements[0].value;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }

    document.getElementById("replacer").innerHTML = "<h2 class='csstext'>Thank you " + name + " for your feedback!</h2>";
    document.getElementById("placer").innerHTML = text;
}
