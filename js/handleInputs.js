loginForm = document.getElementById("loginform")
loginBtn = document.getElementById("signup")

loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const username = loginForm.username.value;
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    // Todo: firebase
})