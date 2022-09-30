
var arr =[1 ,2 ,3 ,4]

// var k = 8;
var k =6;
// var count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>k){
//         count+=1;
//     }
// }
function count(arr,k){
    const c=arr.filter(num=>num>k)
    return c.length;
}
console.log(count(arr,k));