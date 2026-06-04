import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import booksRepository from "../components/repository/booksRepository";
import categoriesRepository from "../components/repository/categoriesRepository";
import authorsRepository from "../components/repository/authorsRepository"
import {
    Container,
    TextField,
    MenuItem,
} from "@mui/material"


export default function BookFormPage() {

    const navigate = useNavigate()

    const { id } = useParams()
    const editMode = Boolean(id)

    const [book, setBook] = useState({
        name: '',
        price: '',
        quantity: '',
        pages: '',
        category_id: '',
        author_id: ''
    })
    const [categories, setCategories] = useState([])
    const [authors, setAuthors] = useState([])
    const [error, setError] = useState(false)


    useEffect(() => {
        Promise.all([
            categoriesRepository.listAll(),
            authorsRepository.listAll(),
            ... (editMode ? [booksRepository.findById(id)] : [])
        ])
            .then(([categoriesResponse, authorsResponse, bookResponse]) => {
                setCategories(categoriesResponse.data)
                setAuthors(authorsResponse.data)

                if(bookResponse && editMode) {
                    const { name, price, quantity, pages, category, author } = bookResponse.data

                    setBook({
                        name,
                        price,
                        quantity,
                        pages,
                        category_id: category?.id ?? '',
                        author_id: author?.id ?? ''
                    })
                }
            })
            .catch((e) => {
                console.error(e)
                setError("Couldn't retrieve categories and/or authors")
            })
    }, [id])


    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        payload = {
            name: book.name,
            price: parseFloat(book.price),
            quantity: parseInt(book.quantity),
            pages: parseInt(book.pages),
            category_id: parseInt(book.category_id),
            author_id: parseInt(book.author_id)
        }

        try {
            await booksRepository.save(payload)
            navigate("/")
        }
        catch (e) {
            console.error(e)
            setError("Failed to add new book")
        }
    }



    return (
        <Container>
            <TextField name="name" label="Name" value={book.name} onChange={handleChange} />
            <TextField name="price" label="Price" value={book.price} onChange={handleChange} />
            <TextField name="quantity" label="Quantity" value={book.quantity} onChange={handleChange} />
            <TextField name="pages" label="Page Count" value={book.pages} onChange={handleChange} />
            <TextField
                name="category_id"
                label="Category"
                select
                value={book.category_id}
                onChange={handleChange}
                required
                fullWidth
            >
                {categories.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                        {cat.name}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                name="author_id"
                label="Author"
                select
                value={book.author_id}
                onChange={handleChange}
                required
                fullWidth
            >
                {authors.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                        {cat.name}
                    </MenuItem>
                ))}
            </TextField>
        </Container>
    );
}