var today = new Date();
var hours_now = today.getHours();

var greeting;

if (hours_now > 18)
{
  greeting = "Good Evening,";
}
else if (hours_now > 12)
{
  greeting = "Good Afternoon,";
}
else if (hours_now >= 0)
{
  greeting = "Good Morning,";
}
document.getElementById("greeting").innerHTML =  greeting;

function my_function()
{
  alert("RECENTLY NOT AVAILABLE, UPDATING SOON");
}


function menu_function()
{
  
}
