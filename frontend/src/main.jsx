// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import { ThemeProvider } from "@chakra-ui/react";
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//     <ThemeProvider>
//     <App />
//   </ThemeProvider>
//     </BrowserRouter>
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";  // Corrected import
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>  {/* Corrected ChakraProvider */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
