


function callBack(){


	var x = document.getElementById("form");

	if(x.elements[0].value == "" || x.elements[1].value == "" || x.elements[7].value== ""){
		alert("Please fill out all field before submitting!");
	}else{
		

		var r = /\w+@\w+\.(com|net|org)/;
		var str = x.elements[1].value;
		if(r.test(str)){
			var text;
			if(x.elements[6].checked){
				text = "You will be emailed at " + x.elements[1].value + " and you will receive newsletter emails! :)";
			}else{
				text = "You will be emailed at " + x.elements[1].value + " and you will NOT receive newsletter emails! :(";
			}
		    
			var name = x.elements[0].value;
		    document.getElementById("replacer").innerHTML = "<h2 class='csstext'>Thank you " + name + " for your feedback!</h2>";
		    document.getElementById("placer").innerHTML = text;
		}else{
			alert("Please enter a valid email address!");
		}

		
	}

    
}
