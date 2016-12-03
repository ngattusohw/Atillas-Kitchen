


function callBack(){



	var x = document.getElementById("form");
    var name = x.elements[0].value;
    var text = "You will be emailed at " + x.elements[1].value + " and you will recieve newsletter emails!";

    document.getElementById("replacer").innerHTML = "<h2 class='csstext'>Thank you " + name + " for your feedback!</h2>";
    document.getElementById("placer").innerHTML = text;
}
