import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import booksRepository from "../components/repository/booksRepository";
import { Container, Typography, Button, CardMedia, Paper } from "@mui/material";



export default function BookDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState()
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        booksRepository.findById(id)
            .then((response) => {
                setBook(response.data)
                setNotFound(false)
            })
            .catch((e) => {
                console.error(e)
                setNotFound(true)
            })
    }, [id])

    if (notFound) {
        return (
            <Container sx={{ py: 5 }}>
                <Typography variant="h5">Product not found.</Typography>
                <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate("/")}>
                    Back to Books
                </Button>
            </Container>
        );
    }

    if (!book) {
        return null
    }

    return (
        <Container sx={{ py: 5 }} maxWidth="sm">
            <Paper sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ mt: 2 }}>{book.name}</Typography>
                <Typography variant="h5" sx={{ my: 1 }}>${book.price}</Typography>
                <Typography variant="subtitle1">
                    Category: {book.category?.name}
                </Typography>
                <Typography variant="subtitle1">
                    Author: {book.author?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {book.author?.description}
                </Typography>
                <Button variant="contained" sx={{ mr: 1 }}>Add to Cart</Button>
                <Button variant="outlined" onClick={() => navigate("/")}>Back</Button>
            </Paper>
        </Container>
    );
}