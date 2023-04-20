const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } else {
        const formElements = {
            Email: email.value,
            Password: password.value
        };
        console.log(formElements)
        form.reset();
    };
};