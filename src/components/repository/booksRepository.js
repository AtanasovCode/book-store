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
    save: async (payload) => {
        return await axiosInstance.post("/books", payload)
    },
    update: async (payload, id) => {
        return await axiosInstance.put(`/books/${id}`, payload, id)
    },
}

export default booksRepository