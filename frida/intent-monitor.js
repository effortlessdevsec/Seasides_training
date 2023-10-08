Java.perform(() => {

const i2 =  Java.use("android.content.Intent");
//var i2 = i.$new();
//console.log(i2);

//If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.
i2.putExtra.overload('java.lang.String', 'java.lang.String').implementation =function(x,y){

	console.log("putting extras\n"+x+"\t" +y)
	return this.putExtra(x,y)
}

i2.getStringExtra.implementation = function(z){

	console.log("Getting extras"+"\t"+z)
	return this.getStringExtra(z)
}

})
