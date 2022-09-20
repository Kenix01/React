import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const userServices = {
    getAll:() => axiosServices.get(urls.users)
}

export {userServices}