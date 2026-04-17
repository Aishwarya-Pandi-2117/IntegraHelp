document.getElementById("deptTitle").innerText =
    "Department: " + sessionStorage.getItem("selectedDept");

category.addEventListener("change", () => {
    dynamicFields.innerHTML = "";

    if (category.value === "Temperature") {
        dynamicFields.innerHTML = `
            <input placeholder="Temperature">
            <input placeholder="Floor No">
            <input placeholder="ODC No">
        `;
    }
});

complaintForm.addEventListener("submit", e => {
    e.preventDefault();

    fetch(apiUrl(CONFIG.API.COMPLAINTS), {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({
            department: sessionStorage.getItem("selectedDept"),
            category: category.value,
            description: description.value,
            isAnonymous: anonymous.checked
        })
    }).then(() => alert("Complaint Submitted"));
});