import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button, CardMedia, Paper } from "@mui/material";



export default function BookDetails() {


    const products = [
        { id: 1, name: "Laptop", price: 999, description: "High-performance laptop with 16GB RAM and 512GB SSD." },
        { id: 2, name: "Phone", price: 599, description: "Latest smartphone with an OLED display and 128GB storage." },
        { id: 3, name: "Mouse", price: 199, description: "Ergonomic wireless mouse with adjustable DPI." },
        { id: 4, name: "Keyboard", price: 299, description: "Mechanical keyboard with RGB backlighting." },
    ];


    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <Container sx={{ py: 5 }}>
                <Typography variant="h5">Product not found.</Typography>
                <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate("/")}>
                    Back to Products
                </Button>
            </Container>
        );
    }

    return (
        <Container sx={{ py: 5 }} maxWidth="sm">
            <Paper sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ mt: 2 }}>{product.name}</Typography>
                <Typography variant="h5" sx={{ my: 1 }}>${product.price}</Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>{product.description}</Typography>
                <Button variant="contained" sx={{ mr: 1 }}>Add to Cart</Button>
                <Button variant="outlined" onClick={() => navigate("/")}>Back</Button>
            </Paper>
        </Container>
    );
}