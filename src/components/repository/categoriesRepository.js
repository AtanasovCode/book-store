import axiosInstance from "../../axios";

const categoriesRepository = {
    listAll: async () => {
        return await axiosInstance.get("/categories")
    }
}


export default categoriesRepository