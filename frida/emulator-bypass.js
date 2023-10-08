Java.perform(() => {
    const hello = Java.use("com.Ninjasworkout.EmulatorDetector");
    console.log(hello);
  
    hello.isEmulator.implementation = function () {
      // Log input  
      // Call the original method to get the real return value
      const originalResult = this.isEmulator();
      
      // Log input and tampered output
      console.log("Original result: ", originalResult);
      console.log("Tampering result to: false");
      
      // Tamper return value and set it to false
      return false;
    }
  });
  