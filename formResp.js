


function callBack(){


	var x = document.getElementById("form");
    var name = x.elements[0].value;

    //testing regex.. will implement later
	// var email = new RegExp("/\w@\w.com | .net | .org");
	// var str = x.elements[1].value;
	// console.log(email.test(str));
	var text;

	console.log(x.elements[6].checked);

	if(x.elements[6].checked){
		text = "You will be emailed at " + x.elements[1].value + " and you will recieve newsletter emails! :)";
	}else{
		text = "You will be emailed at " + x.elements[1].value + " and you will NOT recieve newsletter emails! :(";
	}
    

    document.getElementById("replacer").innerHTML = "<h2 class='csstext'>Thank you " + name + " for your feedback!</h2>";
    document.getElementById("placer").innerHTML = text;
}
