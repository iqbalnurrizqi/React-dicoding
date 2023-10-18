import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import AddCatatan from './components/AddCatatan';

const root = createRoot(document.getElementById('root'));
root.render(<AddCatatan/>);