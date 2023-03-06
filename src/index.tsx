import theme from './Styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import './Styles/style.css';
import { ItemsContextProvider } from './Contexts/ItemsContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <ItemsContextProvider>
              <App />
            </ItemsContextProvider>
        </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);