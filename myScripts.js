var nextYear;
var theGPA;
var yourGrade;

function cs()
{
    nextYear = document.getElementById("csInput").value;
    console.log(nextYear);
    if(nextYear == 1)
    {
        document.getElementById("cs_answer").innerHTML = "Wise choice.";
    }
    else if(nextYear==2)
    {
        document.getElementById("cs_answer").innerHTML = "Don't be Alberto.";
    }
    else{
        document.getElementById("cs_answer").innerHTML = "Choose Yes/No";
    }
}

function gpa()
{
    theGPA = document.getElementById("gpaInput").value;
    theGPA = parseFloat(theGPA);

    if(theGPA >= 3.5)
    {
        document.getElementById("gpa_answer").innerHTML = "You should take many AP courses.";
    }
    else if(theGPA > 3.0)
    {
        document.getElementById("gpa_answer").innerHTML = "You should take 1 or 2 APs";
    }
    else if(theGPA > 2.0)
    {
        document.getElementById("gpa_answer").innerHTML = "Get some tutoring";
    }
    else{
        document.getElementById("gpa_answer").style.color = "red";
        document.getElementById("gpa_answer").innerHTML = "Ouch";
    }
}

function selectGrade()
{
    yourGrade = document.getElementById("gradeInput").value;
    theGPA = document.getElementById("gpaInput").value;
    console.log(yourGrade);
    console.log(theGPA);
    if(theGPA >= 3.5 && yourGrade == 12)
    {
        if(nextYear == 1)
        {
            document.getElementById("recommendedCS").innerHTML = "Your last year of HS. Consider AP CSA";
        }
        else{
            document.getElementById("recommendedCS").innerHTML = "Why are you wasting your life.";
        }
    }
    else if(theGPA >= 3.5 && (yourGrade == 11 || yourGrade == 10))
    {
        if(nextYear == 1)
        {
            document.getElementById("recommendedCS").innerHTML = "Consider AP CSP";
        }
        else{
            document.getElementById("recommendedCS").innerHTML = "Why are you wasting your life.";
        }
    }
    else if((theGPA<2.5 && theGPA < 3.5) && (yourGrade == 10 || yourGrade == 11 || yourGrade == 12))
    {
        if(nextYear == 1)
        {
            document.getElementById("recommendedCS").innerHTML = "Consider Object Oriented Programming";
        }
        else{
            document.getElementById("recommendedCS").innerHTML = "Why are you wasting your life.";
        }
    } 
    else if(yourGrade ==9)
    {
        document.getElementById("recommendedCS").innerHTML = "Consider Foundations of Coding";
    }
    else{
        document.getElementById("recommendedCS").innerHTML = "Maybe you will be good at film studies.";
    }
}