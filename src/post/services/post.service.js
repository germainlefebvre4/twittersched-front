import axios from "axios";

var TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTkxMzMyODMsIm5iZiI6MTU5OTEzMzI4MywianRpIjoiN2U0NGE1MjctNzA2Ny00MmU3LTkyNGUtZmQ3YjY2OGY0YzdhIiwiZXhwIjoxNTk5MTM0MTgzLCJpZGVudGl0eSI6Imdlcm1haW4ubGVmZWJ2cmU0QGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7ImlkIjoxLCJyb2xlcyI6WyJ1c2VyIl19fQ.fpG-T6kNgN97itETr0KzaunmSsmFlIJZxUXNvDtzAvM';

export function getPosts(queueId) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues/" + queueId + "/posts",
        method: "get",
        headers: {
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}

export function postPost(queueId, postTitle, postMessage) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues/" + queueId + "/posts",
        method: "post",
        headers: {
            'Authorization': 'Bearer ' + TOKEN
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
            'Authorization': 'Bearer ' + TOKEN
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
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}
