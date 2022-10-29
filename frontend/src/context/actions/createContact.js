import axiosInstance from "../../helpers/axios";

export const createContact = () => {
    axiosInstance.post()
    .then((res) => console.log("res", res))
    .catch(err => console.log("e", err));
}