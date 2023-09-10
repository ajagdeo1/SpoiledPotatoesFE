import axios from "axios";

export default axios.create({
    baseURL: 'https://cdfa-108-30-195-102.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": true}
});