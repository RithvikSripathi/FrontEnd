class Name{
    constructor(firstname,lastname){
     this.firstname=firstname;
     this.lastname=lastname;   
    }

    fullname(){
        return this.firstname+" "+this.lastname;
    }
    initials(){
        return this.firstname[0]+"."+this.lastname;
    }
}
let sai = new Name("Sai","Kumar");
console.log("FULL NAME:",sai.fullname());
console.log("INITIAL:",sai.initials());