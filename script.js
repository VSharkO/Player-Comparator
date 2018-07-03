var w = 400,
	h = 400;

//default ID-s
	firstPlayerID=1;
	secondPlayerID=1;
//default players for first time tun
	secondPlayer= getByName(data[0].name);
	firstPlayer= getByName(data[1].name);
//flags for dropdown menus
	var isFilledDropdown1=false;
	var isFilledDropdown2=false;
//call function set data	
	d = setData(firstPlayer,secondPlayer)
	//call function to set configuration for radarchart
		var mycfg = setConfig(); 
		  
		  //call function to draw the Radar chart
		  //expect that data is in %'s
		  RadarChart.draw("#chart", d, mycfg);

var colorscale = d3.scale.category10();

window.onLoad = function() {
	for (var i=0; i<20; i++) {
		var name = "Option "+i;
		var sel = document.getElementById("list");
		sel.options[sel.options.length] = new Option(name,i);
	}
}

	function fillDropdowns(num) {
		
		if(isFilledDropdown1 == false && num==1 || isFilledDropdown2==false && num==2){
			for(i=0;i<data.length;i++){
				var btn = document.createElement("a");
				btn.id = i;
				var name = document.createTextNode(data[i].name);
				btn.appendChild(name);
				var dropDown = document.getElementById("myDropdown"+num);
				dropDown.appendChild(btn);
				if(num==1){
				btn.href = "javascript:setDataPlayerOne("+btn.id+")";
				firstPlayerID = btn.id;
				}
				if(num==2){
				btn.href = "javascript:setDataPlayerTwo("+btn.id+")";
				secondPlayerID= btn.id;
				}
				}
				if(num == 1)
				isFilledDropdown1=true;
				else
				isFilledDropdown2=true;
		}
		document.getElementById("myDropdown"+num).classList.toggle("show");
	}
	
	function filterFunction(num) {
		var input, filter, ul, li, a, i;
		input = document.getElementById("myInput"+num);
		filter = input.value.toUpperCase();
		div = document.getElementById("myDropdown"+num);
		a = div.getElementsByTagName("a");
		for (i = 0; i < a.length; i++) {
			if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
				a[i].style.display = "";
			} else {
				a[i].style.display = "none";
			}
		}
	}

	function setData(firstPlayer,secondPlayer){
		var d = [
			[
			  {axis:"crossing",value:firstPlayer.crossing/100},
			  {axis:"finishing",value:firstPlayer.finishing/100},
			  {axis:"heading_accuracy",value:firstPlayer.heading_accuracy/100},
			  {axis:"short_passing",value:firstPlayer.short_passing/100},
			  {axis:"dribbling",value:firstPlayer.dribbling/100},
			  {axis:"curve", value:firstPlayer.curve/100},
			  {axis:"free_kick_accuracy",value:firstPlayer.free_kick_accuracy/100},
			  {axis:"long_passing",value:firstPlayer.long_passing/100},
			  {axis:"ball_control",value:firstPlayer.ball_control/100},
			  {axis:"acceleration",value:firstPlayer.acceleration/100},
			  {axis:"sprint_speed",value:firstPlayer.sprint_speed/100},
			  {axis:"agility", value:firstPlayer.agility/100},
			  {axis:"balance",value:firstPlayer.balance/100},
			  {axis:"shot_power",value:firstPlayer.shot_power/100},
			  {axis:"jumping",value:firstPlayer.jumping/100},
			  {axis:"stamina",value:firstPlayer.stamina/100},
			  {axis:"strength",value:firstPlayer.strength/100},
			  {axis:"long_shots",value:firstPlayer.long_shots/100},
			  {axis:"aggression",value:firstPlayer.aggression/100},
			  {axis:"interceptions",value:firstPlayer.interceptions/100},
			  {axis:"positioning",value:firstPlayer.positioning/100},
			  {axis:"vision",value:firstPlayer.vision/100},
			  {axis:"penalties",value:firstPlayer.penalties/100}
			],
			[
			  {axis:"crossing",value:secondPlayer.crossing/100},
			  {axis:"finishing",value:secondPlayer.finishing/100},
			  {axis:"heading_accuracy",value:secondPlayer.heading_accuracy/100},
			  {axis:"short_passing",value:secondPlayer.short_passing/100},
			  {axis:"dribbling",value:secondPlayer.dribbling/100},
			  {axis:"curve", value:secondPlayer.curve/100},
			  {axis:"free_kick_accuracy",value:secondPlayer.free_kick_accuracy/100},
			  {axis:"long_passing",value:secondPlayer.long_passing/100},
			  {axis:"ball_control",value:secondPlayer.ball_control/100},
			  {axis:"acceleration",value:secondPlayer.acceleration/100},
			  {axis:"sprint_speed",value:secondPlayer.sprint_speed/100},
			  {axis:"agility", value:secondPlayer.agility/100},
			  {axis:"balance",value:secondPlayer.balance/100},
			  {axis:"shot_power",value:secondPlayer.shot_power/100},
			  {axis:"jumping",value:secondPlayer.jumping/100},
			  {axis:"stamina",value:secondPlayer.stamina/100},
			  {axis:"strength",value:secondPlayer.strength/100},
			  {axis:"long_shots",value:secondPlayer.long_shots/100},
			  {axis:"aggression",value:secondPlayer.aggression/100},
			  {axis:"interceptions",value:secondPlayer.interceptions/100},
			  {axis:"positioning",value:secondPlayer.positioning/100},
			  {axis:"vision",value:secondPlayer.vision/100},
			  {axis:"penalties",value:secondPlayer.penalties/100}
			]
		  ];
		  return d;

	}

	function setDataPlayerOne(firstPlayerID){
		firstPlayer = getByName(data[firstPlayerID].name);
		var LegendOptions = [firstPlayer.name , secondPlayer.name];

		d = setData(firstPlayer,secondPlayer)

		var mycfg = setConfig(); 
		  
		  //Call function to draw the Radar chart
		  //Will expect that data is in %'s
		  RadarChart.draw("#chart", d, mycfg);
		  
		  ////////////////////////////////////////////
		  /////////// Initiate legend ////////////////
		  ////////////////////////////////////////////
		  addLegend(LegendOptions);

		  setInfo(firstPlayer,secondPlayer);

		  setPictures(firstPlayer,secondPlayer);
	}

	function setDataPlayerTwo(secondPlayerID){
		secondPlayer= getByName(data[secondPlayerID].name);
		var LegendOptions = [firstPlayer.name , secondPlayer.name];

		
		d = setData(firstPlayer,secondPlayer)

		 
		 var mycfg = setConfig(); 
		  
		  //Call function to draw the Radar chart
		  //Will expect that data is in %'s
		  RadarChart.draw("#chart", d, mycfg);
		  
		  ////////////////////////////////////////////
		  /////////// Initiate legend ////////////////
		  ////////////////////////////////////////////
		  addLegend(LegendOptions);

		  setInfo(firstPlayer,secondPlayer);

		  setPictures(firstPlayer,secondPlayer);
	}

function setConfig(){
	var mycfg = {
		w: w,
		h: h,
		maxValue: 0.6,
		levels: 6,
		ExtraWidthX: 300
	}

	return mycfg;
}

function addLegend(LegendOptions){
	var svg = d3.select('#body')
		.selectAll('svg')
		.append('svg')
		.attr("width", w+300)
		.attr("height", h+100)
	
	//Create the title for the legend
	var text = svg.append("text")
		.attr("class", "title")
		.attr('transform', 'translate(160,0)') 
		.attr("x", w - 70)
		.attr("y", 10)
		.attr("font-size", "12px")
		.attr("fill", "#404040")
		.text("Player skill rate in % :");
			
	//Initiate Legend	
	var legend = svg.append("g")
		.attr("class", "legend")
		.attr("height", 100)
		.attr("width", 200)
		.attr('transform', 'translate(185,20)') 
		;
	//Create colour squares
	legend.selectAll('rect')
		.data(LegendOptions)
		.enter()
	    .append("rect")
		.attr("x", w - 65)
		.attr("y", function(d, i){ return i * 20;})
		.attr("width", 10)
		.attr("height", 10)
		.style("fill", function(d, i){ return colorscale(i);})
		;
	//Create text next to squares
	legend.selectAll('text')
		.data(LegendOptions)
		.enter()
		.append("text")
		.attr("x", w - 52)
		.attr("y", function(d, i){ return i * 20 + 9;})
		.attr("font-size", "11px")
		.attr("fill", "#737373")
		.text(function(d) { return d; })
		;	
	}


function getByName(name) {
	var found = null;
	
    for (var i = 0; i < data.length; i++) {
        var element = data[i];

        if (element.name == name) {
           found = element;
       } 
    }

    return found;
}

function setInfo(firstPlayer,secondPlayer){
	document.getElementById("firstPlayerInfoColumn").style="background: rgb(30, 144, 255, 0.7); font-weight: bold;";
	document.getElementById("secondPlayerInfoColumn").style="background: rgb(255, 165, 0, 0.7); font-weight: bold;";
	document.getElementsByClassName("p").style="opacity: 1";
	document.getElementById("playerOneName").innerHTML = firstPlayer.name;
	document.getElementById("playerTwoName").innerHTML = secondPlayer.name;
	document.getElementById("playerOneNationality").innerHTML = "Nationality: "+ firstPlayer.nationality;
	document.getElementById("playerTwoNationality").innerHTML = "Nationality: "+ secondPlayer.nationality;
	document.getElementById("playerOneClub").innerHTML = "Club: "+ firstPlayer.club;
	document.getElementById("playerTwoClub").innerHTML = "Club: "+ secondPlayer.club;
	document.getElementById("playerOneValue").innerHTML = "Value: "+ valueCalculator(firstPlayer.eur_value) +" €";
	document.getElementById("playerTwoValue").innerHTML = "Value: "+ valueCalculator(secondPlayer.eur_value) +" €";
	document.getElementById("playerOneAge").innerHTML = "Age: "+ firstPlayer.age;
	document.getElementById("playerTwoAge").innerHTML = "Age: "+ secondPlayer.age;
}

function valueCalculator(value){
	if(value>1000000){
		value = value/1000000
	}
	return value+" mil"
}

function setPictures(firstPlayer,secondPlayer){
	var picture1 = document.getElementById("picturePlayer1")
	var picture2 = document.getElementById("picturePlayer2")

	if(firstPlayer.preferred_foot == "Right" && firstPlayer.heading_accuracy > 75){
		document.getElementById("picturePlayer1").src = "Pictures/player1HeadRight.png"
	}else if(firstPlayer.preferred_foot == "Left" && firstPlayer.heading_accuracy > 75){
		document.getElementById("picturePlayer1").src = "Pictures/player1HeadLeft.png"
	}else if(firstPlayer.preferred_foot == "Left" && firstPlayer.heading_accuracy <= 75){
		document.getElementById("picturePlayer1").src = "Pictures/player1Left.png"
	}else if(firstPlayer.preferred_foot == "Right" && firstPlayer.heading_accuracy <= 75){
		document.getElementById("picturePlayer1").src = "Pictures/player1Right.png"
	}else if(firstPlayer.preferred_foot == "Left" && firstPlayer.heading_accuracy > 75){
		document.getElementById("picturePlayer1").src = "Pictures/player1HeadLeft.png"
	}if(firstPlayer.prefers_gk == true){
		document.getElementById("picturePlayer1").src = "Pictures/player1GK.png"
	}

	if(secondPlayer.preferred_foot == "Right" && secondPlayer.heading_accuracy > 75){
		document.getElementById("picturePlayer2").src = "Pictures/player2HeadRight.png"
	}else if(secondPlayer.preferred_foot == "Left" && secondPlayer.heading_accuracy > 75){
		document.getElementById("picturePlayer2").src = "Pictures/player2HeadLeft.png"
	}else if(secondPlayer.preferred_foot == "Left" && secondPlayer.heading_accuracy <= 75){
		document.getElementById("picturePlayer2").src = "Pictures/player2Left.png"
	}else if(secondPlayer.preferred_foot == "Right" && secondPlayer.heading_accuracy <= 75){
		document.getElementById("picturePlayer2").src = "Pictures/player2Right.png"
	}else if(secondPlayer.preferred_foot == "Left" && secondPlayer.heading_accuracy > 75){
		document.getElementById("picturePlayer2").src = "Pictures/player2HeadLeft.png"
	}if(secondPlayer.prefers_gk == true){
		document.getElementById("picturePlayer2").src = "Pictures/player2GK.png"
	}
}