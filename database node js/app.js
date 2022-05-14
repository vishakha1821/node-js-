const product = (a,b)=>{
    return a*b;
}

console.log(product(3,5));

const student = {
    name : 'vishakha',
    age: 21,

    greet() {
        console.log('hi, I am ' + this.name );
    }

    

}
student.greet();


