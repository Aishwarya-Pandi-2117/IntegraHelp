function selectDept(dept) {
    sessionStorage.setItem("selectedDept", dept);
    window.location.href = "complaint.html";
}