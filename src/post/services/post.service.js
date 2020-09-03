import axios from "axios";

export function getPosts(queueId) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues/" + queueId + "/posts",
        method: "get",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    })
}

export function postPost(queueId, postTitle, postMessage) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues/" + queueId + "/posts",
        method: "post",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        },
        data: {
            "title": postTitle,
            "message": postMessage
        }
    })
}

export function putPost(queueId, postId) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues/" + queueId + "/posts/" + postId,
        method: "put",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        },
        data: {
            "title": postTitle,
            "message": postMessage
        }
    })
}

export function delPost(queueId, postId) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues/" + queueId + "/posts/" + postId,
        method: "delete",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    })
}
