import {
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    Box,
} from "@mui/material";
import { grey, blue } from "@mui/material/colors";


const BookCard = ({ book }) => {
    return (
        <Card
            sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #6f6c6c",
                borderRadius: "16px",
            }}
        >
            <CardMedia
                component="img"
                alt={book.name}
                sx={{
                    width: "100%",
                    aspectRatio: "4/3",
                    backgroundColor: "rgb(0, 40, 100)",
                    borderRadius: "16px",
                    mb: 1,
                }}
            >
                {/* Empty for image placeholder */}
            </CardMedia>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 1,
                }}
            >
                <Typography variant="h5">
                    {book.name}
                </Typography>
                <Typography variant="body1">
                    ${book.price}
                </Typography>
                <Button
                    variant="contained"
                >
                    See Details
                </Button>
            </Box>
        </Card>
    );
}

export default BookCard;