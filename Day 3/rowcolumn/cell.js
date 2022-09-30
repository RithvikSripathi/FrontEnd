function changeContent(){

    row = window.prompt("0,1,2");
    col =window.prompt("0,1");
    text = window.prompt("text");
    var data = document.getElementById("myTable").rows[parseInt(row,10)].cells;
    data[parseInt(col,10)].innerHTML=text;
}