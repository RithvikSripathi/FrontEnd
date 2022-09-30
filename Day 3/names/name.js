function MyFunction()
{
  var first, second;
    first = document.getElementById("firstname").value;
    second = document.getElementById("lastname").value;
    
    // fname =document.getElementById("here")
    // console.log(first);
    // lname = document.getElementById("here")
    // lname.InnerHTML = second;
    document.getElementById("here").innerHTML = first + " " + second;
}