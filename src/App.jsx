import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

// Route Imports
import BookList from './pages/BookList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
