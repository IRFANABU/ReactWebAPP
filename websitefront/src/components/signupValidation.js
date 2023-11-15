function signupValidation(values) {
   
    let error = {};
    if(values.name === ""){
        error.name="Name should not be empty"
    }
    else{
        error.name=""
    }
    if(values.email === ""){
        error.email="Email should not be empty"
    }
    else{
        error.email="";
    }
    if(values.password === ""){
        error.password="Password should not be empty"
    }
    else if(values.password.length < 8){
        error.password = "Password length must be 8 characters"
    }
    else{
        error.password="";
    }
    return error;
 
}


export default signupValidation;