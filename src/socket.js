import { io } from "socket.io-client";
const url = process.env.NODE_ENV === 'production' ? undefined : '/'
//hello

export const socket = io(url)
