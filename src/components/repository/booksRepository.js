import axiosInstance from "../../axios";

const booksRepository = {
    listAll: async () => {
        return await axiosInstance.get("/books")
    },
    findById: async (id) => {
        return await axiosInstance.get(`/books/${id}`)
    },
}

export default booksRepository