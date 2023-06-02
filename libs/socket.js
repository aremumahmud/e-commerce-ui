import { io } from "socket.io-client";
const url = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5000'


export const socket = io(url, {
    autoConnect: false
})