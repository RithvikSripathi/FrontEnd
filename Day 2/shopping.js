var freeShipping = function(obj){
    var arr = Object.values(obj);
   //  console.log(arr);
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if(sum>50.00){
       return true;
    }
    else return false;
     
   }
   // console.log(freeShipping([{"Shampoo": 5.99, "Rubber Ducks": 15.99 }]));
   console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));