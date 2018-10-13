alert("connected");


function is_it(){
	//function to activate after color click
	if( this.style["background-color"] == sp_color){
		document.getElementById("result").innerHTML = "Correct!";
		document.getElementById("reset").innerHTML = "Play Again!";
		
		//location.reload();
	}
	else{
		document.getElementById("result").innerHTML = "Incorrect.";
		this.style["background-color"] = "#232323";
		
	}
}

reset_button_element = document.getElementById("reset").addEventListener("click", main);

easyBtn = document.getElementById("ebtn");
hardBtn = document.getElementById("hbtn");
hardBtn.classList.add("selected");
easyBtn.addEventListener("click", function(){
	this.classList.toggle("selected");
	hardBtn.classList.toggle("selected");
});

hardBtn.addEventListener("click", function(){
	this.classList.toggle("selected");
	easyBtn.classList.toggle("selected");
});

function main(){
		document.getElementById("result").innerHTML = " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;";
		document.getElementById("reset").innerHTML = "new color";

	var colors = [
		"rgb(255, 0, 0)", 
		"rgb(255, 255, 0)",
		"rgb(0, 255, 0)",
		"rgb(0, 255, 255)",
		"rgb(0, 0, 255)",
		"rgb(255, 0, 255)"

	]; //list of colors to pick for squares



	square_lis = document.querySelectorAll(".square");

	for( var i = 0; i < square_lis.length; i++){
		//assign random colors to every square
		colors[i] = "rgb(" + Math.floor(Math.random()*255).toString()
						   + ", " + Math.floor(Math.random()*255).toString()
						   + ", " + Math.floor(Math.random()*255).toString()
						   +")";
	}

	//the process of randomly selecting a speacial color
	sp_color = colors[Math.floor(colors.length*Math.random())]
	sp_color_element = document.getElementById("c0l0r");
	sp_color_element.innerHTML = sp_color.toUpperCase();




	for( var i = 0; i < square_lis.length; i++){
		// set random background for squares and add eventlisteners
		square_lis[i].style["background-color"] = colors[i];
		square_lis[i].addEventListener("click", is_it);
	}

}
main();