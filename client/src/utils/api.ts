import axios from "axios";

export const FRONTEND_ORIGIN_LOCAL = "http://localhost:3000";

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getApiEndpoint(full?: boolean) {
    const origin = window.location.origin.toString();
    if (origin.startsWith("http://localhost")) {
        return "http://localhost:5000";
    }
    return full ? origin + "/api" : "/api";
}

export function getClientEndpoint() {
    if (origin.startsWith("http://localhost")) {
        return FRONTEND_ORIGIN_LOCAL;
    }
    return window.location.origin.toString();
}

export const apiServer = axios.create({
    withCredentials: false,
    baseURL: getApiEndpoint()
});

