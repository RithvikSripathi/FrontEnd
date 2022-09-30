
// var btn = document.('button');
// console.log(list);
// for (let i = 0; i <= list.length - 1; i++) {
    // console.log(list[i]);
// }
// for(ele in list){
//     console.log(ele.firstElementChild);
//     console.log(ele.lastElementChild);
// }

var list = document.getElementsByClassName("list"); 
function change(){

for(var i of list){

    i.firstElementChild.innerHTML="first";
    i.lastElementChild.innerHTML="last";

    
}
}