var days = "";

function appointmentDays()
{
    var start = document.getElementById("start").value;
    start = Number(start);
    console.log(typeof start);

    var end = document.getElementById("end").value;
    end = Number(end);

    while(start < 0)
    {
        start = Number(prompt("There are no negative dates. Enter a positive date"));
    }
    //my first loop
    var febDays = "";
    for(var i = start; i <= end; i++)
    {
        febDays += '<p>' + 'February ' + i + '</p>';
        
        //document.write('<p>' + 'February ' + i + '</p>');
    }
    document.getElementById("febDays").innerHTML = febDays;
}

function marchDays()
{
    var startMarch = document.getElementById("startMarch").value;
    startMarch = Number(startMarch);
    var endMarch = document.getElementById("endMarch").value;
    endMarch = Number(endMarch);
    var jump = document.getElementById("jump").value;
    jump = Number(jump);
    console.log(startMarch);
    console.log(jump);


    
    for(var i = startMarch; i <= endMarch; i+=jump)
    {
        days += '<p>' + 'March ' + i + '</p>';
        //document.write('<p>' + 'March ' + i + '</p>');
    }
    document.getElementById("marchDays").innerHTML = days;
   
}

function aprilDays()
{
    var aprilText = "";
    
    var numSessions = document.getElementById("numSessions").value;
    numSessions = Number(numSessions);

    var startApril = document.getElementById("startApril").value;
    startApril = Number(startApril);

    var daysBetween = document.getElementById("daysBetween").value;
    daysBetween = Number(daysBetween);

    console.log("Num: " + numSessions);
    var count = 0;
    while(count < numSessions)
    {
        aprilText += '<p>' + 'April ' + startApril + '</p>';
        startApril += daysBetween;
        count++;
    } 

    document.getElementById("aprilResults").innerHTML = aprilText;

}