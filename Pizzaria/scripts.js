var toppings = ["Tomato Sauce", "Vegan Cheese"];
var myWindow;

function addTopping(choice)
{
    switch(choice){
        case "Olives":
            var indexChoice = toppings.indexOf("Olives");
            if(indexChoice == -1)
            {
                toppings.push("Olives");
            }
            else
            {
                toppings.splice(indexChoice, 1);
            }
            break;
        case "Mushrooms":
            var indexChoice = toppings.indexOf("Mushrooms");
            if(indexChoice == -1)
            {
                toppings.push("Mushrooms");
            }
            else
            {
                toppings.splice(indexChoice, 1);
            }
            break;
        case "Pineapples":
            var indexChoice = toppings.indexOf("Pineapples");
            if(indexChoice == -1)
            {
                toppings.push("Pineapples");
            }
            else
            {
                toppings.splice(indexChoice, 1);
            }
            break;
        case "Peppers":
            var indexChoice = toppings.indexOf("Peppers");
            if(indexChoice == -1)
            {
                toppings.push("Peppers");
            }
            else
            {
                toppings.splice(indexChoice, 1);
            }
            break;
        case "Eggplant":
            var indexChoice = toppings.indexOf("Eggplant");
            if(indexChoice == -1)
            {
                toppings.push("Eggplant");
            }
            else
            {
                toppings.splice(indexChoice, 1);
            }
            break;
        case "Spinach":
            var indexChoice = toppings.indexOf("Spinach");
            if(indexChoice == -1)
            {
                toppings.push("Spinach");
            }
            else
            {
                toppings.splice(indexChoice, 1);
            }
            break;
    }
//print out each element to separate console line
console.log("Toppings:")
for(var i = toppings.length -1; i >= 0; i--)
{
    console.log(toppings[i]);
}    

}

function confirmPick()
{
    var UL = document.getElementById("confirmation");
    for(var i = 0; i < toppings.length; i++)
    {
        console.log(toppings[i]);
        var LI = document.createElement("li");
        LI.appendChild(document.createTextNode(toppings[i]));
        UL.appendChild(LI);
    }
    myWindow = window.open("", "Confirmed", "width=450, height=500");
    myWindow.document.write("<p> Thank you for your order. It is confirmed </p>" +
    "You ordered pizza with: " + toppings + "<hr>");

    let para = document.createElement("p");
    para.innerHTML = "Thank you for your order. Your pizza is being prepared";
    para.style.color = "blue";
    para.style.fontSize = "2em";
    document.body.appendChild(para);

    let btn = document.createElement("button");
    btn.innerHTML = "Close window";
    btn.type = "submit";
    btn.onclick = function()
    {
        myWindow.close();
    }
    myWindow.document.body.appendChild(btn);
}
