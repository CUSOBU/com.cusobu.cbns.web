import dotenv from 'dotenv';

dotenv.config();

export default {
    url: process.env.WEB_URL ?? 'http://localhost:5173/',
    api_url: process.env.BACKEND_URL ?? 'http://localhost:1130/',
}