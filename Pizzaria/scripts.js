
   
var toppings = ["Tomato Sauce", "Vegan Cheese"];
var myWindow;

function confirmPick() {
  var ul = document.getElementById("confirmation");
  for(var i = 0; i < toppings.length; i++)
  {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(toppings[i]));
    ul.appendChild(li);

  }

  //document.getElementById("toppings").innerHTML = toppings;
myWindow = window.open("", "Thanks.", "width=300,height=300");
myWindow.document.write("<p>Thank you for the order</p> <p> Enjoy our pizza with: </p> " + toppings);

let btn = document.createElement("button");
btn.innerHTML = "Close";
btn.type = "submit";
btn.name = "formBtn";
btn.id = "toClose";
btn.onclick = function ()
{
  myWindow.close();
  console.log("here");
}
document.body.appendChild(btn);

}



function addTopping(selection)
{
  switch(selection){
    case "Olives":
      if(toppings.indexOf("Olives") == -1) 
      {
      toppings.push("Olives");
      }
      break;
    case "Mushrooms":
      if(toppings.indexOf("Mushrooms") == -1) 
      {
      toppings.push("Mushrooms");
      }
      break;
    case "Pineapples":
      if(toppings.indexOf("Pineapples") == -1) 
      {
      toppings.push("Pineapples");
      }
      break;
    case "Peppers":
      if(toppings.indexOf("Peppers") == -1) 
      {
      toppings.push("Peppers");
      }
      break;
    case "Eggplant":
      if(toppings.indexOf("Eggplant") == -1) 
      {
      toppings.push("Eggplant");
      }
      break;
    case "Spinach":
      if(toppings.indexOf("Spinach") == -1) 
      {
      toppings.push("Spinach");
      }
      break;
  }
  

}

function removeLast() {
  toppings.pop();
}

function alpha() {
  toppings.sort();
}
