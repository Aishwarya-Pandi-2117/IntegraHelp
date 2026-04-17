document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const payload = {
        email: email.value,
        password: password.value
    };

    fetch(apiUrl(CONFIG.API.LOGIN), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("role", data.role);
        sessionStorage.setItem("department", data.department);

        data.role === "ADMIN"
            ? window.location.href = "dashboard-admin.html"
            : window.location.href = "dashboard-user.html";
    })
    .catch(() => alert("Login failed"));
});

function requireAuth(role = null) {
    if (!getToken()) window.location.href = "login.html";
    if (role && sessionStorage.getItem("role") !== role) {
        alert("Unauthorized");
        sessionStorage.clear();
        window.location.href = "login.html";
    }
}