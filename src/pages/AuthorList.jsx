import { useState, useEffect } from "react";
import authorsRepository from "../components/repository/authorsRepository";
import {
    Container,
    Paper,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";


export default function AuthorList() {

    const [authors, setAuthors] = useState([])
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        authorsRepository.listAll()
            .then((response) => {
                setAuthors(response.data)
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
                    {authors?.map((author) => (
                        <ListItem key={category.id} divider>
                            <ListItemText
                                primary={author.name}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}