import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import { grey, blue } from "@mui/material/colors";


const BookCard = ({ book }) => {
    return (
        <Box
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
            <Box
                sx={{
                    width: "100%",
                    aspectRatio: "4/3",
                    backgroundColor: "rgb(0, 40, 100)",
                    borderRadius: "16px",
                    mb: 1,
                }}
            >
                {/* Empty for image placeholder */}
            </Box>
            <Typography variant="h5">
                {book.name}
            </Typography>
            <Typography>
                {book.price}
            </Typography>
        </Box>
    );
}

export default BookCard;