const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
//                      Login Form
loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
        document.querySelector("#loginForm input[type='email']").value;

    const password =
        document.getElementById("loginPassword").value;

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (data.success) {

            localStorage.setItem(
                "token",
                data.token
            );

            window.location.href =
                "dashboard.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);

    }

});
//                        Signup Form

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
        document.getElementById("signupName").value;

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const answer =
        document.getElementById("captchaAnswer").value;

    const correctAnswer =
        document.getElementById("captchaQuestion")
        .dataset.answer;

    // Password Match Check

    if (password !== confirmPassword) {

        alert("Passwords do not match");

        return;
    }

    // Password Length Check

    if (password.length < 8) {

        alert("Password must be at least 8 characters");

        return;
    }

    // Captcha Check

    if (answer !== correctAnswer) {

        alert("Captcha is incorrect");

        return;
    }

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/register",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );

        const data =
            await response.json();

        if (data.success) {

            alert(
                "Account Created Successfully"
            );

            signupForm.reset();

            loginTab.click();

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);

        alert(
            "Server Error"
        );

    }

});

signupTab.addEventListener("click",()=>{

signupForm.classList.remove("hidden");
loginForm.classList.add("hidden");

signupTab.classList.add("active");
loginTab.classList.remove("active");

});

loginTab.addEventListener("click", () => {

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginTab.classList.add("active");
    signupTab.classList.remove("active");
});


const password = document.getElementById("signupPassword");
const confirmPassword = document.getElementById("confirmPassword");

password.addEventListener("input",()=>{

const msg = document.getElementById("passwordMsg");

if(password.value.length >= 8){

msg.style.color="lightgreen";
msg.innerText="✓ Strong Password";

}else{

msg.style.color="tomato";
msg.innerText="✗ Minimum 8 Characters";

}

});

confirmPassword.addEventListener("input",()=>{

const msg = document.getElementById("confirmMsg");

if(password.value === confirmPassword.value){

msg.style.color="lightgreen";
msg.innerText="✓ Passwords Match";

}else{

msg.style.color="tomato";
msg.innerText="✗ Passwords Do Not Match";

}

});

const num1 = Math.floor(Math.random()*9)+1;
const num2 = Math.floor(Math.random()*9)+1;

const captchaQuestion = document.getElementById("captchaQuestion");
captchaQuestion.innerText = `${num1} + ${num2} = ?`;
captchaQuestion.dataset.answer = num1 + num2;