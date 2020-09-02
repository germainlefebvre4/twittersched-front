import axios from "axios";

var TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTkwNTIzOTMsIm5iZiI6MTU5OTA1MjM5MywianRpIjoiNTQ1ZGIyZDgtOGNmYi00MTU2LTgyODYtMDEwMWVkNzY1NzdiIiwiZXhwIjoxNTk5MDUzMjkzLCJpZGVudGl0eSI6Imdlcm1haW4ubGVmZWJ2cmU0QGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7ImlkIjoxLCJyb2xlcyI6WyJ1c2VyIl19fQ.hZbYLlRhUXiIhGfG1RAY4PSzux6ztm-cRZsSnMziZ_Y';

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
            "queue": queueId,
            "title": postTitle,
            "message": postMessage
        }
    })
}
