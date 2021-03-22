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

function removeLast() {
  toppings.pop();
}

function alpha() {
  toppings.sort();
}

function addOlives() {
  if (toppings.indexOf("Olives") == -1) {
    toppings.unshift("Olives");
  } else {
    toppings.splice(toppings.indexOf("Olives", 1));
  }
}

function addMushrooms() {
  if (toppings.indexOf("Mushrooms") == -1) {
    toppings.push("Mushrooms");
  } else {
    toppings.splice(toppings.indexOf("Mushrooms"), 1);
  }
}

function addPineapples() {
  if (toppings.indexOf("Pineapples") == -1) {
    toppings.push("Pineapples");
  } else {
    toppings.splice(toppings.indexOf("Pineapples", 1));
  }
}

function addPeppers() {
  if (toppings.indexOf("Peppers") == -1) {
    toppings.push("Peppers");
  } else {
    toppings.splice(toppings.indexOf("Peppers", 1));
  }
}

function addEggplant() {
  if (toppings.indexOf("Eggplant") == -1) {
    toppings.push("Eggplant");
  } else {
    toppings.splice(toppings.indexOf("Eggplant", 1));
  }
}

function addSpinach() {
  if (toppings.indexOf("Spinach") == -1) {
    toppings.push("Spinach");
  } else {
    toppings.splice(toppings.indexOf("Spinach", 1));
  }
}
