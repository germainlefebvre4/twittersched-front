import axios from "axios";

export function getQueues() {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues",
        method: "get",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    })
}

export function postQueue(queueName, queueCron) {
    return axios.request({
        baseURL: "http://localhost:8080",
        url: "/api/queues",
        method: "post",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
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
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
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
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    })
}
