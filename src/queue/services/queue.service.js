import axios from "axios";

var TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTkxMzMyODMsIm5iZiI6MTU5OTEzMzI4MywianRpIjoiN2U0NGE1MjctNzA2Ny00MmU3LTkyNGUtZmQ3YjY2OGY0YzdhIiwiZXhwIjoxNTk5MTM0MTgzLCJpZGVudGl0eSI6Imdlcm1haW4ubGVmZWJ2cmU0QGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7ImlkIjoxLCJyb2xlcyI6WyJ1c2VyIl19fQ.fpG-T6kNgN97itETr0KzaunmSsmFlIJZxUXNvDtzAvM';

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

export function postQueue(queueName, queueCron) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues",
        method: "post",
        headers: {
            'Authorization': 'Bearer ' + TOKEN
        },
        data: {
            "name": queueName,
            "cron": queueCron
        }
    })
}

export function putQueue(queueId, queueName, queueCron) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues/" + queueId,
        method: "post",
        headers: {
            'Authorization': 'Bearer ' + TOKEN
        },
        data: {
            "name": queueName,
            "cron": queueCron
        }
    })
}

export function delQueue(queueId) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues/" + queueId,
        method: "post",
        headers: {
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}
