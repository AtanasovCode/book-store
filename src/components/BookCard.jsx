import { useNavigate } from "react-router-dom";
import {
    Typography,
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Box,
} from "@mui/material";
import { grey, blue } from "@mui/material/colors";


const BookCard = ({ book }) => {

    const navigate = useNavigate()

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
                transition: "all .3s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                    borderColor: "#fff"
                }
            }}
        >
            <CardActionArea onClick={() => navigate(`/books/${book.name}`)}>
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
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            width: "100%",
                            textAlign: "left"
                        }}>
                        {book.name}
                    </Typography>
                    <Typography variant="body1">
                        ${book.price}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}

export default BookCard;