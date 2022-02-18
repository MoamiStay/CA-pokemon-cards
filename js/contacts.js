const form = document.querySelector("form#myForm");
form.addEventListener("submit", validateForm);

// input id 
const myName = document.querySelector("input#name");
const mySub = document.querySelector("input#subject");
const myEmail = document.querySelector("input#email");
const myAdd = document.querySelector("input#address");

// feedback for input message
const nameMsg = document.querySelector("span#nameMsg");
const subMsg = document.querySelector("span#subMsg");
const emailMsg = document.querySelector("span#emailMsg");
const addMsg = document.querySelector("span#addMsg");

// final message sumbit-success/failure
const responsMsg = document.querySelector("p#responsMsg");

function validateForm(e) {
    e.preventDefault();

    let submittedName = myName.value.trim();
    console.log("Name: " + submittedName);
    nameMsg.innerHTML = "";
    responsMsg.innerHTML = "";
    // let requiredName = /e/;
    // let testMe = requiredName.test(submittedName);
    if(!submittedName || /\d/.test(submittedName)) {
    nameMsg.innerHTML = "Please enter a valid name";}

    let submittedSub = mySub.value.trim();
    console.log("Subject: " + submittedSub);
    subMsg.innerHTML = "";
    if(!/^\S{10,}$/.test(submittedSub)) {
    subMsg.innerHTML = "Please enter a minimum of 10 characters. No spaces.";}

    let submittedEmail = myEmail.value.trim();
    console.log("Email: " + submittedEmail);
    emailMsg.innerHTML = "";
    if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(submittedEmail)) {
    emailMsg.innerHTML = "Please enter a valid email";}

    let submittedAdd = myAdd.value.trim();
    console.log("Address: " + submittedAdd);
    addMsg.innerHTML = "";
    if(!/^\S{25,}$/.test(submittedAdd)) {
    addMsg.innerHTML = "Please enter a minimum of 25 characters. No spaces.";}

    if(nameMsg.innerHTML === "" && subMsg.innerHTML === "" && emailMsg.innerHTML === "" && addMsg.innerHTML === "") {
        responsMsg.innerHTML = "All good to go!";
    } else { responsMsg.innerHTML = "nope. try again, fool";
}
}