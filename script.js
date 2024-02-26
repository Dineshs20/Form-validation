const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

form.addEventListener('submit',e=>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if(usernameValue===''){
        setError(username,'Username Cannot Be Blank');
    }
    else{
        setSuccess(username);
    }
    if(emailValue===''){
        setError(email,'Email Cannot Be Blank');
    }
    else if(!isEmail(emailValue))
    {
        setError(email,'Not a Valid Email')
    }
    else{
        setSuccess(email);
    }
    if(passwordValue==='')
    {
        setError(password,'Password Cannot Be Blank');
    }
    else{
        setSuccess(password);
    }
    if(password2Value==='')
    {
        setError(password2,'Confirm Password Cannot Be Blank');
    }
    else if(passwordValue!==password2Value){
        setError(password2,'Password Does Not Match');
    }
    else{
        setSuccess(password2);
    }
}
function setError(input,message){
    const formControl=input.parentElemet;
    const small = formControl.querySelector('small');
    formControl.className='form-control error';
    small.innerText=message;
}
function setSuccess(input){
    const formControl=input.parentElemet;
    formControl.className='form-control success';
}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
