import axiosInstance from "../../axios";

const authorsRepository = {
    listAll: async () => {
        return await axiosInstance.get("/authors")
    }
}

export default authorsRepository