import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import booksRepository from "../components/repository/booksRepository";
import categoriesRepository from "../components/repository/categoriesRepository";
import authorsRepository from "../components/repository/authorsRepository"
import {
    Container,
    Box,
    Typography,
    Button,
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
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        Promise.all([
            categoriesRepository.listAll(),
            authorsRepository.listAll(),
            ... (editMode ? [booksRepository.findById(id)] : [])
        ])
            .then(([categoriesResponse, authorsResponse, bookResponse]) => {
                setCategories(categoriesResponse.data)
                setAuthors(authorsResponse.data)

                if (bookResponse && editMode) {
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
            .finally(() => setLoading(false))
    }, [id])


    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

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
        finally {
            setLoading(false)
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        const payload = {
            name: book.name,
            price: parseFloat(book.price) || 0,
            quantity: parseInt(book.quantity) || 0,
            pages: parseInt(book.pages) || 0,
            category_id: parseInt(book.category_id),
            author_id: parseInt(book.author_id)
        }

        try {
            await booksRepository.update(payload, id)
            navigate("/")
        }
        catch (e) {
            console.error(e)
        }
        finally {
            setLoading(false)
        }
    }



    return (
        <Container maxWidth="sm">
            {
                loading ?
                    <Typography>Loading...</Typography>
                    :
                    <Box>
                        <Box
                            component="form"
                            onSubmit={editMode ? handleUpdate : handleSubmit}
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Typography variant="h4" sx={{ mb: 2 }}>
                                {
                                    editMode ?
                                        "Update book"
                                        :
                                        "Create New book"
                                }
                            </Typography>
                            <TextField
                                name="name"
                                label="book Name"
                                value={book.name}
                                variant="filled"
                                type="text"
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                name="price"
                                label="Price"
                                value={book.price}
                                variant="filled"
                                type="number"
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                name="quantity"
                                label="Quantity"
                                value={book.quantity}
                                variant="filled"
                                type="number"
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                name="pages"
                                label="Page Count"
                                value={book.pages}
                                variant="filled"
                                type="number"
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                name="category_id"
                                label="Category"
                                select
                                value={book.category_id}
                                onChange={handleChange}
                                variant="filled"
                                required
                                fullWidth
                            >
                                {
                                    categories.map((cat) => {
                                        return (
                                            <MenuItem key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </MenuItem>
                                        );
                                    })
                                }
                            </TextField>
                            <TextField
                                name="author_id"
                                label="Author"
                                value={book.author_id}
                                variant="filled"
                                onChange={handleChange}
                                select
                                required
                                fullWidth

                            >
                                {
                                    authors.map((aut) => {
                                        return (
                                            <MenuItem key={aut.id} value={aut.id}>
                                                {aut.name}
                                            </MenuItem>
                                        );
                                    })
                                }
                            </TextField>
                            <Button fullWidth type="submit" variant="contained">
                                {
                                    editMode ? "Update" : "Submit"
                                }
                            </Button>
                        </Box>
                    </Box>
            }
        </Container>
    );
}