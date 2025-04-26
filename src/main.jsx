import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize';
import './main.css';
import { persistor, store } from './redux/store';
import App from './components/app/app.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <App />
        <Toaster />
      </StrictMode>
    </PersistGate>
  </Provider>
);
