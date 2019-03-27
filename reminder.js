
	
	 
	 
	var readStore = JSON.parse(localStorage.getItem('store'));
	 if (readStore===null){
		 var store = {
			 name:"",
			 description:"",
			 expireTime: 0,
			 expired:false,
			 defaultOb:true
		 };
		
		
	 localStorage.setItem('store', JSON.stringify(store));
	 }
	   readStore = JSON.parse(localStorage.getItem('store'));
		 
			
	function displayTimeLeft(){	 
	 readStore = JSON.parse(localStorage.getItem('store'));
		 var currentTime = new Date();
		 currentTime = Date.parse(currentTime);
		 console.log(currentTime);
		 
		 var timeDiff = readStore.expireTime - currentTime;
		 if (!readStore.expired&&!readStore.defaultOb){
		 if (timeDiff<=0&&!readStore.defaultOb){
			var css = '.timeLeft:hover{ background-color: yellow }';
			var style = document.createElement('style');

			if (style.styleSheet) {
			style.styleSheet.cssText = css;
			} else {
	style.appendChild(document.createTextNode(css));
			
	
}	

document.getElementsByTagName('head')[0].appendChild(style);

			 $(".timeLeft").empty();
			 $(".timeLeft").html("Reminder Expired: " + readStore.name); 
			 readStore.expired = true;
			  localStorage.clear();
			  localStorage.setItem('store', JSON.stringify(readStore));
			}
			
		 
		 
		 
		 
		 else {
	
		 console.log(timeDiff);
		 var seconds= 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	
	
	var startDays = Math.floor(timeDiff/days);
	timeDiff=timeDiff%days;
	var startHours = Math.floor(timeDiff/hours);
	timeDiff=timeDiff%hours;
	var startMinutes = Math.floor(timeDiff/minutes);
	timeDiff=timeDiff%minutes;
	var startSeconds = Math.floor(timeDiff/seconds);
	
	var buttonExists = document.getElementById('delete');
	buttonExists.style.display="block";
	
	$(".timeLeft").html('\n'+"<p>"+"Name: " + readStore.name+"</p>" +"<p>"+"Description: "+ readStore.description+ "<\p>"+'\n'+"<p>"+" Days: "+startDays+ " Hours: "+ startHours+" Minutes: "+startMinutes+ " Seconds: "+ startSeconds+"</p>");
		 }
		 }
	
	}
	
	

	
	 function deleteReminder() {
		 localStorage.clear();
		 $(".timeLeft").empty();
		 var buttonExists = document.getElementById('delete');
		 buttonExists.style.display="none";
	 }
	 
	 function saveReminder(){
			var name = document.reminder.remindername.value;
			var description = document.reminder.description.value;
			
			var expireTime = document.reminder.end_date_time.value;
			expireTime=expireTime+':00';
			expireTime = Date.parse(expireTime);
			console.log(expireTime);
			
			
			 var store = {
			 name:"",
			 description:"",
			 expireTime: 0,
			 expired: false,
			 defaultOb:false
		 };
				
			store.name = name;
			
			
		
			store.description = description;
			
			store.expireTime = expireTime;
			
			
			localStorage.clear();
			localStorage.setItem('store', JSON.stringify(store));
			
			
	 }
	 
	 $(document).on('click','.timeLeft', function(){
		
		var store = JSON.parse(localStorage.getItem('store'))
		var date = new Date(store.expireTime);
		if (store.expired){
			window.alert(store.name + "\n" + store.description+"\n"+date);
		}
	 });
	 
	 setInterval(displayTimeLeft,1000);

