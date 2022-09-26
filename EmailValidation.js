console.log("Welcome To Email Validation.");

const emailRegex = RegExp("^[a-zA-Z]*[@]{1}[a-z0-9]+[.]{1}[.a-z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid Email Address !!");
    else
        throw email + " : Invalid Email address !!";
}

try{
    validateEmail("abc@bridgelabz.co.in");
    validateEmail("abc@bridgelabz.co.in");
    validateEmail("abc@bridgelabz");
}
catch(e){
    console.error(e);
}