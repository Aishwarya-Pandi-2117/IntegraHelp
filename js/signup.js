document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const payload = {
        name: name.value,
        email: email.value,
        empId: empId.value,
        department: department.value,
        password: password.value,
        role: "USER"
    };

    fetch(apiUrl("/api/auth/signup"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(res => {
        if (res.ok) {
            alert("✅ Registration Successful");
            window.location.href = "login.html";
        } else {
            alert("❌ Registration Failed");
        }
    });
});