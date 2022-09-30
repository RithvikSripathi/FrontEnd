
var myPhone={
  phoneName:"OnePlus Nord 2 5G",
  Type	:"Fluid AMOLED, 90Hz, HDR10+",
Size :	"6.43 inches, 99.8 cm2",
Resolution	:"1080 x 2400 pixels",
Protection	:" Corning Gorilla Glass 5",
Storage :"128",
display:function(){
  console.log("Phone name is :",this.phoneName);
  console.log("Display type is:",this.Type);
  console.log("Phone Display size is: ",this.Size);
  console.log("resolutuon is :",this.Resolution);
  console.log("display protection: ", this.Protection);

},

storage: function(usedStorage){
  return myPhone.Storage-usedStorage;
}

};
myPhone.display();

console.log("Storage is left is",myPhone.storage("50"),"GB");