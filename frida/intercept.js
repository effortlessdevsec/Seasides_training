Interceptor.attach(Module.findExportByName('libnsample.so','Java_com_sample_nsample_MainActivity_stringFromJNI'),{
onEnter: function(args)
{

	console.log("enterd into function" )

},
 onLeave: function (retval) {

 	//changing return value !!!!

            console.log("leaving!!!!!!")
       }

})