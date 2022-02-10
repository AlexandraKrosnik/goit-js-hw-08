import throttle from 'lodash/throttle'
let inputStorage = {
    email: "",
    message:""
};

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
        
        inputStorage = { ...inputStorage, ...storageParse };
        console.log(inputStorage);
        ref.email.value = inputStorage.email;
        ref.message.value = inputStorage.message;
        
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
    if (ref.email.value === "" || ref.message.value === "")
    {
        alert("Не всі поля зопавненні! Перевірте введені дані.");
        return;
    }   
    
    ref.form.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(inputStorage);  
    inputStorage = {};  
    
}