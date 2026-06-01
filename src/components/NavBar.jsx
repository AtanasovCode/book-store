import { Link } from "react-router-dom";
import { 
    AppBar, 
    Container, 
    Box,
    Typography,
} from "@mui/material";

const NavBar = () => {
    return (
        <AppBar position="relative" sx={{ p: 4 }}>
           <Container maxWidth="xl">
             <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        fontWeight: 700,
                        color: "#fff",
                        textDecoration: "none"
                    }}
                >
                    Book Store
                </Typography>
                <Typography>
                    Cart
                </Typography>
            </Box>
           </Container>
        </AppBar>
    );
}

export default NavBar;