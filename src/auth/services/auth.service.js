import axios from "axios";

export function authLogin(email, password) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/auth/login",
        method: "post",
        data: {
            "email": email,
            "password": password
        }
    })
}
