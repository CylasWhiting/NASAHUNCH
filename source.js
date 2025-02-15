


//
// DO NOTNOTNOT FORGET TO FILTER THE ROWS WHOSE VALUES ARE "TRUE" IN THE JSON FILE
//
// CYLAS - PLEASE START DOCUMENTING 
//


function time(){
		 var currentTime = new Date();
		 currentTime = Date.parse(currentTime);
		 var end = document.getElementsByClassName("timeP");
		 var pArr = [];
					for(var k = 0; k < end.length; k++){
					pArr.push(parseInt($("div#"+ k + " p").attr("value")));
					}
		 
		 if (pArr.length>0){
				for (var k in pArr){
					if (currentTime==pArr[k]){
						$("#"+k.toString()).append("<hr class = 'hrLine'>");
						$("#"+(k-1).toString()).remove(".hrLine");
						
					}
				}
		 }
	 }

var roundedSeen = document.getElementById('rounded');
roundedSeen.style.display="none";

//fetch('https://cors-anywhere.herokuapp.com/http://www.hunchdesign.com/uploads/2/2/0/9/22093000/plan.json')
fetch('https://raw.githubusercontent.com/CylasWhiting/NASAHUNCH/refs/heads/master/plan.json')
.then(res=> res.json())
.then((data)=> {
	
	var text = "";//Used for element concat
	var time = "";
	
	var data;//JSON
	
	
	var isRole = false;//compare whether the selected role is in array of rows in an activity
	window.data = data;
	
	var endTime = 0;
	for (i in data.activities) {
		if (data.activities[i].end>endTime){
			endTime=data.activities[i].end;
		}
	}
	window.endTime = endTime;
	}).catch(err => console.error(err));
	
	
	
	
	
	function invert(color, bw) {
        if (bw === void 0) { bw = false; }
        color = toRgbArray(color);
        if (bw)
            return invertToBW(color, bw);
        return '#' + color.map(function (c) { return padz((255 - c).toString(16)); }).join('');
    }
	
	
	function changeTasks(checkedRadio){
		$("#mBainTime").empty();
		document.getElementById("mBainTask").innerHTML = "";	
		text = "";
		time = "";
		
		
		
		var chartTime = data.start;
		var end = (endTime-data.start)/1800000;
		var timeDiv = "";

			for(var k = 0; k < end; k++){
					
					//console.log("Checked radio: " + checkedRadio);
					//console.log("Activity " + i + " is " + data.activities[i].name + ", and its row at position " + k + " is " + data.activities[i].rows[k]);
					
					//if checked box "row" is equal to row as outlined in task or if "row" is equal to "true"
						
						
						
						currentDate = new Date();
						dataCurrentDate = Date.parse(currentDate);
						
						
						
						
						var startDate = new Date(chartTime);
						
						
						startDate = startDate.toString();//make a string for the date to edit and format
						
						
						timeDiv = '<div class = "displayTimes" id = "'+k+'"></div>';
						
						time='<p style = "z-index:1;" style = "position:relative;" class= "timeP" value = '+chartTime+' style="background-color:#'  + '"> ' + startDate.substr(3,18)+'</p>';
						
						
						
						
						
						
						
						
						$("#mBainTime").append(timeDiv);//insert time into HTML
						
						$("#"+ k.toString()).append(time);
						chartTime+=1800000;
			}
				
				var pArr = [];
					for(var k = 0; k < end; k++){
					pArr.push(parseInt($("div#"+ k + " p").attr("value")));
					}
					
					var actArr = [];
					for(i in data.activities){
					actArr.push(data.activities[k].start);
					}
				
				for (i in data.activities){
				applies = false;
						for (x in data.activities[i].rows){
							if (data.activities[i].rows[x]=== checkedRadio){
								applies = true;
							}
						}
				
				
					for(var k = 0; k < end; k++){
						if (applies){
					//var x =parseInt($("div#"+ k + " p").attr("value"));
					//var y =data.activities[i].start;
					if ((pArr[k]<=data.activities[i].start) && (data.activities[i].start<=pArr[k]+1800000)){
						
						if (!(data.activities[i].customColor=="ffffff")){
					var invertedColor = invert('#'+ data.activities[i].customColor);
						
						text = '<p style = "position:relative;background-color:#'+data.activities[i].customColor+';color:'+invertedColor+'; " style = "z-index:1;"  color = "'+invertedColor+'" value = '+k+' class = "task"  id = "task'+i+'" id = "'+k+'"> '  + data.activities[i].name + '</p>'; //inserts activity item to text
						}
						else {
							text = '<p style = "position:relative; style = "z-index:1;"  color = "'+invertedColor+'" value = '+k+' class = "task"  id = "task'+i+'" id = "'+k+'"> '  + data.activities[i].name + '</p>'; //inserts activity item to text
						}
					$("#"+k.toString()).append(text);//inserts text into the HTML
					
					break;
					}
						}
					
					
					
					//var coord = $("div.mBainTime p:nth-of-type(2)").position();
					//var z = 0;
					
					
					//placeElement(coord.left,coord.top, z.toString());
					//document.getElementById(z.toString()).style.transform = "translate("+ (-coord.left) + "," + (-coord.top)+ ")";
				}
				if (i>=1){
						 setTimeout(function(){ console.log(new Date()); },1);
					}
				}
				
				
					for (var k in pArr) {
						var ps = $("#"+k+" .task");
						for (var arrayLength = 0; arrayLength<ps.length;arrayLength++){
							for (var l in pArr){
									
								var heightEl=0;
								var height=40 + (54*heightEl);
					if ((pArr[l]<=data.activities[(ps[arrayLength].id).substring(4)].end) && (data.activities[(ps[arrayLength].id).substring(4)].end<pArr[l]+1800000)){
						heightEl= Math.floor((data.activities[parseInt((ps[arrayLength].id).substring(4))].end-data.activities[parseInt((ps[arrayLength].id).substring(4))].start)/1800000);
						 height=40 + (54*heightEl);
					}
					
					var eh =false;
					$('#task'+(ps[arrayLength].id).substring(4)).css("height",height+"px");
				var elem=document.getElementById(ps[arrayLength].id);
						
					for (var x = 0; x<heightEl;x++){
						
						var moveDownwards=parseInt(k)+(x+1);
						//if(!(Boolean($("#"+k+ " .filler").length))&&((Boolean($("#"+k+ " .task").length)))){
					//$("<p class = 'filler'>Hello</p>").insertAfter("#"+moveDownwards+" .timeP");
					//	}
					
						var elementsInDiv =$("#"+moveDownwards+ " p");

						var elem=document.getElementById(ps[arrayLength].id);
						
							var whichElement = whichChild(elem);
						if (!(elementsInDiv[whichElement]==undefined)&&(elementsInDiv[whichElement].className=="task")){
							var idOfElem = "#"+elementsInDiv[whichElement].id;
							
							$("<p class = 'filler'>Hello</p>").insertBefore($(idOfElem));
							
						}
						eh = true;
					}
				if (eh){
					break;
				}
				
				
					}break;}}
				
				
				
				
				
				
				
				
		}
		
	
	 function padz(str, len) {
        if (len === void 0) { len = 2; }
        return (new Array(len).join('0') + str).slice(-len);
    }
	 var DEFAULT_THRESHOLD = Math.sqrt(1.05 * 0.05) - 0.05;
    var RE_HEX = /^(?:[0-9a-f]{3}){1,2}$/i;
    var DEFAULT_BW = {
        black: '#000000',
        white: '#ffffff',
        threshold: DEFAULT_THRESHOLD
    };
		function toRgbArray(c) {
        if (!c)
            throw new Error('Invalid color value');
        if (Array.isArray(c))
            return c;
        return typeof c === 'string' ? hexToRgbArray(c) : [c.r, c.g, c.b];
    }
		
		
		  function hexToRgbArray(hex) {
        if (hex.slice(0, 1) === '#')
            hex = hex.slice(1);
        if (!RE_HEX.test(hex))
            throw new Error("Invalid HEX color: \"" + hex + "\"");
        // normalize / convert 3-chars hex to 6-chars.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        return [
            parseInt(hex.slice(0, 2), 16),
            parseInt(hex.slice(2, 4), 16),
            parseInt(hex.slice(4, 6), 16) // b
        ];
    }
		
	function hideReminders(){
				document.getElementById("colRight").style.float = "none";
					document.getElementById("colRight").style.width = "90%";
					document.getElementById("time").style.display = "none";
					document.getElementById("createReminder").style.display = "none";
					buttonRem=document.getElementById("rem");
					buttonRem.className=buttonRem.className.replace(" active", "");
					reminderDisplayed=false;
		}
		
		
		
		//startTime=data.activities[i].start;
		//time(startTime);
	function hideDetails(){
	document.getElementById("colRight").style.float = "none";
					document.getElementById("colRight").style.width = "90%";
					
					$(".rounded").css("display","none");
					$(".description").empty();
					taskId=-1;
					detailsDisplayed=false;	
	}
		
function whichChild(elem){
    var  i= 0;
    while((elem=elem.previousSibling)!=null) ++i;
    return i;
}

 $(document).on('click','.task', function(event){
	
	
		taskDetails(parseInt((event.target.getAttribute('id')).substring(4)));
		
	 
	 });
	 
	 $('.task').on('tap', function(event){
	
	
		taskDetails(parseInt((event.target.getAttribute('id')).substring(4)));
		
	 
	 });

setInterval(time, 1000); //for reloading the items in the bar
	
		
		
		
		//startTime=data.activities[i].start;
		//time(startTime);
	window.detailsDisplayed=false;
	window.reminderDisplayed=false;
	window.createReminderDisplayed=false;
	window.taskId=-1;
		function taskDetails(index,evt){
			var taskSame=true;
							if (!(data.activities[index].id==taskId)){
							var taskName = data.activities[index].name;
							taskId = data.activities[index].id;
							var taskStartTime = new Date(data.activities[index].start);
							var taskEndTime = new Date(data.activities[index].end);
							var taskExecutionNote = data.activities[index].executionNote;
							var taskOpsNote = data.activities[index].opsNote;
							var taskTimeCritical = data.activities[index].timeCritical;
							taskSame=false;
							}
							
							var roundedSeen = document.getElementById('rounded');
							roundedSeen.style.display="block";
							$(".description").html("<h2>Details</h2><p>Task Name: " + taskName + "<br>Task begins: " + taskStartTime + "<br>Task ends: " + taskEndTime + "<br>Task Execution Notes: " + taskExecutionNote + "<br> Task Ops Note: " + taskOpsNote + "<br>Time Critical Task: " + taskTimeCritical + "</p>");//inserts name of task
							buttonRem=document.getElementById("rem");
					buttonRem.className=buttonRem.className.replace(" active", "");
					
							if (!detailsDisplayed || !taskSame){
								$(".rounded").css("display","inline-table");
					document.getElementById("colRight").style.float = "right";
					document.getElementById("colRight").style.width = "50%";
					
					document.getElementById("time").style.display = "none";
					document.getElementById("createReminder").style.display = "none";
					
					reminderDisplayed = false;
					createReminderDisplayed=false;
					detailsDisplayed=true;
					}
					else {
						document.getElementById("colRight").style.float = "none";
					document.getElementById("colRight").style.width = "90%";
					
					$(".rounded").css("display","none");
					$(".description").empty();
					taskId=-1;
					detailsDisplayed=false;
					}
					
					
						
						}
						
						
  

//$(".task").on('click','.task', function(event){
//		taskDetails(parseInt((event.target.getAttribute('id')).substring(4)));
//	 });
 //
//});
//setInterval(time, 1000); //for reloading the items in the bar
function openCity(evt, rank) {
 var i, tabcontent, tablinks;
 tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
  changeTasks(rank);
						}
						
						
						
				function openReminders(evt){
					
					$(".rounded").css("display","none");
					$(".description").empty();
					detailsDisplayed = false;
					taskId=-1;
					if (!reminderDisplayed){
					document.getElementById("colRight").style.float = "right";
					document.getElementById("colRight").style.width = "50%";
					document.getElementById("time").style.display = "inline-table";
					evt.currentTarget.className += " active";
					}
					else {
						document.getElementById("colRight").style.float = "none";
					document.getElementById("colRight").style.width = "90%";
					document.getElementById("time").style.display = "none";
					document.getElementById("createReminder").style.display = "none";
					buttonRem=document.getElementById("rem");
					buttonRem.className=buttonRem.className.replace(" active", "");
					createReminderDisplayed=false;
					
					
					
					}
					
					reminderDisplayed = !reminderDisplayed;
					
				}
				
				function showCreateReminder(evt){
					$(".description").empty();
					if (!createReminderDisplayed){
					document.getElementById("createReminder").style.display = "inline-table";
					evt.currentTarget.className += " active";
					}
					else {
						document.getElementById("createReminder").style.display = "none";
					var buttoncRem=document.getElementById("cRem");
					buttoncRem.className=buttoncRem.className.replace(" active", "");
					}
					
					createReminderDisplayed = !createReminderDisplayed;
				}
				
				function placeElement(x_pos, y_pos,id) {
				var d = document.getElementById(id);
				d.style.position = "absolute";
				d.style.left = (x_pos+200)+'px';
				d.style.top = (y_pos+100)+'px';
}
 function search(arr, n, x){
    if ((arr[n-1]<= x )&& (x<=arr[n-1]+1800000)) { // 1 comparison
       return "true";
	}
    backup = arr[n-1];
    arr[n-1] = x;

    for(var i=0;i>-1; i++){ // no termination condition
        if ((arr[i]<= x )&& (x<=arr[i]+1800000)){ // execute at most n times
                       // that is at-most n comparisons
            arr[n-1] = backup;
		}
            return (i < n-1) // 1 comparison
	}
}
				/*
						//Cylas' Time Conversion
						
						console.log(startDate);
						
						var seconds = 1000;
						var minutes = seconds * 60;
						var hours = minutes * 60;
						var days = hours * 24;
						var years = days * 365;
						var dateOb = new Date();
						var currentTime = dateOb.getTime();
						
						var timeDiff = currentTime-startTime;
						var startDays = Math.floor(timeDiff/days);
						timeDiff = timeDiff % days;
						var startHours = Math.floor(timeDiff/hours);
						timeDiff = timeDiff % hours;
						var startMinutes = Math.floor(timeDiff/minutes);
						timeDiff = timeDiff % minutes;
						var startSeconds = Math.floor(timeDiff/seconds);
						//Cylas' Time Conversion
						*/
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


