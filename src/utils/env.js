console.log(import.meta.env)

export default {
    url: import.meta.env.VITE_WEB_URL ?? 'http://localhost:5173/',
    api_url: import.meta.env.VITE_BACKEND_URL ?? 'http://localhost:1130/',
}