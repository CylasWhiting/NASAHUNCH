function time(startTime){
	var seconds= 1000
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	var dateOb= new Date();
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


function json(){
	var data;
	fetch('https://cors-anywhere.herokuapp.com/http://www.hunchdesign.com/uploads/2/2/0/9/22093000/plan.json')
	.then(res=> res.json())
	.then((data)=> {
		var text = data.name;
		
		
		
		
		startTime=data.activities[0].start;


		//for (i in data.activities){
			
		
		
		time(startTime);
		

		//}


	})
	}
json();
setInterval(json, 1000);



	//		for (r in data.activities[i].rows){
	//			text=text+" " +data.activities[i].rows[r];
		
	//}	