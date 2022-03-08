var toppings = ["Tomato Sauce", "Vegan Cheese"];

function addTop() {
  var ul = document.getElementById("confirmation");
  for(var i = 0; i < toppings.length; i++)
  {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(toppings[i]));
    ul.appendChild(li);

  }

  //document.getElementById("toppings").innerHTML = toppings;
}

function addTopping(selection)
{
  switch(selection){
    case "Olives":
      if(toppings.indexOf("Olives") == -1) 
      {
      toppings.push("Olives");
      }
    case "Mushrooms":
      if(toppings.indexOf("Mushrooms") == -1) 
      {
      toppings.push("Mushrooms");
      }
    case "Pineapples":
      if(toppings.indexOf("Pineapples") == -1) 
      {
      toppings.push("Pineapples");
      }
    case "Peppers":
      if(toppings.indexOf("Peppers") == -1) 
      {
      toppings.push("Peppers");
      }
    case "Eggplant":
      if(toppings.indexOf("Eggplant") == -1) 
      {
      toppings.push("Eggplant");
      }
    case "Spinach":
      if(toppings.indexOf("Spinach") == -1) 
      {
      toppings.push("Spinach");
      }
  }
}

function removeLast() {
  toppings.pop();
}

function alpha() {
  toppings.sort();
}



function addSpinach() {
  if (toppings.indexOf("Spinach") == -1) {
    toppings.push("Spinach");
  } else {
    toppings.splice(toppings.indexOf("Spinach", 1));
  }
}
