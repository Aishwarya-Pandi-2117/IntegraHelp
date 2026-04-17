requireAuth("USER");

fetch(apiUrl(CONFIG.API.MY_COMPLAINTS), {
    headers: authHeaders()
})
.then(res => res.json())
.then(data => {
    complaints.innerHTML = data.map(c =>
        `<div>${c.category} - <b>${c.status}</b></div>`
    ).join("");
});