

//change the text below to reflect your own,
var before="the Midterms!"
var current="Today is Election Day. Let\'s get to work!"
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")


function countdown(yr,m,d){

var currentCountdown = 0
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy
var futurestring=montharray[m-1]+" "+d+", "+yr
var difference=(Math.round((Date.parse(futurestring)-Date.parse(todaystring))/(24*60*60*1000))*1)

if (difference==0)
var currentCountdown=current
else if (difference==1)
var currentCountdown="There is "+difference+" day until "+before
else if (difference>1)
var currentCountdown="There are "+difference+" days until "+before

//serve it up
window.onload = function() {
	       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of currentCountdown
	document.getElementById("countdownTimer").innerHTML=currentCountdown;
}

}

//enter the count down date using the format year/month/day
countdown(2018,11,6)





