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
        error.password="Passwoed should not be empty"
    }
    else{
        error.password="";
    }
    return error;
 
}


export default signupValidation;