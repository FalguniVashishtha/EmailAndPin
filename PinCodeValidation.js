console.log("Welcome To PinCode Validation: ");
const pincodeRegex = RegExp("^[1-9][0-9]{5}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid PinCode!");
    else
        throw pincode + " : Invalid Pincode!";
}

try{
    validatePincode("400088");
    validatePincode("40088C"); 
}
catch(e){
    console.error(e);
}