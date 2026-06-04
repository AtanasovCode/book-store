import axiosInstance from "../../axios";

const booksRepository = {
    listAll: async () => {
        return await axiosInstance.get("/books")
    },
    findById: async (id) => {
        return await axiosInstance.get(`/books/${id}`)
    },
    deleteById: async (id) => {
        return await axiosInstance.delete(`/books/${id}`)
    },
    save: async () => {
        return await axiosInstance.post("/books")
    },
    update: async () => {
        return await axiosInstance.put(`/books/${id}`)
    },
}

export default booksRepository