import axiosInstance from "../../axios";

const authorsRepository = {
    findAll: async () => {
        return await axiosInstance.get("/authors")
    }
}

export default authorsRepository