import { useState, useEffect } from "react";
import axiosInstance from "../axios";
import BookCard from "../components/BookCard";
import {
    Box,
    Container,
    Typography,
    Grid,
} from "@mui/material";


const BookList = () => {

    const [books, setBooks] = useState([])
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        axiosInstance.get("/books")
            .then((response) => {
                console.log(response)
                setBooks(response.data)
                setNotFound(false)
            })
            .catch((e) => {
                console.error(e)
                setNotFound(true)
            })

    }, [])

    return (
        <Container>
            <Typography
                variant="h4"
                sx={{
                    mb: 6,
                    textAlign: "center",
                }}
            >
                Our Book Collection
            </Typography>
            <Grid
                container
                spacing={4}

            >
                {
                    books?.map((product) => {
                        return (
                            <Grid
                                key={product.id}
                                size={{ xs: 12, sm: 6, md: 4, }}
                            >
                                <BookCard product={product} />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Container>
    );
}

export default BookList;