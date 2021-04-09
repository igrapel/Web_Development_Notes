function checkPW()
{
    alert("You are entering a secure site! Unauthorized access will be prosecuted. ");
    var result = confirm("You are entering a secure site! Unauthorized access will be prosecuted. ");
    console.log(result);
    if(result)
    {
        var pw = prompt("Type your password: ");
        if(pw == "asdf")
        {
            windowOpen("https://www.bankofamerica.com/");
        }
        else
        {
            document.write("You typed in the wrong password");
        }
        
    }
    else
    {
        windowOpen("https://www.google.com/");
    }
}

//Browser Object Model
function windowOpen(myUrl)
{
    myWindow = window.open(myUrl, "myWindow", "window=500, height=400");
}