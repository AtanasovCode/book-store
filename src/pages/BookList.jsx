import BookCard from "../components/BookCard";
import {
    Box,
    Container,
    Typography,
    Grid,
} from "@mui/material";


const BookList = () => {


    const books = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Phone", price: 599 },
        { id: 3, name: "Mouse", price: 199 },
        { id: 4, name: "Keyboard", price: 299 },
    ];

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
                    books.map((book) => {
                        return (
                            <Grid
                                key={book.id}
                                size={{ xs: 12, sm: 6, md: 4, }}
                            >
                                <BookCard book={book} />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Container>
    );
}

export default BookList;