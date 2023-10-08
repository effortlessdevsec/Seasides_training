Java.perform(() => {

const hello = Java.use("com.scottyab.rootbeer.RootBeer");

console.log(hello)


hello.isRooted.implementation = function() {
    //this.a(x);
    // Tamper return value and set it to true
    return false;

    }



})
