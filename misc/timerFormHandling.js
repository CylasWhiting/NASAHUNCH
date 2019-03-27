"use strict";
function formHandling(){
	
	var hours= document.forms["myForm"]["hours"].value;
	var minutes= document.forms["myForm"]["minutes"].value;
	var seconds= document.forms["myForm"]["seconds"].value;
	
	if (hours==""&&minutes==""&&seconds==""){
		document.getElementById('p').innerHTML = "Please enter a valid amount of time";
	}
	else{
		document.getElementById('p').innerHTML = " ";
	}
	
	
}




const setAlarm = (h,m,s) =>{ //save alarms in local storage
  activeAlarms++;
  localStorage.setItem('alarm '+activeAlarms,  JSON.stringify({
    hour: h,
    minute: m,
    second: s,
    startTime:  new Date().getTime()
  }));
};
const appendAlarm = (h,m,s) =>{ //append alarms to page body
  let container = document.createElement('div');
  container.setAttribute("id", "Div1");
  let hour = document.createTextNode('Hour: '+h);
  let minute = document.createTextNode('Minute: '+m);
  let second = document.createTextNode('Second: '+s);
  container.appendChild(hour);
  container.appendChild(minute);
  container.appendChild(second);
  alarms.appendChild(container);
}


let activeAlarms = 0;
window.onload = function(){ //when window loads check the local storage for saved alarms and recreate them
  activeAlarms = localStorage.length;
  
  for (let i=0; i<localStorage.length; i++){
    const alarm = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (alarm!=null){
    	var hour = alarm['hour'];
    	var minute = alarm['minute'];
    	var second = alarm['second'];
    	var startTime= alarm['startTime'];
    appendAlarm(alarm['hour'],alarm['minute'],alarm['second']);
    timer(hour,minute,second, startTime);
    }
  }
  
 
  
}

const alarms = document.querySelector('#alarms');
const addAlarm = document.querySelector("#add-alarm");
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
function addAlarmBut(){
	  setAlarm(hour.value, minute.value,second.value);
	  appendAlarm(hour.value, minute.value,second.value);
	};
	


	// Set the date we're counting down to
	

	// Update the count down every 1 second
	function timer(hour, minute,second,startTime){
		var now = new Date().getTime();
	var x = setInterval(function() {

	  // Get todays date and time
	  
	  var countDownDate=moment(startTime).add(hour, 'h').toDate();
	  countDownDate=moment(countDownDate).add(minute, 'm').toDate();
	  countDownDate=moment(countDownDate).add(second, 's').toDate();
	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;
	  
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // Display the result in the element with id="demo"
	  document.getElementById("Div1").innerHTML = days + "d " + hours + "h "
	  + minutes + "m " + seconds + "s ";

	  // If the count down is finished, write some text 
	  if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("Div1").innerHTML = "EXPIRED";
	  }
	}, 1000);
	}
