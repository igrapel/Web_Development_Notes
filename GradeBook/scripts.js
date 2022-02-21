var grades = []
function addGrades()
{
    var grade = 0;
    while(grade != -1)
    {
        var grade = parseFloat(prompt('Enter grades. '));
        if(grade != -1)
        {
            grades.push(grade);
        }
    }

    //shallow copy

    var sortedGrades = [];
    for(var i = 0; i < grades.length; i++)
    {
        sortedGrades[i] = grades[i];
    }
    console.log(sortedGrades.sort().toString());
}

function showGrades()
{
    document.getElementById("showGrades").innerHTML = grades.toString();
}


function showGpa()
{
    var gradeAverage = calcAverage();
    document.getElementById("gpa").innerHTML = gradeAverage;
}

function calcAverage(removed = false)
{
    var sum = 0;
    console.log(grades.length);
    for (let i = 0; i < grades.length; i++)
    {
        sum += grades[i];
        console.log("sum " + sum);
    }
    return sum / grades.length;
}
