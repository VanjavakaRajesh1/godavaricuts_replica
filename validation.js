const valid =()=>{
    const username=document.getElementById("username").value;
    const nameerror=document.getElementById("nameerror")
    nameerror.classList="text-danger pt-2"
    const email=document.getElementById("email").value;
    const emailerror=document.getElementById("emailerror");
    emailerror.classList="text-danger pt-2"
    const mobilenum=document.getElementById("mobilenum").value;
    const mobileerror=document.getElementById("mobileerror")
    const mobilelen=document.getElementById("mobilelength").value;
    mobileerror.classList="text-danger pt-2"
    const nameexp=/^[a-zA-z]+$/;
    const emailexp= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mobileexp=/^[0-9]+$/;
    let namestatus=emailstatus=mobilestatus=false
    //name validation
    if(username===""){
        nameerror.textContent="name is mandatory"
    }else if(username.match(nameexp)){
        namestatus=true;
    }
    else{
        nameerror.textContent="name should contain only alphabets"
    }
    //email validation
        if(email===""){
            emailerror.textContent="email is mandatory"
        }
        else if(email.match(emailexp)){
            emailstatus=true;
        }
        else{
            emailerror.textContent="email format is wrong"
        }
    
    
    //mobile validation
    if(mobilenum===""){
        mobileerror.textContent="mobile number is mandatory"
    }
    else if(mobilenum.match(mobileexp)&&mobilenum.length==mobilelen){
        mobilestatus=true;
    }
    else{
        mobileerror.textContent=`mobile number should be of length ${mobilelen}`
    }

    //validation
    if(namestatus && emailstatus && mobilestatus){
        return true;
    }
    else
        return false

}