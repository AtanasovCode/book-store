import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import { Box } from '@mui/material';

// Component imports
import NavBar from './components/NavBar';

// Route Imports
import BookList from './pages/BookList';
import BookDetails from './pages/BookDetails';
import CategoryList from './pages/CategoryList';
import AuthorList from './pages/AuthorList';
import BookFormPage from './pages/BookFormPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/** Apply dark theme to all elements */}
      <BrowserRouter>
        <NavBar />
        <Box sx={{ mt: 16, pb: 5 }}>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/books/new" element={<BookFormPage />} />
            <Route path="/books/update/:id" element={<BookFormPage />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/authors" element={<AuthorList />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
