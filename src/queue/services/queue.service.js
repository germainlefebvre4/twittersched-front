import axios from "axios";

var TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTg5ODk4MzEsIm5iZiI6MTU5ODk4OTgzMSwianRpIjoiYWVhYjA4YWUtOTgxMC00NjIzLWFkNjUtMjhmYTdmZTA3YTkyIiwiZXhwIjoxNTk4OTkwNzMxLCJpZGVudGl0eSI6Imdlcm1haW4ubGVmZWJ2cmU0QGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7ImlkIjoxLCJyb2xlcyI6WyJ1c2VyIl19fQ.AeDq0zWFkwyQudBcUFVGJTU6pmtvhF5cXhKcIKvML-w';

export function getQueues() {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues",
        method: "get",
        headers: {
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}
