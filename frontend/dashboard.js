const token =
    localStorage.getItem("token");

if (!token) {

    window.location.href =
        "index.html";

}

async function loadProfile() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/profile",
            {
                method: "GET",

                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        const data =
            await response.json();

        if (data.success) {

            document.getElementById(
                "userName"
            ).textContent =
                data.user.name;

            document.getElementById(
                "userEmail"
            ).textContent =
                data.user.email;

            document.getElementById(
                "userId"
            ).textContent =
                data.user._id;

        }

    } catch (error) {

        console.log(error);

    }

}

loadProfile();

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("token");

    window.location.href = "index.html";
});