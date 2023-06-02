import { io } from "socket.io-client";
const url = process.env.NODE_ENV === 'production' ? undefined : '/'


export const socket = io(url)