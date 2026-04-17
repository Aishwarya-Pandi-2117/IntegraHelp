const CONFIG = {
    BASE_URL: "http://localhost:8080",

    API: {
        LOGIN: "/api/auth/login",
        COMPLAINTS: "/api/complaints",
        MY_COMPLAINTS: "/api/complaints/my",
        DEPARTMENT_COMPLAINTS: "/api/complaints/department"
    }
};

function apiUrl(path) {
    return CONFIG.BASE_URL + path;
}

function getToken() {
    return sessionStorage.getItem("token");
}

function authHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + getToken()
    };
}