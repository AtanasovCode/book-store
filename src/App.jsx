import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

// Route Imports
import BookList from './pages/BookList';

// Component imports
import NavBar from './components/NavBar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/** Apply dark theme to all elements */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
