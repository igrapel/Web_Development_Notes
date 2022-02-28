var grades = []
var sortedGrades = [];
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

   
    for(var i = 0; i < grades.length; i++)
    {
        sortedGrades[i] = grades[i];
    }
    //sortedGrades.reverse();
    console.log(sortedGrades.sort().toString());
}

function showGrades(toSort)
{
    if(toSort)
    {
        document.getElementById("showGrades").innerHTML = sortedGrades.toString();
    }
    else
    {
        document.getElementById("showGrades").innerHTML = grades.toString();
    }
   
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
    if(true)
    {
        sortedGrades.shift();
        for (let i = 0; i < sortedGrades.length; i++)
        {
            sum += sortedGrades[i];
            console.log("sum " + sum);
        }
        return sum / sortedGrades.length;
    }
    for (let i = 0; i < grades.length; i++)
    {
        sum += grades[i];
        console.log("sum " + sum);
    }
    return sum / grades.length;
}


function selectGrade()
{
    var index = document.getElementById("gradeNum").value;
    document.getElementById("showGrades").innerHTML = "Grade: " + index + " - " + grades[index];

}

function bigImg(x) {
    x.style.height = "450px0px";
    x.style.width = "450px";
  }

  function normalImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
  }