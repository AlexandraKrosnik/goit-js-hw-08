import throttle from 'lodash/throttle'
let inputStorage = {};

let ref = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("[name='email']"),
    message: document.querySelector("[name='message']"),
    buttonSubmit: document.querySelector("[type='submit']"),
}


window.onload = () => {
    let isData = localStorage.getItem("feedback-form-state");
    if (isData)
    {
        let storageParse = JSON.parse(isData); 
        inputStorage = { ...storageParse };
        ref.email.value = storageParse.email;
        ref.message.value = storageParse.message;
        
    }
}
ref.form.addEventListener('submit', onFormSubmit);

ref.form.addEventListener('input', throttle(onInputSave, 500));


function onInputSave(e) {
    inputStorage[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(inputStorage));
}

function onFormSubmit(e) {
    e.preventDefault();
    ref.form.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(inputStorage);     
    
}