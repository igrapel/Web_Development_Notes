var cars;

function seeCars()
{
cars = ["Kia", "Nissan", "Lexus", "Bentley", "Toyota"];
cars[5] = "BMW;"

cars[2] = "Audi";

//cars.sort()
document.getElementById("brands").innerHTML = cars;

}

function seePrices()
{
var prices = new Array(10000, 9000, 21000, 75000, 6000);
prices[5] = 30000;
document.getElementById("prices").innerHTML = prices;
}


function seeOptions()
{
var options = new Array();
options[0] = "Cash";
options[1] = "Credit";
options[2] ="Lease";

/*also possible
var options new Array("Cash", "Credit", "Lease");
*/
document.getElementById("purchase").innerHTML = options;
}

function numCars()
{
var num = cars.length;
document.getElementById("numOfCars").innerHTML = "WE have " + num + " cars";

}
