function appointmentDays()
{
    var start = document.getElementById("start").value;
    start = Number(start);
    console.log(typeof start);

    var end = document.getElementById("end").value;
    end = Number(end);
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
        document.write('<p>' + 'March ' + i + '</p>');
    }
}