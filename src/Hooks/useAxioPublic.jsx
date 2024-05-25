import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://greenmind-backend-pi.vercel.app',

})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;