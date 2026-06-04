import { useState, useEffect } from "react";
import categoriesRepository from "../components/repository/categoriesRepository";
import { 
    Container,
    Paper, 
    List,
    ListItem,
    ListItemText,
} from "@mui/material";


export default function CategoryList() {

    const [categories, setCategories] = useState([])
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        categoriesRepository.listAll()
            .then((response) => {
                setCategories(response.data)
                setNotFound(false)
            })
            .catch((e) => {
                console.error(e)
                setNotFound(true)
            })
    }, [])

    return (
        <Container sx={{ py: 5 }} maxWidth="md">
            <Paper>
                <List>
                    {categories?.map((category) => (
                        <ListItem key={category.id} divider>
                            <ListItemText
                                primary={category.name}
                                secondary={category.description}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}