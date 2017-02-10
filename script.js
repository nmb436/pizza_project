function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};	



// With both the meat and veggie functions each item in the array will be
// 1 dollar but the first is going to be free so we can count the total
// of items in their array and subtract 1 to get the total item cost
//
// Now we can add the item cost to our running total to get the new
// running total and then pass this new running total to the next function
// Just keep up this process until we've added all items to the running total
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCheese (runningTotal,text1);
};


function getCheese(runningTotal,text1){
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName ("cheese");
	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
			selectedCheese = (cheeseArray[c].value);
			console.log("selected cheese item: ("+cheeseArray[c].value+")");
			text1 = text1+cheeseArray[c].value+"<br>";
		}
	}
	
	var cheeseCount = selectedCheese.length;
	if (selectedCheese === "Extra Cheese"){
				cheeseTotal= 3;
	}  else {
		cheeseTotal=0;
		} 		
	
	runningTotal = (runningTotal + cheeseTotal);
	console.log("total selected cheese items: "+cheeseCount);
	console.log(cheeseCount+" cheese + 3 extra cheese = "+"$"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getCrust (runningTotal,text1); 
	};

function getCrust(runningTotal,text1){
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName ("crust");
	for (var r = 0; r < crustArray.length; r++) {
		if (crustArray[r].checked) {
			selectedCrust = (crustArray[r].value);
			console.log("selected crust item: ("+crustArray[r].value+")");
			text1 = text1+crustArray[r].value+"<br>";
		}
	}
	
	var crustCount = selectedCrust.length;
	if (selectedCrust === "Cheese Stuffed"){
				crustTotal= 3;
	}  else {
		crustTotal=0;
		} 		
	
	runningTotal = (runningTotal + crustTotal);
	console.log("total selected crust items: "+crustCount);
	console.log(crustCount+" crust + 3 Cheese Stuffed = "+"$"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; 
    getSauce (runningTotal,text1);
	};

function getSauce(runningTotal,text1){
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName ("sauce");
	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			selectedSauce = (sauceArray[s].value);
			console.log("selected sauce item: ("+sauceArray[s].value+")");
			text1 = text1+sauceArray[s].value+"<br>";
		}
	}
	
	var sauceCount = selectedSauce.length;
	if (selectedSauce === "Marinara"){
				sauceTotal= 0;
	}  else {
		sauceTotal=0;
		} 		
	
	runningTotal = (runningTotal + sauceTotal);
	console.log("total selected sauce items: "+sauceCount);
	console.log(sauceCount+" sauce = "+"$"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getVeggies (runningTotal, text1);
	};

	function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var v = 0; v < veggiesArray.length; v++) {
		if (veggiesArray[v].checked) {
			selectedVeggies.push(veggiesArray[v].value);
			console.log("selected veggies item: ("+veggiesArray[v].value+")");
			text1 = text1+veggiesArray[v].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	console.log("total selected veggies items: "+veggiesCount);
	console.log(veggiesCount+" veggies - 1 free veggies = "+"$"+veggiesTotal+".00");
	console.log("veggies text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
	
		
	

