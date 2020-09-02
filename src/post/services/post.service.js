import axios from "axios";

var TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTkwNDM3MTQsIm5iZiI6MTU5OTA0MzcxNCwianRpIjoiNTRlNzgwZmMtMTdkMS00N2I2LThiMzQtZTUwNjMxMzQzN2U4IiwiZXhwIjoxNTk5MDQ0NjE0LCJpZGVudGl0eSI6Imdlcm1haW4ubGVmZWJ2cmU0QGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7ImlkIjoxLCJyb2xlcyI6WyJ1c2VyIl19fQ.jZtCQoDfsbhEHQRZ1CmZcTH0Al1dr9Ukh64ZFt92bSA';

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
