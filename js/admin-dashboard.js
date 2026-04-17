requireAuth("ADMIN");

fetch(apiUrl(CONFIG.API.DEPARTMENT_COMPLAINTS), {
    headers: authHeaders()
})
.then(res => res.json())
.then(data => {
    adminComplaints.innerHTML = data.map(c => `
        <div>
            ${c.category}
            <select onchange="updateStatus(${c.id}, this.value)">
                <option>SUBMITTED</option>
                <option>IN_PROGRESS</option>
                <option>RESOLVED</option>
            </select>
        </div>
    `).join("");
});

function updateStatus(id, status) {
    fetch(apiUrl(`/api/complaints/${id}/status?status=${status}`), {
        method:"PUT",
        headers: authHeaders()
    });
}