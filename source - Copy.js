//CURRENT 1/9/19

//MAKE THE MBAIN TWO SEPARATE COLS
//USE STYLES TO COMBINE
//LEFT FOR TIME, RIGHT FOR TASKS


//WHEN REDESIGNING, PUT IN TOP LEFT NEXT TO LOGO RADIO BUTTONS FOR FILTER
//THEN, USING SIMILAR CURRENT STYLE, 


/*
setInterval(updateTasks, 1000); //for reloading the items in the bar

function updateTasks(){ 

	//Date Variables
	var date = new Date();
	var monthCurrent = date.getMonth();
	var dayCurrent = date.getDay();
	var dateCurrent = date.getDate();
	var yearCurrent = date.getFullYear();
	var hourCurrent = date.getHours();
	var minuteCurrent = date.getMinutes();
	//Date Variables
	
	
	
	
	//Time Formatting
	
	minuteCurrent = (minuteCurrent % 5) >= 2.5 ? parseInt(minuteCurrent / 5) * 5 + 5 : parseInt(minuteCurrent / 5) * 5;
	
	
	
	
	
	if(hourCurrent > 12){
		hourCurrent -= 12;
	}
	if(minuteCurrent < 10){
		minuteCurrent = "0" + minuteCurrent;
	}
	//Time Formatting
	
	
	
	
	var currentTime = hourCurrent + ":" + minuteCurrent;

	document.getElementById("mBain").innerHTML = '<ul><li>' + currentTime 
	+ '</li><li>' + currentTime + '</li><li>' + currentTime + '</li><li>'
	+ currentTime + '</li><li>' + currentTime + '</li><li>' + currentTime 
	+ '</li><li>' + currentTime + '</li><li>' + currentTime + '<img src="images/mBain.png"></li><li>'
	+ currentTime + '</li><li>' + currentTime + '</li><li>' + currentTime
	+ '</li><li>' + currentTime + '</li><li>' + currentTime + '</li><li>'
	+ currentTime + '</li><li>' + currentTime + '</li><li>' + currentTime + '</li></ul>';

}



//<hr align="right" width="50%" color="red">



*/




/*
var dateOb;

function time(startTime){
	startTime=new Date(0);
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	dateOb = new Date();
	var currentTime=dateOb.getTime();
	
	var timeDiff=currentTime-startTime;
	var startDays = Math.floor(timeDiff/days);
	timeDiff=timeDiff%days;
	var startHours = Math.floor(timeDiff/hours);
	timeDiff=timeDiff%hours;
	var startMinutes = Math.floor(timeDiff/minutes);
	timeDiff=timeDiff%minutes;
	var startSeconds = Math.floor(timeDiff/seconds);
	$(".rounded").html("Days: "+startDays+ " Hours: "+ startHours+" Minutes: "+startMinutes+ " Seconds: "+ startSeconds);
}

document.getElementById('.role').addEventListener('click', function() {
  var formInput = document.getElementById("numberForm");
  var numberInputValue = formInput.number.value;
  alert(numberInputValue);
});

*/





//
// DO NOTNOTNOT FORGET TO FILTER THE ROWS WHOSE VALUES ARE "TRUE" IN THE JSON FILE
//
//
//





fetch('https://cors-anywhere.herokuapp.com/http://www.hunchdesign.com/uploads/2/2/0/9/22093000/plan.json')
.then(res=> res.json())
.then((data)=> {
	
	var text = "";//Used for element concat
	var data;//JSON
	var startDate = new Date(0);
	var endDate = new Date(0);
	
	var isRole = false;//compare whether the selected role is in array of rows in an activity
	
	setInterval(function() {
	
	
		var radios = document.getElementsByName('rank');//radio buttons containing roles
		
		for(var j = 0, length = radios.length; j < length; j++){
			if(radios[j].checked){
				var checkedRadio = radios[j].value;
			}
		}
		
		for(i in data.activities){ //FIRST CYCLE i

			for(var k = 0; k < data.activities[i].rows.length; k++){
					
					console.log("Checked radio: " + checkedRadio);
					console.log("Activity " + i + " is " + data.activities[i].name + ", and its row at position " + k + " is " + data.activities[i].rows[k]);
					
					if (checkedRadio == data.activities[i].rows[k] || data.activities[i].rows[k] == "true"){//if checked box "row" is equal to row as outlined in task or if "row" is equal to "true"

					 
						text += '<p style="color:#' + data.activities[i].customColor + '"> ' + data.activities[i].name + '</p>'; //inserts activity item to text
						dataStartDate = data.activities[i].start;
						dataEndDate = data.activities[i].end;
						
						startDate.setUTCSeconds(dataStartDate);
						endDate.setUTCSeconds(dataEndDate);
							
						$("#mBainTask").html(text);//inserts text into the HTML
				}
			}
		}
		
	}, 6000);
		
		
		//startTime=data.activities[i].start;
		//time(startTime);
	
		
}).catch(err => console.error(err));
//setInterval(time, 1000); //for reloading the items in the bar

